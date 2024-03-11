import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { reducer } from './reducer/Reducer.jsx';
import {createStore,applyMiddleware} from 'redux';
import { thunk } from 'redux-thunk';

import { Provider } from 'react-redux';

const store =createStore(reducer,applyMiddleware(thunk));
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>,
)
