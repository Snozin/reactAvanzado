import React from 'react'
import T from 'prop-types'

import LoginForm from './LoginForm'
import { useDispatch, useSelector } from 'react-redux'
import { UIResetError, userLogin } from '../../../store/actions'
import { getUIState } from '../../../store/selectors'

function LoginPage({ location, history }) {
  const dispatch = useDispatch()
  const { isLoading, error } = useSelector(getUIState)

  const handleSubmit = (credentials) => {
    dispatch(userLogin(credentials, history, location))
  }

  const resetError = () => dispatch(UIResetError())

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
      {isLoading && <p>...login in nodepop</p>}
      {error && (
        <div onClick={resetError} style={{ color: 'red' }}>
          {error.message}
        </div>
      )}
    </div>
  )
}

LoginPage.propTypes = {
  location: T.shape({ state: T.shape({ from: T.object.isRequired }) })
    .isRequired,
  history: T.shape({ replace: T.func.isRequired }).isRequired,
}

export default LoginPage
