import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Route from './Route';
import './Styles/main.css'
import 'semantic-ui-css/semantic.min.css'

// Store
import { configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch } from 'react-redux';
import { getFeed } from './Reducers/Slices/Posts';

import rootReducer from './Reducers'

const store = configureStore({
  reducer: rootReducer
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Route />      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
