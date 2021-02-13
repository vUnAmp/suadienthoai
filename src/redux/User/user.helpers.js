import firebase from "gatsby-plugin-firebase"

export const handleUserData = async ({ user, displayName }) => {
  const { uid } = user
  const userRef = firebase.firestore().doc(`users/${uid}`)
  const snapshot = await userRef.get()
  if (!snapshot.exists) {
    const { email } = user
    const timestamp = new Date()
    const userRoles = ["user"]

    try {
      await userRef.set({
        displayName,
        email,
        createdDate: timestamp,
        userRoles,
      })
    } catch (error) {
      // console.log(error)
    }
  }
  return userRef
}
export const checkUserAuth = async () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
}
