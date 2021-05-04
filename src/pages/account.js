import { navigate } from "gatsby"
import React, { useEffect } from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

import firebase from "gatsby-plugin-firebase"
import OderHistory from "../components/Account/OderHistory"

const Account = ({ data, location }) => {
  const siteTitle = "Account details"
  console.log(location)
  useEffect(() => {
    if (location.action !== "PUSH") navigate("/")
  }, [])
  return (
    <>
      <SEO title="Account Details" />
      <div className="wrap-page">
        <OderHistory />
      </div>
    </>
  )
}

export default Account
