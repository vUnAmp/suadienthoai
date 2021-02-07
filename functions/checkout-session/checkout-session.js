const handler = async event => {
  try {
    const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
    // console.log(JSON.parse(event.body));
    const session = await stripe.checkout.sessions.retrieve(
      event.queryStringParameters.sessionId
    )
    return {
      statusCode: 200,
      body: JSON.stringify(session, null, 2),
    }
  } catch (error) {
    // return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
