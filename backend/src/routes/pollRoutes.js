const express = require( "express" );
const router = express.Router();
const pool = require('../db');
const userQueries = require('../queries/userQueries');
const pollQueries = require('../queries/pollQueries');
const { response } = require("express");

// Modify query data to json for frontend
const modifyQueryResult = async (qRes) => {
    const {poll_id, usr_id, option_one, option_two, option_one_votes, option_two_votes} = qRes;
    const username = await userQueries.getUserName(usr_id);
    
    // **** Add userVoted middleware!

    return {
        id : poll_id,
        userid : usr_id,
        optionOne : option_one,
        optionTwo : option_two,
        posterName : username,
        optionOneVotes : option_one_votes,
        optionTwoVotes : option_two_votes,
        userVoted : {
            voted : false,
            isOptionOne : false
        }
    }   
} 

// ----CREATE----
// Create Post
router.post('/makepoll', async (req, res) => {
    userExists = userQueries.userExists(req.body.user_id);

    if (userExists) {
        const ret = await modifyQueryResult(await pollQueries.createPoll(req));
        console.log(ret)
        res.json({
            newPost: ret
        })
    }

    else {
        res.json({newPost : {}})
    }
});

// ----READ----
// Get Feed
router.get('/getfeed/:num', async (req, res) => {
    const { num } = req.params;

    const polls = await pollQueries.getPolls(num);

    const nextIndex = polls[polls.length - 1].num;

    const feed = [];
    for(let i = 0; i < polls.length; i ++){
        const insert = await modifyQueryResult(polls[i]);
        feed.push(insert);
    }

    console.log({
        feed : feed,
        nextNum : nextIndex
    })
    res.json({
        feed : feed,
        nextNum : nextIndex
    });

});

// Get Most Voted Posts
router.get('/getpopular', async (req, res) => {
    popular = await pollQueries.getPopular();
    const feed = [];

    for(let i = 0; i < popular.length; i ++){
        const insert = await modifyQueryResult(popular[i]);
        feed.push(insert);
    }
    res.json(feed);

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

router.get('/getusername/:user_id', async (req, res) => {
    const {user_id} = req.params;
    username = await userQueries.getUserName(user_id)
    console.log(username);
    res.json(username)
})

module.exports = router;