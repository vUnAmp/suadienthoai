import { navigate } from "gatsby"
import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
const Account = ({ data, location }) => {
  const siteTitle = "Account details"
  console.log(location)
  if (location.action !== "PUSH") navigate("/")
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Account Details" />
      <div className="wrap-page">
        <h1>Hello from Account details</h1>
      </div>
    </Layout>
  )
}

export default Account
