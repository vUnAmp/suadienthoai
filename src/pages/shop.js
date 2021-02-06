import React from "react"
import Layout from "../components/Layout/layout"
import ListProducts from "../components/Products/ProductList"

const Shop = ({ data, location }) => {
  const siteTitle = `Unser Online Shop`

  return (
    <Layout location={location} title={siteTitle}>
      <ListProducts />
    </Layout>
  )
}

export default Shop
