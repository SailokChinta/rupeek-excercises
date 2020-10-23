/*
    Need to put this at top. Because first model needs to be created.
    As in controller workshop schema is declared gloabally, it is called even before model is defined and as express interprets line by line it will throw an error.
*/
require( './db/init' );
const express = require( 'express' );
const path = require( 'path' );

const indexRouter = require( './routes/index' );
const workshopsRouter = require( './routes/workshops' );
const apiWorkshopsRouter = require( './routes/apis/workshops' );

const { pageNotFoundHandler, genericErrorHandler } = require( './middleware/error' );
const { dateLogger } = require('./middleware/utils');

/*
    there are five falsy values => false, '', null, undefinded, 0
*/
const port = process.env.PORT || 3000;

// connect()
//     .then( client => {
//         console.log( 'Successfully connected to MongoDB' );
//         console.log( client );
//     })
//     .catch( error => {
//         console.log( error.message );
//         process.exit();
//     });

const app = express();

app.use( dateLogger );

app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( __dirname, 'views' ) );

// these need to be used inorder to fetch request body
app.use( express.json() );
app.use( express.urlencoded() );

app.use( express.static( path.join( __dirname, 'public' ) ) );
app.use( indexRouter );
app.use( '/workshops', workshopsRouter );
app.use( '/api/workshops', apiWorkshopsRouter );

// error handling
/* This runs when a particular request is not found the code */
// app.use( pageNotFoundHandler );

/* This runs when any middleware throws error, irrespective of whereever it is, will skip all below middleware and comes here */
app.use( genericErrorHandler );

app.listen( port, err => {
    if( err ) {
        console.log( err.message );
        return;
    }

    console.log( `Server started on http://localhost:${port}`);
});