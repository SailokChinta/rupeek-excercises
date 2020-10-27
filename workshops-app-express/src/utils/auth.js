const jwt = require( 'jsonwebtoken' );
const { Error } = require('mongoose');

function authenticate( req, res, next ) {
    // get authorization token
    const token = req.header( 'Authorization' );

    if( !token ) {
        const error = new Error( 'Token is missing' );
        error.status = 401;
        next( error );
        return;
    }

    // verifying token with secret key
    jwt.verify( token, 'shh...', ( err, claims ) => {
        if( err ) {
            return res.status( 403 ).json({ message: 'Not authorized' });
        }

        // setting claims object
        res.locals.claims = claims;
        next();
    });
}

function isAdmin( req, res, next ) {
    if( !res.locals.claims.isAdmin ) {
        const error = new Error( 'You donot have suffiecient privelages' );
        error.status = 403;
        next( error ); 
    }

    next();
}

module.exports = {
    authenticate,
    isAdmin
}