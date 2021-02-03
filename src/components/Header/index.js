import React, { useState } from "react"

import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined"

import Menubar from "./Menubar"

import useUnmount from "../shared/useHook/useUnMount"

const Header = () => {
  const [isMount, setIsMount] = useState(false)
  const toggleMenu = e => {
    document.body.style.overflow = !isMount ? "hidden" : null
    setIsMount(!isMount)
  }
  const isRender = useUnmount(isMount, 350)
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      logo: file(absolutePath: { regex: "/suachuaonline24.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const logo = data?.logo?.childImageSharp?.fixed

  return (
    <header className="boxFull">
      <div className="box boxFlex">
        <div
          htmlFor="burger"
          role="button"
          tabIndex={0}
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
          className="header-burger-menu"
        >
          <div
            className={`${
              !isMount ? "button-menu" : "button-menu button-menu__active"
            }`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="header-logo">
          <Link to="/">
            <Image
              fixed={logo}
              alt="logo"
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
          </Link>
        </div>
        <div className="header-desktopNav">
          <ul className="header-navlink__items boxFlex">
            <li>
              <Link to="/">
                <span className="header-link__item">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span className="header-link__item">About</span>
              </Link>
            </li>
            <li>
              <Link to="/sewrvce">
                <span className="header-link__item">Services</span>
              </Link>
            </li>

            <li>
              <Link to="/contat">
                <span className="header-link__item">Contact</span>
              </Link>
            </li>
            <li>
              <Link to="/shop">
                <span className="header-link__item">Shop</span>
              </Link>
            </li>
          </ul>
        </div>
        {isRender && <Menubar isMount={isMount} />}
        <div className="shop-cart">
          <ShoppingCartOutlinedIcon />
          <span className="count">30</span>
        </div>
      </div>
    </header>
  )
}

export default Header
