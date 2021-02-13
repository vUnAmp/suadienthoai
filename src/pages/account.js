import { navigate } from "gatsby"
import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

import firebase from "gatsby-plugin-firebase"

const Account = ({ data, location }) => {
  const siteTitle = "Account details"
  console.log(location)
  if (location.action !== "PUSH") navigate("/")
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Account Details" />
      <div className="wrap-page">
        <h1>Hello from Account details</h1>
        <button
          onClick={() => {
            firebase.auth().signOut()
          }}
        >
          Log out
        </button>
      </div>
    </Layout>
  )
}

export default Account
