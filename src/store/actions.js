import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  ADS_LOAD_SUCCESS,
  ADS_LOAD_REQUEST,
  ADS_LOAD_FAIL,
  UI_RESET_ERROR
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

export function userLogin(credentials, history, location) {
  return async function (dispatch, getState, { API }) {
    dispatch(userLoginRequest())
    try {
      await API.authService.login(credentials)
      dispatch(userLoginSuccess())
      const { from } = location.state || { from: { pathname: '/' } }
      history.replace(from)
    } catch (error) {
      dispatch(userLoginFail(error))
    }
  }
}

export function userLogout() {
  return {
    type: USER_LOGOUT,
  }
}

export function advertsLoadRequest() {
  return {
    type: ADS_LOAD_REQUEST,
  }
}
export function advertsLoadSuccess(data) {
  return {
    type: ADS_LOAD_SUCCESS,
    payload: data,
  }
}
export function advertsLoadFail(error) {
  return {
    type: ADS_LOAD_FAIL,
    error: true,
    payload: error,
  }
}

export function advertsLoad() {
  return async function (dispatch, getState, { API }) {
    dispatch(advertsLoadRequest())
    try {
      const ads = await API.advertsService.getAdverts()
      dispatch(advertsLoadSuccess(ads))
    } catch (error) {
      dispatch(advertsLoadFail(error))
    }
  }
}

export function UIResetError() {
  return {
    type: UI_RESET_ERROR
  }
}
