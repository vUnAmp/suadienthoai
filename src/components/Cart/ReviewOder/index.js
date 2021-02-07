import { Link, navigate } from "gatsby"
import React, { useState, useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../../../redux/Cart/cart.actions"

// import SEO from "../SEO"

// EmailJS
import emailjs, { init } from "emailjs-com"

init("user_pjN71AkA6f8IUCEG6ohxc")

const mapState = ({ cartData }) => ({
  cartItems: cartData.cartItems,
})

const ReviewOder = ({ location }) => {
  const [session, setSession] = useState({})
  const dispatch = useDispatch()
  const { cartItems } = useSelector(mapState)

  const oderSuccessItems = [...cartItems]
  const sumPay = oderSuccessItems
    .reduce((a, b) => a + Number(b.price) * b.quantity, 0)
    .toFixed(2)

  const sessionId = location.search.replace("?session_id=", "")

  const sendEmail = getSession => {
    const templeHTML = () =>
      `<div>
        <h2>Deine Bestellungen</h2>
        ${oderSuccessItems.map(
          item =>
            `<h4 style='color : chocolate'>
             Artikel: ${item.fields.name}   Qty:${item.quantity}x EUR${item.price}
            </h4>`
        )}

        <h4>
          Summe: EUR${sumPay}
        </h4>
      </div>`

    const templateParams = {
      message_html: templeHTML(),
      from_name: `PhoneABC GmbH`,
      to_bcc: getSession.customer_details.email,
    }

    emailjs
      .send(
        "service_l634urs",
        "template_rt2n1wt",
        templateParams,
        "user_pjN71AkA6f8IUCEG6ohxc"
      )
      .then(
        result => {
          // TODO something ...
          dispatch(clearCart())
        },
        error => {
          console.log(error.text)
        }
      )
  }
  const fetchSession = async () => {
    const getSession = await fetch(
      "/.netlify/functions/checkout-session?sessionId=" + sessionId
    )
      .then(res => res.json())
      .catch(err => {
        navigate("/")
      })
    if (getSession) {
      setSession(getSession)
      sendEmail(getSession)
    }
  }
  useEffect(() => {
    fetchSession()
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
