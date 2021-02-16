import React, { useState, useEffect } from "react"

import { useStaticQuery, graphql, Link, navigate } from "gatsby"
import Image from "gatsby-image"

// Material UI

import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined"
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded"
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined"
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"

import Menubar from "./Menubar"

import useUnmount from "../hooks/useUnMount"

import { useSelector, useDispatch } from "react-redux"
import Account from "../Account"
import { checkUserSession, signOutStart } from "../../redux/User/user.actions"

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
const mapState = ({ cartData, user }) => ({
  cartItems: cartData.cartItems,
  currentUser: user.currentUser,
  toggleAccount: user.toggleAccount,
})

const Header = () => {
  const [isMount, setIsMount] = useState(false)
  const classes = useStyles()
  // getModalStyle is not a pure function, we roll the style only on the first render
  // const [modalStyle] = React.useState(getModalStyle)
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
    setIsMount(false)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const toggleMenu = e => {
    document.body.style.overflow = !isMount ? "hidden" : null
    setIsMount(!isMount)
  }
  const isRender = useUnmount(isMount, 350)
  const { cartItems, currentUser, toggleAccount } = useSelector(mapState)
  const dispatch = useDispatch()
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
  const handleSignOut = () => {
    dispatch(signOutStart())
    setOpen(false)
  }
  useEffect(() => {
    if (toggleAccount) {
      setOpen(true)
    }
  }, [toggleAccount])

  useEffect(() => {
    currentUser ? setOpen(false) : dispatch(checkUserSession())
    console.log("header rerendewrinsfa")
  }, [dispatch])

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
          </ul>
          {currentUser ? (
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              className="user-modal"
            >
              <div className={`${classes.paper} user-modal__inner`}>
                <p className="user-displayname">
                  {" "}
                  Hi {currentUser.displayName}{" "}
                </p>
                <p className="user-email">{currentUser.email} </p>
                <hr />
                <p className="user-account__details">
                  {" "}
                  <RateReviewOutlinedIcon />
                  <Link to="/account">Mein Konto</Link>
                </p>
                <p className="user-account__cart">
                  <ShoppingCartOutlinedIcon />
                  <Link to="/cart">Warenkorb</Link>
                </p>
                <p
                  role="button"
                  className="user-signout"
                  onClick={handleSignOut}
                >
                  <ExitToAppOutlinedIcon />
                  <span> Abmelden</span>
                </p>
              </div>
            </Modal>
          ) : (
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              className="account-modal"
            >
              <div className={`${classes.paper} page-modal`}>
                <Account />
              </div>
            </Modal>
          )}
        </div>
        {isRender && <Menubar isMount={isMount} toggleMenu={toggleMenu} />}
        <div className="boxFlex">
          <div
            className="header-link__account"
            onClick={
              // currentUser ? () => navigate("/account") :
              handleOpen
            }
          >
            <span>
              <AccountCircleRoundedIcon />
            </span>
          </div>
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
      </div>
    </header>
  )
}

export default Header
