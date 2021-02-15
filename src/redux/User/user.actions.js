import userTypes from "./user.types"

export const checkUserSession = () => ({
  type: userTypes.CHECK_USER_SESSION,
})

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
