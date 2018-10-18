require('dotenv').config()

const axios = require('axios')
const rgbHex = require('rgb-hex')
const kue = require('kue')
const queue = kue.createQueue({redis: process.env.REDIS_URL})
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const Product = require('./models/Product')

queue.process(
  'fetch Google Vision API',
  async function (job, done) {
    console.log('fetch vision api')

    try {
      // Fetch all the products that haven't been analyzed yet
      const products = await Product.find({mainColor: null}, 'photo')
      const errorList = []

      if (products.length === 0) {
        console.log('There are no products to process')
        return done()
      }

      // Batch the requests to save some api calls
      const range = 10
      for (let offset = 0; offset <= products.length; offset += range) {
        const productRequests = products.slice(offset, offset + range)
        const requests = productRequests.map(item => ({
          'image': {
            'source': {
              'imageUri': `https:${item.photo}`
            }
          },
          'features': [
            {
              'type': 'IMAGE_PROPERTIES'
            }
          ]
        }))

        const apiUrl = `https://vision.googleapis.com/v1/images:annotate?key=${process.env.GOOGLE_VISION_API_KEY}`
        const {data: {responses}} = await axios.post(apiUrl, {requests})

        const bulkUpdate = []
        for (let i = 0; i < requests.length; i++) {
          // Track api errors
          if (!responses[i].imagePropertiesAnnotation) {
            errorList.push(productRequests[i].photo)
            continue
          }

          const dominantColor = responses[i].imagePropertiesAnnotation.dominantColors.colors[0].color
          const hexColor = `#${rgbHex(dominantColor.red, dominantColor.green, dominantColor.blue)}`

          bulkUpdate.push({
            updateOne: {
              filter: {_id: productRequests[i]._id},
              update: {mainColor: hexColor}
            }
          })
        }

        await Product.bulkWrite(bulkUpdate)
      }

      console.log(`${products.length - errorList.length} products were updated, ${errorList.length} pictures could not be processed by the API`)
      return done()
    } catch (e) {
      console.log(e.message)
      return done(e.message)
    }
  }
)
