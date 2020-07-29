import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Router, Switch} from 'react-router-dom';
import LandingMain from './LandingPage/LandingMain'
import App from './App'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './Reducers';

// -- TODO --
// State doesnt reset when signout occurs
// Local State && Sessions for persistence
// Popular Posts
// Watch/Favorite List

// Main Routing Component
const Routing: React.FC = () => {
    const auth = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    return (auth.authorized ? <App /> : < LandingMain/>)
  }
  
  export default Routing;