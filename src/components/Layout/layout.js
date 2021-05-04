import React, { useEffect } from "react"
import { Link } from "gatsby"
import "../layout.scss"
import Header from "../Header/index_backup"

import Footer from "../Footer"
import Loading from "../Loading"
import { checkUserSession } from "../../redux/User/user.actions"
import { useDispatch } from "react-redux"

const Layout = ({ location, title, children }) => {
  const dispatch = useDispatch()
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

  useEffect(() => {
    dispatch(checkUserSession())
  }, [])

  return (
    <div className="wrap-site" data-is-root-path={isRootPath}>
      <Loading />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
