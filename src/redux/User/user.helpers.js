import firebase from "gatsby-plugin-firebase"

export const handleUserData = async ({ user, displayName }) => {
  const { uid } = user
  const userRef = firebase.firestore().doc(`users/${uid}`)
  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { email } = user
    const timestamp = new Date()
    const userRoles = ["user"]
    const { customerId } = await fetch("/.netlify/functions/create-customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    })
      .then(res => res.json())
      .catch(err => console.log(err))
    try {
      await userRef.set({
        displayName,
        email,
        createdDate: timestamp,
        userRoles,
        customerId,
        shoppingItems: [],
      })
    } catch (error) {
      // console.log(error)
    }
  }
  return userRef
}

export const handleShoppingData = async ({ currentUser, cartItems }) => {
  const { id } = currentUser
  const userRef = firebase.firestore().doc(`users/${id}`)
  try {
    console.log(cartItems)
    const snapshot = await userRef.get()
    const prevShoppingItems = snapshot.data()
    await userRef.update({
      shoppingItems: [...prevShoppingItems.shoppingItems, ...cartItems],
    })
  } catch (error) {
    // console.log(error)
  }
}

export const checkUserAuth = async () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
}
