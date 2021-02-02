import React from "react"

const Shop = () => {
  const handleClick = async () => {
    const data = await fetch("/.netlify/functions/prices")
      .then(res => res.json)
      .catch(err => console.log(err))
    console.log(data)
  }

  return (
    <div>
      <h1>Hello Stripe Gatsby</h1>
      <button onClick={handleClick}>Click get data</button>
    </div>
  )
}

export default Shop
