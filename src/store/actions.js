import { USER_LOGIN, USER_LOGOUT, ADS_LOADED } from './types'

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

export function adsLoaded(ads) {
  return {
    type: ADS_LOADED,
    payload: ads,
  }
}
