import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import store from './redux/store'
import {Provider} from 'react-redux'
// store.subscribe(() => console.log(store.getState()))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
)
