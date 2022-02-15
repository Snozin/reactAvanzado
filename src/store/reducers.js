import { USER_LOGIN, USER_LOGOUT } from './types'

const defaultState = {
  userAuth: false,
  adverts: [],
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, userAuth: true }

    case USER_LOGOUT:
      return { ...state, userAuth: false }

    default:
      return state
  }
}
