import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { Provider, useDispatch } from 'react-redux'
import * as actions from '../../../store/actions'
// import generateStore from '../../../store'

import LoginPage from './LoginPage'

describe('loginPage', () => {
  const store = {
    getState: () => ({
      ui: {
        isLoading: '',
        error: '',
      },
    }),
    subscribe: () => {},
    dispatch: jest.fn(),
  }
  const email = 'mod@test.com'
  const password = '123'

  jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
  }))
  const mockAction = jest.spyOn(actions, 'userLogin')

  test('should dispatch userLogin action', () => {
    const { getByLabelText, getByRole } = render(
      <Provider store={store}>
        <LoginPage location={{}} history={{ replace() {} }} />
      </Provider>
    )

    const emailField = getByLabelText(/Email/)
    const passwordField = getByLabelText(/Password/)
    const submitButton = getByRole('button')

    expect(submitButton).toBeDisabled()
    fireEvent.change(emailField, { target: { value: email } })
    fireEvent.change(passwordField, { target: { value: password } })
    expect(submitButton).not.toBeDisabled()

    fireEvent.click(submitButton)
    expect(mockAction).toHaveBeenCalled()
  })
})
