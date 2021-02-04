import React from "react"
import AboutUs from "../components/About"
import Layout from "../components/Layout/layout"

const About = ({ data, location }) => {
  const siteTitle = "ÜBER UNS"
  return (
    <Layout location={location} title={siteTitle}>
      <AboutUs />
    </Layout>
  )
}

export default About
