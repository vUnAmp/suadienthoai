import React, { useEffect } from "react"
import { Link } from "gatsby"
import "../layout.scss"
import Header from "../Header/index_backup"

import Footer from "../Footer"
import Loading from "../Loading"
import { checkUserSession } from "../../redux/User/user.actions"
import { useDispatch } from "react-redux"

const Layout = ({ title, children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [])

  return (
    <div className="wrap-site">
      <Loading />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
