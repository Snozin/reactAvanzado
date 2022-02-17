import React from 'react'
import ReactDOM from 'react-dom'

import { configureClient } from './api/client'
import storage from './utils/storage'
import './index.css'
import App from './components/app'
import Providers from './components/app/Providers'
import generateStore from './store'

const accessToken = storage.get('auth')
configureClient({ accessToken })

const store = generateStore()
console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <Providers store={store}>
      <App isInitiallyLogged={!!accessToken} />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
)
