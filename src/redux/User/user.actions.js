import userTypes from "./user.types"

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
