import React from "react"
import AboutUs from "../components/About"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = "ÜBER UNS"
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="ÜBER UNS" />
      <AboutUs />
    </Layout>
  )
}

export default About
