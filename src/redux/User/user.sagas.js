import { put, call, takeLatest, all } from "redux-saga/effects"
import userTypes from "./user.types"
import { errorSignUp } from "./user.actions"

//  FIREBASE

import firebase from "gatsby-plugin-firebase"

export function* handleUserData(data) {
  console.log(data)
}

export function* userSignUp(data) {
  const { email, password, firstName } = data.payload
  try {
    const userRef = yield firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
    yield handleUserData(userRef)
  } catch (error) {
    console.log(error)
    yield put(errorSignUp(error.code))
  }
}

export function* onSignUp() {
  yield takeLatest(userTypes.START_SIGN_UP, userSignUp)
}

export default function* userSagas() {
  yield all([call(onSignUp)])
}
