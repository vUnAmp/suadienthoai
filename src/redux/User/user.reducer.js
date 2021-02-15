import userTypes from "./user.types"

const INITIAL_STATE = {
  currentUser: null,
  userErr: "",
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SIGN_UP_ERROR:
      return {
        ...state,
        userErr: action.payload,
      }
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      }
    case userTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      }

    case userTypes.RESET_USER_ERROR:
      return {
        ...state,
        userErr: "",
      }
    default:
      return state
  }
}
export default userReducer
