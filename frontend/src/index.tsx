import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routing from './Routing';
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
      <Routing />      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
