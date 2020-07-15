const pool = require('../db');

// user exists in db
const userExists = async (user_id) => {
    const userMatches = await pool.query(
        "SELECT * FROM users WHERE usr_id = $1",
            [user_id]
    );
    numUsers = userMatches.rows.length

    return numUsers == 1
}

module.exports = { userExists };