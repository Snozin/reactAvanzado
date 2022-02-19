import { Link } from 'react-router-dom'
import T from 'prop-types'

import { ConfirmationButton } from '../../common'
import { useSelector, useDispatch } from 'react-redux'
import { userLogout } from '../../../store/actions'
import { getLoginState } from '../../../store/selectors'

const AuthButton = () => {
  const isLogged = useSelector(getLoginState)
  const dispatch = useDispatch()

  const handleLogoutConfirm = async () => {
    dispatch(userLogout())
  }

  return isLogged ? (
    <ConfirmationButton
      confirmation="Are you sure?"
      onConfirm={handleLogoutConfirm}
    >
      Logout
    </ConfirmationButton>
  ) : (
    <Link to="/login">Login</Link>
  )
}

AuthButton.propTypes = {
  isLogged: T.bool,
}

AuthButton.defaultProps = {
  isLogged: false,
}

export default AuthButton
