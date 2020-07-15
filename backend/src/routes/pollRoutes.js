const express = require( "express" );
const router = express.Router();
const pool = require('../db');
const userQueries = require('../queries/userQueries');
const pollQueries = require('../queries/pollQueries');
const { response } = require("express");

// ----CREATE----
// Create Post
router.post('/makepoll', async (req, res) => {
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
router.get('/userpolls/:user_id', async (req, res) => {
    const { user_id } = req.params;

    const allPosts = await pollQueries.getUserPolls(user_id)

    res.json(allPosts)
});
    
    
// ----Update----
router.put('/addvote', async (req, res) => {
    let wasSuccess = false;
    const { poll_id, isOptionOne } = req.body;

    wasSuccess = await pollQueries.addVote(poll_id, isOptionOne)

    res.json({success : wasSuccess});
});

// ----Delete----
// Delete Post
// DELETE post where postId == postId provided
router.delete('/deletepoll/:poll_id', async(req, res) => {
    let wasSuccess = false;
    const { poll_id } = req.params;

    wasSuccess = await pollQueries.deletePoll(poll_id);

    res.json({success : wasSuccess})
});

// (LATER) Get Popular Posts (could replace most popular)
// Get Most Voted posted in last 12 hours

// (LATER) Get Relevant Posts (could replace feed)
// Create some sort of relevant post algorithm

module.exports = router;