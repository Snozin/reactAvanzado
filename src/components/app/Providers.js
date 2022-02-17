import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

const Providers = ({ children, store }) => (
  <Provider store={store}>
    <Router>{children}</Router>
  </Provider>
)

export default Providers
