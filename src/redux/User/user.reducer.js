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

    default:
      return state
  }
}
export default userReducer
