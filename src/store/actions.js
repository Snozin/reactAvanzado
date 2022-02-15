import { USER_LOGIN, USER_LOGOUT } from './types'

export function userLogin() {
  return {
    type: USER_LOGIN,
  }
}

export function userLogout() {
  return {
    type: USER_LOGOUT,
  }
}
