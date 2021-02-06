import React from "react"
import Img from "gatsby-image"
import DeleteIcon from "@material-ui/icons/Delete"
import RemoveIcon from "@material-ui/icons/Remove"
import AddIcon from "@material-ui/icons/Add"

// REDUX
import { useDispatch, useSelector } from "react-redux"
import {
  clearCart,
  addCartItem,
  removeCartItem,
  reduceCartItem,
} from "../../redux/Cart/cart.actions"

// Material UI
import { Container, Grid } from "@material-ui/core"
import { Link } from "gatsby"

const mapState = ({ cartData }) => ({
  cartItems: cartData.cartItems,
})

const Cart = () => {
  const { cartItems } = useSelector(mapState)
  const dispatch = useDispatch()

  const sumQty = cartItems.reduce((acc, curItem) => acc + curItem.quantity, 0)
  const sumMoney = cartItems
    .reduce((acc, curItem) => acc + curItem.quantity * curItem.price, 0)
    .toFixed(2)
  const handleClearCart = () => {
    dispatch(clearCart())
  }
  const handlePlus = product => {
    dispatch(addCartItem(product))
  }
  const handleMinus = product => {
    dispatch(reduceCartItem(product))
  }
  const handleRemove = product => {
    dispatch(removeCartItem(product))
  }
  return (
    <div className="wrap-page cart-page">
      <Container maxWidth="lg">
        {cartItems.length > 0 ? (
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              {cartItems.map((item, index) => {
                return (
                  <div key={index} className="line-items">
                    <div className="line-items__left">
                      <div className="checkout-img-box">
                        <Img
                          fluid={
                            item.product.localFiles[0].childImageSharp.fluid
                          }
                        />
                      </div>
                      <div className="checkout-des">
                        <p className="checkout-des__name cart-small-text subtitle">
                          {item.fields.name}
                        </p>
                        <p className="checkout-des__adjust">
                          <RemoveIcon onClick={() => handleMinus(item)} />{" "}
                          <span>{item.quantity}</span>{" "}
                          <AddIcon onClick={() => handlePlus(item)} />
                        </p>
                      </div>
                    </div>
                    <div className="line-items__price">
                      <p className="line-items__delete">
                        <DeleteIcon onClick={() => handleRemove(item)} />
                      </p>
                      <p className="cart-small-text">€{item.price}</p>
                    </div>
                  </div>
                )
              })}
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="row-table">
                <p className="row-table__key">Zwischensumme</p>
                <p className="row-table__value">€{sumMoney}</p>
              </div>
              <div className="row-table">
                <p className="row-table__key">Artikels</p>
                <p className="row-table__value">{sumQty}</p>
              </div>
              <div className="row-table">
                <p className="row-table__key">Versandkosten</p>
                <p className="row-table__value">KOSTENLOS</p>
              </div>
              <hr />
              <div className="row-table">
                <p className="row-table__key cart-small-text ">Gesamtsumme</p>
                <p className="row-table__value cart-small-text">€{sumMoney}</p>
              </div>

              <button className="btn btn-checkout" onClick={handleClearCart}>
                Zu Kasse
              </button>
            </Grid>
          </Grid>
        ) : (
          <div>
            <h1 className="text-center">Ihr Einkaufswagen ist leer.</h1>
            <p className="cart-small-text">
              Überprüfen Sie unten Ihre für später gespeicherten Artikel oder
              <Link to="/shop">Einkauf fortsetzen.</Link>
            </p>
          </div>
        )}
      </Container>
    </div>
  )
}

export default Cart
