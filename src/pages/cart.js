import React from "react"
import Cart from "../components/Cart"
import Contact from "../components/Contact"
import Layout from "../components/Layout/layout"

const cart = ({ location }) => {
  const siteTitle = `Cart`

  return (
    <Layout location={location} title={siteTitle}>
      <Cart />

      <Contact />
    </Layout>
  )
}

export default cart
