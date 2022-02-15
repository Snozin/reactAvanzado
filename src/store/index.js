import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer } from './reducers'

// Se devuelve una función en lugar del propio store para poder configurar
// desde fuera otros parámetros que necesitaremos más adelante
const generateStore = () => {
  const store = createStore(reducer, composeWithDevTools())
  return store
}

export default generateStore
