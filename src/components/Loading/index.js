import React from "react"
import LoopIcon from "@material-ui/icons/Loop"

import { useSelector } from "react-redux"
import userTypes from "../../redux/User/user.types"

const mapState = ({ user }) => ({
  loading: user.loading,
})

const Loading = () => {
  const { loading } = useSelector(mapState)
  return (
    <>
      {loading && (
        <div className="loading">
          <div className="loading-icon">
            <LoopIcon />
          </div>
        </div>
      )}
    </>
  )
}

export default Loading
