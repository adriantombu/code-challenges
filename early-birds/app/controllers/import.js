const { URL } = require('url')
const datalib = require('datalib')

const Product = require('../models/Product')

exports.importProducts = async function (req, res) {
  try {
    // Just check if we get a valid url
    const url = new URL(req.query.url)

    // A crappy test to check if we get a CSV
    if (!url.pathname.endsWith('.csv')) {
      throw Error('This endpoint accepts only CSV files')
    }

    const csvProducts = await datalib.dsv(url.href, {delimiter: ';'})
    const dbProducts = await Product.find().select('id')
    const dbIds = dbProducts.map(product => product.id)

    // Import or update the product
    const bulkRequest = []
    for (let csvProduct of csvProducts) {
      if (dbIds.includes(csvProduct.id)) {
        bulkRequest.push({
          updateOne: {
            filter: { id: csvProduct.id },
            update: csvProduct
          }
        })
      } else {
        bulkRequest.push({
          insertOne: {
            document: csvProduct
          }
        })
      }
    }

    await Product.bulkWrite(bulkRequest)

    return res.json({message: `${csvProducts.length} products were imported or updated`})
  } catch (e) {
    return res.json({error: e.message})
  }
}
