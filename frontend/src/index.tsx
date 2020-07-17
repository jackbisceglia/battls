import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Styles/main.css'
import 'semantic-ui-css/semantic.min.css'

// Store
import { configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch } from 'react-redux';
import { setArr } from './Reducers/Slices/Posts'

import rootReducer from './Reducers'

const dispatch = useDispatch();

const store = configureStore({
  reducer: rootReducer
});


// DISPATCH INITIAL STATE
// dispatch()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
