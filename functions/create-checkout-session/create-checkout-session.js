// const redirectUrl = "http://localhost:8888"
const redirectUrl = "https://repairphone24.de"
const handler = async event => {
  try {
    console.log(JSON.parse(event.body))
    const { line_items, email, customerId } = JSON.parse(event.body)
    const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
    // console.log(JSON.parse(event.body));
    const session = await stripe.checkout.sessions.create({
      success_url: `${redirectUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: redirectUrl,
      payment_method_types: ["card"],
      line_items: [...line_items],
      customer: customerId,
      // customer_email: email,
      mode: "payment",
      // Address Shipping required
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["DE"],
      },
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }, null, 2),
    }
  } catch (error) {
    // return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
