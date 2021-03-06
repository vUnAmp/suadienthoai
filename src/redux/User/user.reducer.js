import userTypes from "./user.types"

const INITIAL_STATE = {
  currentUser: null,
  userErr: "",
  toggleAccount: false,
  loading: false,
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
    case userTypes.TOGGLE_ACCOUNT_MODAL:
      return {
        ...state,
        toggleAccount: !state.toggleAccount,
      }
    case userTypes.USER_LOADING_START:
      return {
        ...state,
        loading: true,
      }

    case userTypes.USER_LOADING_DONE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
export default userReducer
