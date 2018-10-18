const kue = require('kue')
const queue = kue.createQueue({redis: process.env.REDIS_URL})

exports.setProductsDominantColor = async function (req, res) {
  try {
    queue
      .create('fetch Google Vision API')
      .removeOnComplete(true)
      .save()

    return res.json({message: 'The products are being analyzed'})
  } catch (e) {
    return res.json({error: e.message})
  }
}
