// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
// const handler = async event => {
//   console.log(event)
//   try {
//     const subject = event.queryStringParameters.name || "World"
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: `Hello ${subject}` }),
//       // // more keys you can return:
//       // headers: { "headerName": "headerValue", ... },
//       // isBase64Encoded: true,
//     }
//   } catch (error) {
//     return { statusCode: 500, body: error.toString() }
//   }
// }

// module.exports = { handler }

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
