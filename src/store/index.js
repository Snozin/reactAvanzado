import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as reducers from './reducers'
import * as authService from '../components/auth/service'
import * as advertsService from '../components/adverts/service'

const API = {
  authService,
  advertsService,
}

const mainReducer = combineReducers(reducers)

function logger(store) {
  return function (next) {
    return function (action) {
      console.log('Despachando: ', action)
      next(action)
      console.log('Nuevo estado: ', store.getState())
    }
  }
}

const generateStore = (preloadState) => {
  const middlewares = [
    thunk.withExtraArgument({
      API,
    }),
    logger,
  ]
  const store = createStore(
    mainReducer,
    preloadState,
    composeWithDevTools(applyMiddleware(...middlewares))
  )
  return store
}

export default generateStore
