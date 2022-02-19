import {
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
  ADS_LOAD_SUCCESS,
  ADS_LOAD_REQUEST,
  ADS_LOAD_FAIL,
  UI_RESET_ERROR,
  ADS_GET_TAGS,
  AD_CREATE_SUCCESS,
  AD_DELETE_SUCCESS,
  AD_GET_BY_ID,
} from './types'

export const defaultState = {
  userAuth: false,
  adverts: {
    data: [],
    tags: [],
    getById: {
      name: '',
      sale: true,
      price: 0,
      tags: [],
    },
  },
  ui: {
    isLoading: false,
    error: null,
  },
}

export function userAuth(state = defaultState.userAuth, action) {
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
  switch (action.type) {
    case ADS_LOAD_SUCCESS:
      return { ...state, data: action.payload }
    case ADS_LOAD_FAIL:
      return action.payload
    case ADS_GET_TAGS:
      return { ...state, tags: action.payload }
    case AD_CREATE_SUCCESS:
      return state
    case AD_DELETE_SUCCESS:
      return state
    case AD_GET_BY_ID:
      return { ...state, getById: action.payload }
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
    case ADS_LOAD_REQUEST:
      return { isLoading: true, error: null }
    case ADS_LOAD_SUCCESS:
      return { isLoading: false, error: null }
    case ADS_LOAD_FAIL:
      return { isLoading: false, error: action.payload }
    case UI_RESET_ERROR:
      return { ...state, error: null }
    default:
      return state
  }
}
