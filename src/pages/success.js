import React, { useState, useEffect } from "react"
import ReviewOder from "../components/Cart/ReviewOder"
import Contact from "../components/Contact"
import Layout from "../components/Layout/layout"

import { useDispatch, useSelector } from "react-redux"
import { navigate } from "gatsby"

const mapState = ({ cartData }) => ({
  sessionId: cartData.sessionId,
})
const Success = ({ location }) => {
  const [checkSession, setCheckSession] = useState(false)
  const tempSessionId = location.search.replace("?session_id=", "")
  const { sessionId } = useSelector(mapState)

  const dispatch = useDispatch()
  const siteTitle = `Success checkout`
  useEffect(() => {
    if (tempSessionId === sessionId) {
      navigate("/")
    } else {
      setCheckSession(true)
    }
  }, [tempSessionId, sessionId])
  return (
    <Layout location={location} title={siteTitle}>
      {checkSession && <ReviewOder location={location} />}
      <Contact />
    </Layout>
  )
}

export default Success
