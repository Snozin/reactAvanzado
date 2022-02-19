// import * as actions from './actions'
import { userLoginRequest, advertsLoadSuccess, userLogin } from './actions'
import {
  ADS_LOAD_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from './types'

// Test de acciones síncronas
describe('userLoginRequest', () => {
  test('should return an action with type: USER_LOGIN_REQUEST', () => {
    const expectedResult = {
      type: USER_LOGIN_REQUEST,
    }
    const result = userLoginRequest()
    expect(result).toEqual(expectedResult)
  })
})

describe('advertsLoadSuccess', () => {
  test('should return an action with type: ADS_LOAD_SUCCESS', () => {
    const ads = 'ads'
    const expectedResult = {
      type: ADS_LOAD_SUCCESS,
      payload: ads,
    }
    const result = advertsLoadSuccess(ads)
    expect(result).toEqual(expectedResult)
  })
})

// Test de acciones asíncronas
describe('userLogin', () => {
  const credentials = 'credentials'
  const history = {
    replace: jest.fn(),
  }
  const location = {
    state: '',
  }
  const action = userLogin(credentials, history, location)

  describe('when login API resolves', () => {
    const API = {
      authService: {
        login: jest.fn().mockResolvedValue(),
      },
    }
    const dispatch = jest.fn()
    const getState = () => {}

    test('should dispatch an USER_LOGIN_REQUEST action', () => {
      action(dispatch, getState, { API })
      expect(dispatch).toHaveBeenCalledWith({ type: USER_LOGIN_REQUEST })
    })

    test('should call API.authService.login with credentials', () => {
      action(dispatch, getState, { API })
      expect(API.authService.login).toHaveBeenCalledWith(credentials)
    })

    test('should dispatch an USER_LOGIN_SUCCESS action', async () => {
      await action(dispatch, getState, { API })
      expect(dispatch).toHaveBeenNthCalledWith(2, { type: USER_LOGIN_SUCCESS })
    })

    test('should redirect to "/"', async () => {
      await action(dispatch, getState, { API })
      expect(history.replace).toHaveBeenCalledWith({ pathname: '/' })
    })
  })

  describe('when login API rejects', () => {
    const error = 'Login Error'
    const API = {
      authService: {
        login: jest.fn(),
      },
    }
    const dispatch = jest.fn()
    const getState = () => {}

    test('should dispatch an USER_LOGIN_FAIL action', async () => {
      API.authService.login.mockRejectedValue(error)
      await action(dispatch, getState, { API })
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: USER_LOGIN_FAIL,
        error: true,
        payload: error,
      })
    })
  })
})
