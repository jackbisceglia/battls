const express = require( "express" );
const router = express.Router();
const pool = require('../db');

// ----CREATE----
// Create Post
router.post('/makepost', async (req, res) => {
    try {
        const {user_id, poll_id, option_one, option_two} = req.body;

        const userExists = await pool.query(
            "SELECT * FROM users WHERE usr_id = $1",
                [user_id]
        );
        if (userExists.rows.length == 1) {
            const newPoll = await pool.query(
                "INSERT INTO polls (usr_id, poll_id, option_one, option_two) VALUES($1, $2, $3, $4)",
                    [user_id, poll_id, option_one, option_two]
            );
            res.json({success : true})
        }
        else {
            res.json({success : false})
        }
    }
    catch (error) {
      console.error(error.message)
    }
})
// ----READ----
// Get Feed
    // Query All Posts in DB by creation number and return recent posts from ((numProvided * 10) - 20)
    // ----OR----
    // Just query range ((numProvided * 10) - 20)

// Get Most Voted Posts
    // Get all posts in DB and filter by top 5 most voted
    // ----OR----
    // Get top 5 most total votes

// Get Popular Posts (later- could replace most popular)
    // Get Most Voted posted in last 12 hours

// Get All User's Posts
    // Get all where DB's userId == REQ's userId

// Get Relevant Posts (later)
    // Create some sort of relevant post algorithm


// ----Update----
// Add Vote
    // Add 1 to column where postId == postId provided


// ----Delete----
// Delete Post
    // DELETE post where postId == postId provided

module.exports = router;