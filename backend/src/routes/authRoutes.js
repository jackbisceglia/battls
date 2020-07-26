const express = require( "express" );
const router = express.Router();
const pool = require('../db');
const userQueries = require('../queries/userQueries');


// Sign Up (Create user)
// Return userId
// Potentially create session/cookie
router.post('/signup', async (req, res) => {
    const success = await userQueries.createUser(req.body);

    res.json(success);
})

// Login (Authenticate)
    // Authenticate (Username || Email) && Password
    // Potentially create session/cookie

// Is Active (Check for active session) (Later)
    // Check if req cookie matches session cookie
    // Return boolean w/ userIf if true

// Signout (Delete session)
    // Destroy session

module.exports = router;
