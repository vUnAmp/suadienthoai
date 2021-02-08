import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import HomeIcon from "../../../Icons/Home"
import AboutIcon from "../../../Icons/About"
import ServiceIcon from "../../../Icons/Service"
import ContactIcon from "../../../Icons/Contact"
import TerminIcon from "../../../Icons/Termin"

const Menubar = ({ isMount, toggleMenu, handleOpen }) => {
  return (
    <div
      id="burger"
      className={`${
        isMount ? "header-navlink  header-navlink__active" : "header-navlink"
      }`}
    >
      <span
        onClick={() => {
          toggleMenu()
          handleOpen()
        }}
        className="header-link__account"
      >
        Account
      </span>
      <ul className="header-navlink__items boxFlex">
        <li onClick={toggleMenu}>
          <Link to="/">
            <span>
              <HomeIcon width="20px" height="20px" />
            </span>
            <span>Home</span>
          </Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/about">
            <span>
              <AboutIcon width="20px" height="20px" />
            </span>
            <span>About</span>
          </Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/services">
            <span>
              <ServiceIcon width="20px" height="20px" />
            </span>
            <span>Services</span>
          </Link>
        </li>

        <li onClick={toggleMenu}>
          <Link to="/shop">
            <span>
              <ContactIcon width="20px" height="20px" />
            </span>
            <span>Shop</span>
          </Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/">
            <span>
              <TerminIcon width="20px" height="20px" />
            </span>
            <span>Termin</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Menubar
