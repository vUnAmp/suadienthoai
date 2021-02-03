import React from "react"
import Layout from "../components/Layout/layout"
import ListProducts from "../components/Products/ProductList"
import useGatsbyStripeData from "../components/hooks/useGatsbyStripeData"

const Shop = ({ data, location }) => {
  const siteTitle = `Unser Online Shop`
  // const data1 = useGatsbyStripeData()
  // console.log(data1)
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
