const pool = require('../db');
const { v4: uuidv4 } = require('uuid');

// get first row's index
const getFirstIndex = async () => {
    try {
        const i = await pool.query(
            "SELECT num FROM polls ORDER BY num asc LIMIT 1"
        );
    
        return i.rows[0].num;
    } 
    catch (error) {
        console.log(error.message)
    }

}

// insert poll into table
const createPoll = async (req) => {
    const {userid, optionOne, optionTwo} = req.body;

    const newPoll = await pool.query(
        "INSERT INTO polls (usr_id, poll_id, option_one, option_two) VALUES ($1, $2, $3, $4) RETURNING *",
            [userid, uuidv4(), optionOne, optionTwo]
    );

    return newPoll.rows[0];
}

// fetch all polls
const getPolls = async (lastIndex) => {
    try {   
        
        const newPoll = lastIndex == 0
            ?
            await pool.query(
                "SELECT * FROM polls ORDER BY num desc LIMIT 10"
            )
            : 
            await pool.query(
                "SELECT * FROM polls WHERE num < $1 ORDER BY num desc LIMIT 10",
                    [lastIndex]
            );

        return newPoll.rows;
    } 
    catch (error) {
        console.log(error.message);
    }

}
// fetch most voted polls
const getPopular = async () => {
    try {
        const popularPolls = await pool.query(
            "SELECT * FROM polls ORDER BY option_one_votes + option_two_votes desc limit 5"
        );

        return popularPolls.rows;
    } 
    catch (error) {
        console.log(error.message);    
    }
}

// fetch all of one user's polls
const getUserPolls = async (user_id) => {
    try {
        const usersPosts = await pool.query(
            "SELECT * FROM polls WHERE usr_id = $1 ORDER BY num",
                [user_id]
        );

        return usersPosts.rows;
    } 
    catch (error) {
        console.log(error.message);
    }
}

// add vote to a post
const addVote = async (poll_id, isOptionOne) => {
    try {
        const voteAdded = isOptionOne
            ? 
                await pool.query(
                    "UPDATE polls SET option_one_votes = option_one_votes + 1 WHERE poll_id = $1", [poll_id]
                )
            :
                await pool.query(
                    "UPDATE polls SET option_two_votes = option_two_votes + 1 WHERE poll_id = $1", [poll_id]
                );     

            return true;
    }
    catch (error) {
        console.log(error.message);
    }
}

// remove poll
const deletePoll = async (poll_id) => {
    try {
        const remove = await pool.query(
            "DELETE FROM polls WHERE poll_id = $1",
                [poll_id]
        );
        return true
    }
    catch (error) {
        console.log(error.message);    
    }

}


module.exports = { createPoll, getPolls, getPopular, getUserPolls, addVote, deletePoll, getFirstIndex };