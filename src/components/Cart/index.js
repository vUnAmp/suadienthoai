import React from "react"
import Img from "gatsby-image"

// REDUX
import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../../redux/Cart/cart.actions"

// Material UI
import { Container, Grid } from "@material-ui/core"

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
  console.log(cartItems)
  return (
    <div className="wrap-page cart-page">
      <Container maxWidth="lg">
        <Grid container>
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
              clear cart
            </button>
          </Grid>
          <Grid item xs={12} md={8}>
            {cartItems.map((item, index) => {
              return (
                <div key={index} className="line-items">
                  <div className="line-items__left">
                    <div className="checkout-img-box">
                      <Img
                        fluid={item.product.localFiles[0].childImageSharp.fluid}
                      />
                    </div>
                    <div className="checkout-des">
                      <p className="checkout-des__name cart-small-text">
                        {item.fields.name}
                      </p>
                    </div>
                  </div>
                  <div className="line-items__price">
                    <p className="cart-small-text">€{item.price}</p>
                  </div>
                </div>
              )
            })}
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Cart
