import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { reducer } from './reducers'
import * as reducers from './reducers'

console.log(reducers)

const mainReducer = combineReducers(reducers)
// Se devuelve una función en lugar del propio store para poder configurar
// desde fuera otros parámetros que necesitaremos más adelante
const generateStore = () => {
  const store = createStore(mainReducer, composeWithDevTools())
  return store
}

export default generateStore
