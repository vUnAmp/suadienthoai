const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

module.exports.handler = async (event, context, callback) => {
  const prices = await stripe.prices.list({
    limit: 100, // max allowed
    expand: ["data.product"],
  })
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(prices, null, 2),
  }
  callback(null, response)
}
