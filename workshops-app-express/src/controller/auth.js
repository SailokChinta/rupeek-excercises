const jwt = require( 'jsonwebtoken' );

/*
    req = { email: 'john.doe@example.com', password: 'pass1234' }
    no error handling
*/
function sendToken( req, res, next ) {
    const { email, password } = req.body;

    // check in DB for matching emailid and pasword

    if( ( email === 'john.doe@example.com' || email === 'jane.doe@example.com' ) && password === 'pass1234' ) {
        const claims = {
            isAdmin: true,
            name: 'John',
            email: 'john.doe@example.com'
        }

        if ( email !== 'john.doe@example.com' ) {
            claims.isAdmin = false;
        }
        // secret must be secret and should be set by environment variable
        // to do move secret key from code
        jwt.sign( claims, 'shh...', { expiresIn: '24h' }, ( err, token ) => {
            if( err ) {
                const error = new Error( 'Error in authentication' );
                error.status = 500;
                return next( error );
            }

            return res.json({
                token,
                claims
            });
        });
    } else {
        const error = new Error( 'Unknown Username / password' );
        error.status = 201;
        return next( error );
    }
}

module.exports = {
    sendToken
}