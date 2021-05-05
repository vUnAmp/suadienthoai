import React, { useEffect } from "react"
import { Provider, useDispatch } from "react-redux"

// import { persistStore } from 'redux-persist';

import {
  store,
  //  persistor
} from "./src/redux/createStore"
import { PersistGate } from "redux-persist/integration/react"

import { checkUserAuth } from "./src/redux/User/user.helpers"

import Layout from "./src/components/Layout/layout"

// eslint-disable-next-line react/display-name,react/prop-types
const WrapSite = ({ element }) => {
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts

  return (
    <Provider store={store}>
      <Layout>
        {element}
        {/* <PersistGate persistor={persistor}>
        </PersistGate> */}
      </Layout>
    </Provider>
  )
}
export default WrapSite
