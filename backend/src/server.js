// LIBRARY IMPORTS
const express = require( "express" );
const router = express.Router()
const cors = require('cors');
const pool = require('./db');

const app = express();


// ALL APP MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTE IMPORTS
const pollRoutes = require('./routes/pollRotues');


// ROUTER USE
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

app.use('/polls', pollRoutes)


// SERVER START
const port = 5000;
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );