import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import App from './components/App'
import rootReducer from './reducers'
import { fetchContacts } from './actions/index'

const store = createStore(rootReducer, applyMiddleware(thunk))
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(fetchContacts());

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)