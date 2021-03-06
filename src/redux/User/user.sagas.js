import { put, call, takeLatest, all } from "redux-saga/effects"
import userTypes from "./user.types"
import {
  errorSignUp,
  signInSuccess,
  signOutSuccess,
  userLoadingDone,
} from "./user.actions"
import {
  handleUserData,
  checkUserAuth,
  handleShoppingData,
} from "./user.helpers"
//  FIREBASE

import firebase from "gatsby-plugin-firebase"

export function* getSnapshotUserAuth(user, displayName) {
  try {
    const userRef = yield call(handleUserData, { user, displayName })
    const snapshot = yield userRef.get()
    yield put(
      signInSuccess({
        id: snapshot.id,
        ...snapshot.data(),
      })
    )
    yield put(userLoadingDone())
  } catch (error) {
    console.log(error)
  }
}

export function* checkUserSession() {
  try {
    const user = yield checkUserAuth()

    if (!user) return
    yield getSnapshotUserAuth(user)
  } catch (error) {
    console.log(error)
  }
  // const user =
}

export function* userSignIn(data) {
  const { email, password } = data.payload
  try {
    const { user } = yield firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
    // console.log(user)
    yield getSnapshotUserAuth(user)
  } catch (error) {
    console.log(error)
    // let userErr

    yield put(
      errorSignUp(
        error.code === "auth/user-not-found" ||
          error.code === "auth/wrong-password"
          ? "Das hat leider nicht funktioniert. Versichern Sie sich, dass Sie die richtige E-Mail-Adresse und das richtige Passwort verwenden."
          : error.message
      )
    )
    yield put(userLoadingDone())
  }
}

export function* userSignUp(data) {
  const { email, password, displayName } = data.payload
  try {
    const { user } = yield firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
    yield getSnapshotUserAuth(user, displayName)
  } catch (error) {
    // console.log(error)

    if (error)
      yield put(
        errorSignUp(
          error.code === "auth/email-already-in-use"
            ? "Für die angegebene E-Mail-Adresse existiert bereits ein Benutzerkonto."
            : error.message
        )
      )
    yield put(userLoadingDone())
  }
}

export function* userSignOut() {
  try {
    yield firebase.auth().signOut()
    yield put(signOutSuccess())
  } catch (error) {
    console.log(error)
  }
}

export function* userUpdateShoppingItem(data) {
  console.log(data)
  const { currentUser, cartItems } = data.payload
  yield call(handleShoppingData, { currentUser, cartItems })
  yield getSnapshotUserAuth({ uid: currentUser.id })
}

export function* onSignIn() {
  yield takeLatest(userTypes.SIGN_IN_EMAIL, userSignIn)
}

export function* onSignUp() {
  yield takeLatest(userTypes.START_SIGN_UP, userSignUp)
}
export function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, checkUserSession)
}
export function* onSignOutUser() {
  yield takeLatest(userTypes.SIGN_OUT_START, userSignOut)
}

export function* onUpdateShoppingItem() {
  yield takeLatest(userTypes.UPDATE_SHOPPING_ITEM, userUpdateShoppingItem)
}
export default function* userSagas() {
  yield all([
    call(onSignUp),
    call(onSignIn),
    call(onCheckUserSession),
    call(onSignOutUser),
    call(onUpdateShoppingItem),
  ])
}
