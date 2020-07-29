import React, { useState, useEffect } from 'react';
import LandingMain from './LandingPage/LandingMain'
import App from './App'

// -- TODO --
// Import Router and add routes
// Add Auth State
//  - isAuthed
//  - userId
// Make Protected Route based on login
// Popular Posts
// Watch/Favorite List

// Main Routing Component
const Route: React.FC = () => {
    const [isMain, setIsMain] = useState(true)


    return isMain 
        ? 
            <>
            <button onClick={() => setIsMain(false)}>Change Page</button>
            <App />
            </> 
        : 
            <>
            <button onClick={() => setIsMain(true)}>Change Page</button>
            <LandingMain />
            </> 
  }
  
  export default Route;