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
        );

        return insert.rows.length === 1;
    } 
    catch (error) {
        error.message();
    }
}

const authenticate = async ({username, email, password}) => {
    try {
        const usernameMatch = await pool.query(
            "SELECT username FROM users WHERE username = $1",
                [username]
        );

        const emailMatch = await pool.query(
            "SELECT email FROM users WHERE email = $1",
                [email]
        );

        const passwordMatch = await pool.query(
            "SELECT pass FROM users WHERE pass = crypt($1, pass)",
                [password]
        );

        const allMatches = (passwordMatch.rows.length == 1) && (emailMatch.rows.length == 1) && (usernameMatch.rows.length == 1);
        
        if (allMatches) {
            const getId = await pool.query(
                "SELECT usr_id FROM users WHERE username = $1",
                    [username]
            );

            return {
                success : true,
                usr_id : getId.rows[0].usr_id
            };
        }
        else {
            return {
                success : false,
                usr_id : null
            };
        }
    }
    catch (error) {
        console.log(error.message)    
    }
}

module.exports = { 
    userExists,
    getUserName, 
    createUser,
    authenticate
};