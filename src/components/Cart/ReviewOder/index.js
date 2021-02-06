import { Link, navigate } from "gatsby"
import React, { useState, useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../../../redux/Cart/cart.actions"

const mapState = ({ cartData }) => ({
  cartItems: cartData.cartItems,
})

const ReviewOder = ({ location }) => {
  const [session, setSession] = useState({})
  const dispatch = useDispatch()
  const { cartItems } = useSelector(mapState)

  const oderSuccessItems = { ...cartItems }
  console.log(session)
  const sessionId = location.search.replace("?session_id=", "")
  useEffect(() => {
    const fetchSession = async () => {
      setSession(
        await fetch(
          "/.netlify/functions/checkout-session?sessionId=" + sessionId
        )
          .then(res => res.json())
          .catch(err => {
            navigate("/")
          })
      )
    }
    fetchSession()
    dispatch(clearCart())
  }, [sessionId])

  return (
    <div className="wrap-page success-page">
      <div className="thanks">
        Vielen <br /> Dank{" "}
      </div>
      <p className="cart-small-text">
        An email to confirm your Oder sent your Email :
      </p>
      <p className="success-email">{session?.customer_details?.email}</p>
      <p className="success-back">
        <Link to="/shop">Back to our Shop</Link>
      </p>
    </div>
  )
}

export default ReviewOder
