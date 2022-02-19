import { getAdverts, getAdvertTags, getUIState } from './selectors'

describe('getAdverts', () => {
  test('should return an array of adverts', () => {
    const data = ['ad1', 'ad2']
    const state = {
      adverts: {
        data,
      },
    }
    expect(getAdverts(state)).toMatchObject(data)
  })
})

describe('getAdvertTags', () => {
  test('should return an array of tags', () => {
    const tags = ['tag1', 'tag2']
    const state = {
      adverts: {
        tags,
      },
    }
    expect(getAdvertTags(state)).toMatchObject(tags)
  })
})

describe('getUIState', () => {
  test('should return the ui state', () => {
    const state = {
      ui: {
        isLoading: false,
        error: null,
      },
    }
    expect(getUIState(state)).toMatchObject(state.ui)
  })
})
