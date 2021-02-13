import React, { useEffect } from "react"

const Wrap = ({ children }) => {
  useEffect(() => {
    console.log("wrapp is rerender......====")
  })
  return <div>{children}</div>
}

export default Wrap
