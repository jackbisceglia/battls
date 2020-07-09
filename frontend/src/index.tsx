import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './Styles/main.css'
import 'semantic-ui-css/semantic.min.css'

// Store
import { configureStore } from "@reduxjs/toolkit";
import {Provider} from 'react-redux';
import rootReducer from './Reducers'

const store = configureStore({
  reducer: rootReducer
});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
