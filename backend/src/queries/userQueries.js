const pool = require('../db');
const { v4: uuidv4 } = require('uuid');

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

const createUser = async ({ username, email, password }) => {
    try {
        const insert = await pool.query(
            "INSERT INTO users (usr_id, username, email, pass) VALUES ($1, $2, $3, crypt($4, gen_salt('bf', 8))) returning *",
                [uuidv4(), username, email, password]
        )

        return insert.rows.length === 1;
    } 
    catch (error) {
        error.message();
    }
}

module.exports = { 
    userExists,
    getUserName, 
    createUser
};