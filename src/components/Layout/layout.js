import React, { useEffect } from "react"
import { Link } from "gatsby"
import "../layout.scss"
import Header from "../Header/index_backup"

import Footer from "../Footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  useEffect(() => {
    console.log("rerendering ....")
  }, [])
  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="wrap-site" data-is-root-path={isRootPath}>
      <Header />
      {/* <header className="global-header">{header}</header> */}
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
