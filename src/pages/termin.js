import React from "react"
import Layout from "../components/Layout/layout"

import SEO from "../components/seo"
import Intro from "../components/Intro"
import RelateProduct from "../components/Products/RelateProduct"
import useGatsbyStripeData from "../components/hooks/useGatsbyStripeData"

const Termin = ({ location }) => {
  const siteTitle = "ÜBER UNS"
  const data = useGatsbyStripeData()
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Schnelle Reparatur" />
      <Intro location={location} />
      <div className="product-related wrap-page">
        <RelateProduct data={data} />
      </div>
    </Layout>
  )
}

export default Termin
