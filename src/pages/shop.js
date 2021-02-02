import React from "react"
import Layout from "../components/layout"
import ListProducts from "../components/Products/ProductList"

const Shop = ({ data, location }) => {
  const siteTitle = `Unser Online Shop`

  const fetchData = async () => {
    const data = await fetch("/.netlify/functions/getdata").then(res =>
      res.json()
    )

    console.log(data)
    return data
  }
  const handleClick = async () => {
    fetchData()
  }

  return (
    <Layout location={location} title={siteTitle}>
      <ListProducts />
      <button onClick={handleClick}>Click get data</button>
    </Layout>
  )
}

export default Shop
