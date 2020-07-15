const express = require( "express" );
const router = express.Router();
const pool = require('../db');
const userQueries = require('../queries/userQueries');
const pollQueries = require('../queries/pollQueries');

// ----CREATE----
// Create Post
router.post('/makepost', async (req, res) => {
    userExists = userQueries.userExists(req.body.user_id);
    
    if (userExists) {
        await pollQueries.createPoll(req)
        res.json({success : true})
    }

    else {
        res.json({success : false})
    }
});

// ----READ----
// Get Feed
router.get('/getFeed/:num', async (req, res) => {
        const { num } = req.params;
        polls = await pollQueries.getPolls(num);

        res.json({
            feed : polls,
            previous: parseInt(num) - 1,
            nextNum : parseInt(num) + 1
        });

});

// Get Most Voted Posts
router.get('/getpopular', async (req, res) => {
    popular = await pollQueries.getPopular();

    res.json(popular);

});


// Get All User's Posts
    // Get all where DB's userId == REQ's userId
router.get('/userposts/:user_id', async (req, res) => {
    const { user_id } = req.params;

    const allPosts = await pollQueries.getUserPosts(user_id)

    res.json(allPosts)
});
    
    
// ----Update----
    // Add Vote
    // Add 1 to column where postId == postId provided


// ----Delete----
// Delete Post
// DELETE post where postId == postId provided


// (LATER) Get Popular Posts (could replace most popular)
// Get Most Voted posted in last 12 hours

// (LATER) Get Relevant Posts (could replace feed)
// Create some sort of relevant post algorithm

module.exports = router;