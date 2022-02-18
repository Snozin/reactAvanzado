import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  ADS_LOADED,
} from './types'

export function userLoginRequest() {
  return {
    type: USER_LOGIN_REQUEST,
  }
}
export function userLoginSuccess() {
  return {
    type: USER_LOGIN_SUCCESS,
  }
}
export function userLoginFail(error) {
  return {
    type: USER_LOGIN_FAIL,
    error: true,
    payload: error,
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
