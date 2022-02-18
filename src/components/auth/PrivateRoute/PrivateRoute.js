import { Redirect, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = props => {
  const isLogged = useSelector(state => state.userAuth);
  const location = useLocation();

  return isLogged ? (
    <Route {...props} />
  ) : (
    <Redirect to={{ pathname: '/login', state: { from: location } }} />
  );
};

export default PrivateRoute;
