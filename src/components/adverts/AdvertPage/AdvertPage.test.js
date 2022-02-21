import AdvertPage from './AdvertPage'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

describe('AdvertPage', () => {
  test('snapshot test', () => {
    const store = {
      getState: () => ({
        ui: {},
        adverts: {
          tags: [],
          getById: {
            name: '',
            sale: true,
            price: 0,
            tags: [],
          },
        },
      }),
      subscribe: () => {},
      dispatch: () => {},
    }

    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <AdvertPage />
          </BrowserRouter>
        </Provider>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
