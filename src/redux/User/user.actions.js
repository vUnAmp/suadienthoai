import userTypes from "./user.types"

export const checkUserSession = () => {
  console.log("checking ...")
  return {
    type: userTypes.CHECK_USER_SESSION,
  }
}

export const signInEmail = data => ({
  type: userTypes.SIGN_IN_EMAIL,
  payload: data,
})

export const signInSuccess = data => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: data,
})

export const startSignUP = data => ({
  type: userTypes.START_SIGN_UP,
  payload: data,
})
export const errorSignUp = errMessage => ({
  type: userTypes.SIGN_UP_ERROR,
  payload: errMessage,
})

export const signOutStart = () => ({
  type: userTypes.SIGN_OUT_START,
})

export const signOutSuccess = () => ({
  type: userTypes.SIGN_OUT_SUCCESS,
})

export const resetUserError = () => ({
  type: userTypes.RESET_USER_ERROR,
})

export const toggleAccountModal = () => ({
  type: userTypes.TOGGLE_ACCOUNT_MODAL,
})

export const updateShoppingItem = items => ({
  type: userTypes.UPDATE_SHOPPING_ITEM,
  payload: items,
})

export const userLoadingStart = () => ({
  type: userTypes.USER_LOADING_START,
})
export const userLoadingDone = () => ({
  type: userTypes.USER_LOADING_DONE,
})
