import React from "react"
import Layout from "../components/Layout/layout"

import SEO from "../components/seo"
import Intro from "../components/Intro"
import RelateProduct from "../components/Products/RelateProduct"
import useGatsbyStripeData from "../components/hooks/useGatsbyStripeData"

const Termin = ({ location }) => {
  const data = useGatsbyStripeData()
  return (
    <>
      <SEO title="Termin Buchen" />
      <Intro location={location} />
      <div className="product-related wrap-page">
        <RelateProduct data={data} />
      </div>
    </>
  )
}

export default Termin
