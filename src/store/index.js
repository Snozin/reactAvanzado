import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as reducers from './reducers'
import * as authService from '../components/auth/service'
import * as advertsService from '../components/adverts/service'

// TODO implementar el servicio de pillar anuncioos del api
const API = {
  authService,
  advertsService
}

const mainReducer = combineReducers(reducers)

// const logger = store => next => action =>{}
function logger(store) {
  return function (next) {
    return function (action) {
      console.log('Despachando: ', action)
      next(action)
      console.log('Nuevo estado: ', store.getState())
    }
  }
}
// Thunk hecho a mano
// function thunk(store) {
//   return function (next) {
//     return function (action) {
//       if (typeof action === 'function') {
//         return action(store.dispatch, store.getState)
//       }
//       return next(action)
//     }
//   }
// }

// Se devuelve una función en lugar del propio store para poder configurar
// desde fuera otros parámetros que necesitaremos más adelante

const generateStore = (preloadState) => {
  // preloadState es un objeto que tiene la forma inicial que queremos darle
  // al estado, solo si lo necesitamos. Es un parámetro opcional
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
