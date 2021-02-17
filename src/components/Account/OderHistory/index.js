import React, { useEffect } from "react"
import Img from "gatsby-image"
import useGatsbyStripe from "../../hooks/useGatsbyStripeData"

import { useSelector } from "react-redux"
import { Container } from "@material-ui/core"

import RelateProduct from "../../Products/RelateProduct"

const mapState = ({ cartData, user }) => ({
  currentUser: user.currentUser,
})

const OderHistory = () => {
  const { currentUser } = useSelector(mapState)
  const data = useGatsbyStripe()
  console.log(currentUser)
  return (
    <Container>
      <h3>History of your Oders !!!!</h3>
      {currentUser?.shoppingItems?.map((item, index) => {
        return (
          <div key={index} className="line-items">
            <div className="line-items__left">
              <div
                className="checkout-img-box"
                onClick={() => {
                  // navigate(`/product/${item.fields.slug}`)
                  window.open(`/product/${item.fields.slug}`)
                }}
              >
                <Img fluid={item.product.localFiles[0].childImageSharp.fluid} />
              </div>
              <div className="checkout-des">
                <p
                  className="checkout-des__name cart-small-text subtitle"
                  onClick={() => {
                    // navigate(`/product/${item.fields.slug}`)
                    window.open(`/product/${item.fields.slug}`)
                  }}
                >
                  {item.fields.name}
                </p>
              </div>
            </div>
          </div>
        )
      })}
      {currentUser?.shoppingItems?.length === 0 && (
        <p>Your Shopping List is empty.</p>
      )}
      <div className="product-related">
        <RelateProduct data={data} />
      </div>
    </Container>
  )
}

export default OderHistory
