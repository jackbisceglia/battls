import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Router, Switch} from 'react-router-dom';
import LandingMain from './LandingPage/LandingMain'
import App from './App'

// -- TODO --
// Make Protected Route based on login
// Popular Posts
// Watch/Favorite List

// Main Routing Component
const Routing: React.FC = () => {
    const [isMain, setIsMain] = useState(true)


    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <LandingMain />
                </Route>

                {/* Turn into protected route */}
                {/* Add nested route for account page eventually */}
                <Route path="/home">
                    <App />
                </Route>
            </Switch>
        </BrowserRouter>
    );
  }
  
  export default Routing;