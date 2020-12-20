import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
const Header = () => {
  const [toggle, setToggle] = useState(true)
  const toggleMenu = e => {
    // e.preventDefault()
    // const x = document.getElementsByClassName("button-menu__icon")
    setToggle(!toggle)
  }
  //   useEffect(() => {
  //     if (!toggle) {
  //       document.getElementById("burger").style.maxHeight = "600px"
  //     } else {
  //       document.getElementById("burger").style.maxHeight = "0px"
  //     }
  //   }, [toggle])
  return (
    <header className="boxFull">
      <div className="box boxFlex">
        <div className="header-logo">
          <Link to="/">Logo</Link>
        </div>
        <label
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
        </label>

        <input type="checkbox" name="burger" id="burger" />
        <div
          //   className={`${
          //     toggle ? "header-navlink" : "header-navlink header-navlink__active"
          //   }`}

          className="header-navlink"
        >
          <ul className="header-navlink__items boxFlex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Services</Link>
            </li>
            <li>
              <Link to="/">Our Team</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Termin</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
