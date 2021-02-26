import { createStore, applyMiddleware, compose } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import createSagaMiddle from "redux-saga"
import { persistStore } from "redux-persist"

import rootReducer from "./rootReducer"
import rootSaga from "./rootSaga"

const sagaMiddleware = createSagaMiddle()
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose
export const middlewares = [
  thunk,
  //  logger,
  sagaMiddleware,
]

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
)
sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default {
  store,
  persistor,
}
