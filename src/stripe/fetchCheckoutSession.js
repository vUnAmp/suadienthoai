const fetchCheckoutSession = async (line_items, email, customerId) => {
  return fetch("/.netlify/functions/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ line_items, email, customerId }),
  }).then(res => res.json())
}

export default fetchCheckoutSession
