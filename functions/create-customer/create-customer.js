// const redirectUrl = "http://localhost:8888"
// const redirectUrl = "https://repairphone24.de"

const handler = async event => {
  try {
    console.log(JSON.parse(event.body))
    const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
    // console.log(JSON.parse(event.body));
    const customer = await stripe.customers.create({
      email: JSON.parse(event.body),
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ customerId: customer.id }, null, 2),
    }
  } catch (error) {
    // return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
