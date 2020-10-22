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

const app = express();

app.use( dateLogger );

app.set( 'view engine', 'ejs' );
app.set( 'views', path.join( __dirname, 'views' ) );

app.use( express.static( path.join( __dirname, 'public' ) ) );
app.use( indexRouter );
app.use( '/workshops', workshopsRouter );
app.use( '/api/workshops', apiWorkshopsRouter );

// // error handling
// /* This runs when a particular request is not found the code */
// app.use( pageNotFoundHandler );

// /* This runs when any middleware throws error, irrespective of whereever it is, will skip all below middleware and comes here */
// app.use( genericErrorHandler );

app.listen( port, err => {
    if( err ) {
        console.log( err.message );
        return;
    }

    console.log( `Server started on http://localhost:${port}`);
});