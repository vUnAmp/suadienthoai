import React from "react"
import Layout from "../components/Layout/layout"
import ListProducts from "../components/Products/ProductList"
import SEO from "../components/seo"

const Shop = ({ data, location }) => {
  const siteTitle = `Unser Online Shop`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Shopping Online" />
      <ListProducts />
    </Layout>
  )
}

export default Shop
