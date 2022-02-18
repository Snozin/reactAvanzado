// import { combineReducers } from 'redux'
import {
  ADS_LOADED,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
} from './types'

// TODO Eliminar comentarios y limpiar

// Estado inicial por defecto
const defaultState = {
  userAuth: false,
  adverts: [],
  ui: {
    isLoading: false,
    error: null,
  },
}

/**
 * Ejemplo inicial con un reducer único
 */
// export const reducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case USER_LOGIN:
//       return { ...state, userAuth: true }

//     case USER_LOGOUT:
//       return { ...state, userAuth: false }

//     case ADS_LOADED:
//       return { ...state, adverts: action.payload }

//     default:
//       return state
//   }
// }

/**
 * Reducers parciales que se combinan al final en un reducer único
 */

export function userAuth(state = defaultState.userAuth, action) {
  // Retornara un estado nuevo con la misma forma que el estado por defecto AUTH
  // Dentro de este mini reducer el estado que se recibe es solo el valor de la
  // propiedad userAuth del estado global.
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return true
    case USER_LOGIN_FAIL:
      return false
    case USER_LOGOUT:
      return false
    default:
      return state
  }
}

export function adverts(state = defaultState.adverts, action) {
  // Retornara un estado nuevo con la misma forma que el estado por defecto ADS
  switch (action.type) {
    case ADS_LOADED:
      return action.payload
    default:
      return state
  }
}

export function ui(state = defaultState.ui, action) {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { isLoading: true, error: null }
    case USER_LOGIN_SUCCESS:
      return { isLoading: false, error: null }
    case USER_LOGIN_FAIL:
      return { isLoading: false, error: action.payload }
    default:
      return state
  }
}

/**
 * Ejemplo con reducer partiendo el reducer en partes
 *
 * Deberá recibir los mismos parámetros que el reducer inical y devolverá
 * un objeto con la misma estructura que el reducer inicial
 */
// Esta es la forma manual. Solo para ilustrarlo
// const combinedReducer = (state = defaultState, action) => {
//   return {
//     userAuth: authReducer(state.userAuth, action),
//     adverts: advertsReducer(state.adverts, action),
//   }
// }

/**
 * El combineReducers de redux recibe un objeto con la forma de nuestro estado.
 * Nosotros asignaremos los nombres de las claves y los valores serán los reducers
 * independientes que nos hemos creado.
 */
// const combineReducerRedux = combineReducers({
//   userAuth: authReducer,
//   adverts: advertsReducer
// })
