// LIBRARY IMPORTS
const express = require( "express" );
const router = express.Router()
const pool = require('./db');
const passport = require('passport')
const session = require('express-session')
const cors = require('cors');

const app = express();


// ALL APP MIDDLEWARE
app.use(cors());
app.use(passport.initialize())
app.use(express.json());

// ROUTE IMPORTS
const pollRoutes = require('./routes/pollRoutes');
const authRoutes = require('./routes/authRoutes');


// ROUTER USE
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.use('/polls', pollRoutes);

app.use('/auth', authRoutes);


// SERVER START
const port = 5000;
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );