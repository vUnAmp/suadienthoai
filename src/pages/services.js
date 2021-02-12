import React from "react"
import AboutUs from "../components/About"
import Layout from "../components/Layout/layout"
import RelateProduct from "../components/Products/RelateProduct"
import Services from "../components/Services"

import useGatsbyStripeData from "../components/hooks/useGatsbyStripeData"
import SEO from "../components/seo"

const About = ({ location }) => {
  const data = useGatsbyStripeData()
  const siteTitle = "ÜBER UNS"
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Schnelle Reparatur" />
      <Services />
      <div className="product-related">
        <RelateProduct data={data} />
      </div>
    </Layout>
  )
}

export default About
