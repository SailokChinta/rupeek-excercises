function dateLogger( req, res, next ) {
    console.log( `Request received for ${req.url} at ${(new Date()).toTimeString()}` );
    next();
    console.log( `Response sent for ${req.url} at ${(new Date()).toTimeString()}` );
}

module.exports = {
    dateLogger
}