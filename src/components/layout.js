import React from "react"
import { Link } from "gatsby"
import "./layout.scss"
import Header from "./Header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

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
    <div className="boxFull" data-is-root-path={isRootPath}>
      <Header />
      {/* <header className="global-header">{header}</header> */}
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="">PhoneABC Gmbh</a>
      </footer>
    </div>
  )
}

export default Layout
