import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import {store} from '@store/store'

import App from './pages/_app'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById('root')
)