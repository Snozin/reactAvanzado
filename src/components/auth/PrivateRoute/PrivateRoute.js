import { Redirect, Route, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getLoginState } from '../../../store/selectors'

const PrivateRoute = (props) => {
  const isLogged = useSelector(getLoginState)
  const location = useLocation()

  return isLogged ? (
    <Route {...props} />
  ) : (
    <Redirect to={{ pathname: '/login', state: { from: location } }} />
  )
}

export default PrivateRoute
