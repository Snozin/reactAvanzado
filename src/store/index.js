import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as reducers from './reducers'

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

// Se devuelve una función en lugar del propio store para poder configurar
// desde fuera otros parámetros que necesitaremos más adelante
const generateStore = (preloadState) => {
  // preloadState es un objeto que tiene la forma inicial que queremos darle
  // al estado, solo si lo necesitamos. Es un parámetro opcional
  const store = createStore(
    mainReducer,
    preloadState,
    composeWithDevTools(applyMiddleware(logger))
  )
  return store
}

export default generateStore
