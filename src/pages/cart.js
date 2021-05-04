import React, { useEffect } from "react"
import { navigate } from "gatsby"
import Cart from "../components/Cart"
import Contact from "../components/Contact"
import Layout from "../components/Layout/layout"

const CartPage = ({ location }) => {
  const siteTitle = `Cart`
  useEffect(() => {
    if (location.action !== "PUSH") navigate("/")
  }, [])
  return (
    <>
      <Cart />

      <Contact />
    </>
  )
}

export default CartPage
