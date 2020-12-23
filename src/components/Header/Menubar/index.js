import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import HomeIcon from "../../../Icons/Home"
import AboutIcon from "../../../Icons/About"
import ServiceIcon from "../../../Icons/Service"
import ContactIcon from "../../../Icons/Contact"
import TerminIcon from "../../../Icons/Termin"

const Menubar = ({ toggle }) => {
  const [isOpen, setIsOpen] = useState(toggle)
  useEffect(() => {
    setIsOpen(!isOpen)
  }, [toggle])
  return (
    <div
      id="burger"
      className={`${
        toggle ? "header-navlink" : "header-navlink header-navlink__active"
      }`}
      className="header-navlink"
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
  )
}

export default Menubar
