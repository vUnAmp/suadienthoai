import React, { useState, useEffect } from "react"
import ReviewOder from "../components/Cart/ReviewOder"
import Contact from "../components/Contact"
import Layout from "../components/Layout/layout"

const Success = ({ location }) => {
  const siteTitle = `Success checkout`
  return (
    <Layout location={location} title={siteTitle}>
      <ReviewOder location={location} />
      <Contact />
    </Layout>
  )
}

export default Success
