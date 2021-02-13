import React, { useState } from "react"

import { useStaticQuery, graphql, Link, navigate } from "gatsby"
import Image from "gatsby-image"

// Material UI

import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"

import Menubar from "./Menubar"

import useUnmount from "../hooks/useUnMount"

import { useSelector } from "react-redux"
import Account from "../Account"

// function rand() {
//   return Math.round(Math.random() * 20) - 10
// }

// function getModalStyle() {
//   const top = 50 + rand()
//   const left = 50 + rand()

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   }
// }

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    maxWidth: 600,
    width: "96%",
    // backgroundColor: theme.palette.background.paper,
    border: "1px solid #666",
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
}))
const mapState = ({ cartData }) => ({
  cartItems: cartData.cartItems,
})

const Header = () => {
  const [isMount, setIsMount] = useState(false)
  const classes = useStyles()
  // getModalStyle is not a pure function, we roll the style only on the first render
  // const [modalStyle] = React.useState(getModalStyle)
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const toggleMenu = e => {
    document.body.style.overflow = !isMount ? "hidden" : null
    setIsMount(!isMount)
  }
  const isRender = useUnmount(isMount, 350)
  const { cartItems } = useSelector(mapState)
  let count = cartItems.reduce((a, b) => a + b.quantity, 0)
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
              <Link to="/services">
                <span className="header-link__item">Services</span>
              </Link>
            </li>

            <li>
              <Link to="/">
                <span className="header-link__item">Termin</span>
              </Link>
            </li>

            <li>
              <Link to="/shop">
                <span className="header-link__item">Shop</span>
              </Link>
            </li>
            <li onClick={handleOpen}>
              <span className="header-link__account">Account</span>
            </li>
          </ul>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <div className={`${classes.paper} page-modal`}>
              <Account />
            </div>
          </Modal>
        </div>
        {isRender && (
          <Menubar
            isMount={isMount}
            toggleMenu={toggleMenu}
            handleOpen={handleOpen}
          />
        )}
        <div
          role="button"
          className="shop-cart"
          onClick={() => {
            navigate("/cart")
          }}
        >
          <ShoppingCartOutlinedIcon />
          <span className="count">{count}</span>{" "}
        </div>
      </div>
    </header>
  )
}

export default Header
