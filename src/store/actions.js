import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  ADS_LOAD_SUCCESS,
  ADS_LOAD_REQUEST,
  ADS_LOAD_FAIL,
  ADS_GET_TAGS,
  AD_CREATE_SUCCESS,
  AD_DELETE_SUCCESS,
  AD_GET_BY_ID,
  UI_RESET_ERROR,
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
export function userLogoutRequest() {
  return {
    type: USER_LOGOUT,
  }
}
export function userLogout(){
  return async function(dispatch, getState, {API}){
    try {
      await API.authService.logout() 
      dispatch(userLogoutRequest())
    }catch (error){
      dispatch(userLoginFail(error))
    }
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

function advertsGetTags(data) {
  return {
    type: ADS_GET_TAGS,
    payload: data,
  }
}

export function getTags() {
  return async function (dispatch, getState, { API }) {
    try {
      const tags = await API.advertsService.getTags()
      dispatch(advertsGetTags(tags))
    } catch (error) {
      dispatch(advertsLoadFail(error))
    }
  }
}

export function advertCreateSuccess(id) {
  return {
    type: AD_CREATE_SUCCESS,
    payload: id
  }
}
export function advertDeleteSuccess() {
  return {
    type: AD_DELETE_SUCCESS,
  }
}
export function advertGetById(advert) {
  return {
    type: AD_GET_BY_ID,
    payload: advert
  }
}
export function createAdvert(advert, history) {
  return async function (dispatch, getState, { API }) {
    try {
      const newAdvert = await API.advertsService.createAdvert(advert)
      dispatch(advertCreateSuccess(newAdvert.id))
      history.push(`/adverts/${newAdvert.id}`)
    } catch (error) {
      dispatch(advertsLoadFail(error))
    }
  }
}
export function deleteAdvert(id, history) {
  return async function (dispatch, getState, { API }) {
    try {
      await API.advertsService.deleteAdvert(id)
      dispatch(advertDeleteSuccess())
      history.push('/')
    } catch (error) {
      dispatch(advertsLoadFail(error))
    }
  }
}
export function getAdvertById(id) {
  return async function(dispatch, getState, {API}){
    try {
      const advert = await API.advertsService.getAdvert(id)
      dispatch(advertGetById(advert))
    } catch (error) {
      dispatch(advertsLoadFail(error))
    }
  }
}

export function loadAvderts() {
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
    type: UI_RESET_ERROR,
  }
}
