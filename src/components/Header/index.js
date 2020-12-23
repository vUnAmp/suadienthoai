import React, { useState } from "react"

import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import HomeIcon from "../../Icons/Home"
import AboutIcon from "../../Icons/About"
import ServiceIcon from "../../Icons/Service"
import ContactIcon from "../../Icons/Contact"
import TerminIcon from "../../Icons/Termin"

const Header = () => {
  const [toggle, setToggle] = useState(true)
  const toggleMenu = e => {
    document.body.style.overflow = toggle ? "hidden" : null
    setToggle(!toggle)
  }
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
  console.log(data)
  const logo = data?.logo?.childImageSharp?.fixed

  return (
    <header className="boxFull">
      <div className="box boxFlex">
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
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>Services</span>
              </Link>
            </li>

            <li>
              <Link to="/">
                <span>Contact</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>Termin</span>
              </Link>
            </li>
          </ul>
        </div>
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
              toggle ? "button-menu" : "button-menu button-menu__active"
            }`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          id="burger"
          className={`${
            toggle ? "header-navlink" : "header-navlink header-navlink__active"
          }`}
        >
          <ul className="header-navlink__items boxFlex">
            <li>
              <Link to="/">
                <span>
                  <HomeIcon width="20px" height="20px" />
                </span>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>
                  <AboutIcon width="20px" height="20px" />
                </span>
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>
                  <ServiceIcon width="20px" height="20px" />
                </span>
                <span>Services</span>
              </Link>
            </li>

            <li>
              <Link to="/">
                <span>
                  <ContactIcon width="20px" height="20px" />
                </span>
                <span>Contact</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>
                  <TerminIcon width="20px" height="20px" />
                </span>
                <span>Termin</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
