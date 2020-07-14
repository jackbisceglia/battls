// Sign Up (Create user)
    // Authenticate Username, Email, and Pass (Might delegate to frontend)
    // Add to DB if all 3 are valid
    // Create userId w/ UUID
    // Return userId
    // Potentially create session/cookie

// Login (Authenticate)
    // Authenticate (Username || Email) && Password
    // Potentially create session/cookie

// Is Active (Check for active session) (Later)
    // Check if req cookie matches session cookie
    // Return boolean w/ userIf if true

// Signout (Delete session)
    // Destroy session