import React from "react"
import AboutUs from "../components/About"
import Layout from "../components/Layout/layout"
import Services from "../components/Services"

import SEO from "../components/seo"
import RelateProduct from "../components/Products/RelateProduct"
import useGatsbyStripeData from "../components/hooks/useGatsbyStripeData"

const About = ({ location }) => {
  const siteTitle = "ÜBER UNS"
  const data = useGatsbyStripeData()

  return (
    <>
      <SEO title="Schnelle Reparatur" />
      <Services />
      <div className="product-related wrap-page">
        <RelateProduct data={data} />
      </div>
    </>
  )
}

export default About
