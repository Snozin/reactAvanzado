import { adverts } from './reducers'
import {
  ADS_LOAD_SUCCESS,
  ADS_LOAD_FAIL,
  ADS_GET_TAGS,
  AD_CREATE_SUCCESS,
  AD_DELETE_SUCCESS,
  AD_GET_BY_ID,
} from './types'

describe('adverts', () => {
  const initialState = {
    data: [],
    tags: [],
    getById: {},
  }

  test('should handle ADS_LOAD_SUCCESS action', () => {
    const payload = ['some data']
    const action = {
      type: ADS_LOAD_SUCCESS,
      payload,
    }
    const expectedResult = {
      ...initialState,
      data: payload,
    }
    expect(adverts(initialState, action)).toEqual(expectedResult)
  })

  test('should handle ADS_GET_TAGS action', () => {
    const payload = ['some tags']
    const action = {
      type: ADS_GET_TAGS,
      payload,
    }
    const expectedResult = {
      ...initialState,
      tags: payload,
    }
    expect(adverts(initialState, action)).toEqual(expectedResult)
  })

  test('should handle AD_GET_BY_ID action', () => {
    const payload = 'advertId'
    const action = {
      type: AD_GET_BY_ID,
      payload,
    }
    const expectedResult = {
      ...initialState,
      getById: payload,
    }
    expect(adverts(initialState, action)).toEqual(expectedResult)
  })

  test('should handle ADS_LOAD_FAIL action', () => {
    const payload = 'error'
    const action = {
      type: ADS_LOAD_FAIL,
      payload,
    }
    const expectedResult = payload
    expect(adverts(initialState, action)).toEqual(expectedResult)
  })

  test('should handle AD_CREATE_SUCCESS action', () => {
    const action = {
      type: AD_CREATE_SUCCESS,
    }
    const expectedResult = initialState
    expect(adverts(initialState, action)).toEqual(expectedResult)
  })

  test('should handle AD_DELETE_SUCCESS action', () => {
    const action = {
      type: AD_DELETE_SUCCESS,
    }
    const expectedResult = initialState
    expect(adverts(initialState, action)).toEqual(expectedResult)
  })

  test('should handle any other action', () => {
    const action = {
      type: 'any',
    }
    const expectedResult = initialState
    expect(adverts(initialState, action)).toEqual(expectedResult)
  })
})
