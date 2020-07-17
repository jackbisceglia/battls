const pool = require('../db');

// user exists in db
const userExists = async (user_id) => {
    const userMatches = await pool.query(
        "SELECT * FROM users WHERE usr_id = $1",
            [user_id]
    );
    numUsers = userMatches.rows.length

    return numUsers == 1;
}

const getUserName = async (user_id) => {
    try {
        const username = await pool.query(
            "SELECT username FROM users WHERE usr_id = $1",
                [user_id]
        );
        return username.rows[0].username;  
    }
    catch (error) {
        console.log(error.message);    
    }
}


module.exports = { userExists, getUserName };