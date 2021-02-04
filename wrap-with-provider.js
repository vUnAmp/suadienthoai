import React from "react"
import { Provider } from "react-redux"

// import { persistStore } from 'redux-persist';

import { store, persistor } from "./src/redux/createStore"
import { PersistGate } from "redux-persist/integration/react"

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{element}</PersistGate>
    </Provider>
  )
}