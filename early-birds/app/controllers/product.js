const { proximity } = require('colour-proximity')

const Product = require('../models/Product')

exports.getSimilarProductsByColor = async function (req, res) {
  try {
    const nbSimilarProducts = req.query.nb || 10
    const product = await Product.findOne({ id: req.params.id })

    if (!product) {
      return res.json({error: 'The product was not found'})
    }

    const baseColor = product.mainColor

    // We don't need all the product's data yet
    const products = await Product.find({ mainColor: {$ne: null}, id: {$ne: req.params.id} }, 'mainColor')

    const similarList = products
      .sort((a, b) => proximity(baseColor, a.mainColor) - proximity(baseColor, b.mainColor))
      .slice(0, nbSimilarProducts)

    const similarProducts = []
    for (let product of similarList) {
      similarProducts.push(await Product.findOne({_id: product._id}))
    }

    // Optimized request, but we lose the proximity ranking
    // const similarListId = similarList.map(product => product._id)
    // const similarProducts = await Product.where('_id').in(similarListId)

    return res.json({product, similar_products: similarProducts})
  } catch (e) {
    return res.json({error: e.message})
  }
}
