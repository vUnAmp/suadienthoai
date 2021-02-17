import React from "react"
import AboutUs from "../components/About"
import Layout from "../components/Layout/layout"
import RelateProduct from "../components/Products/RelateProduct"
import Services from "../components/Services"

import useGatsbyStripeData from "../components/hooks/useGatsbyStripeData"
import SEO from "../components/seo"
import Intro from "../components/Intro"

const Termin = ({ location }) => {
  const data = useGatsbyStripeData()
  const siteTitle = "ÜBER UNS"
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Schnelle Reparatur" />
      <Intro />
      <div className="product-related">
        <RelateProduct data={data} />
      </div>
    </Layout>
  )
}

export default Termin
