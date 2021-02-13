import userTypes from "./user.types"

export const startSignUP = data => ({
  type: userTypes.START_SIGN_UP,
  payload: data,
})
export const errorSignUp = errMessage => ({
  type: userTypes.SIGN_UP_ERROR,
  payload: errMessage,
})
