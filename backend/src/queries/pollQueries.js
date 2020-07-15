const pool = require('../db');

// insert poll into table
const createPoll = async (req) => {

    const {user_id, poll_id, option_one, option_two} = req.body;

    const newPoll = await pool.query(
        "INSERT INTO polls (usr_id, poll_id, option_one, option_two) VALUES ($1, $2, $3, $4)",
            [user_id, poll_id, option_one, option_two]
    );
}

// fetch all polls
const getPolls = async (num) => {
    try {   
        fetchStart = (num * 10) - 10;

        const newPoll = await pool.query(
            "SELECT * FROM polls WHERE num > $1 ORDER BY num LIMIT 10;",
                [fetchStart]
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
            "SELECT * FROM polls ORDER BY option_one_votes + option_two_votes desc limit 5;"
        );

        return popularPolls.rows
    } 
    catch (error) {
        console.log(error.message);    
    }
}


module.exports = { createPoll, getPolls, getPopular };