const express = require( 'express' );
const path = require( 'path' );

const router = express.Router();

router.get( '/', ( req, res ) => {
    // res.sendFile( path.join( __dirname, '..', 'views', 'index.html' ) );
    res.render( 'index', {
        title: 'Workshops App | Home',
        appTitle: 'Workshops App v2'
    });
});

module.exports = router;