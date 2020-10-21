const http = require( 'http' );
const fs = require( 'fs' );
const path = require( 'path' );

const server = http.createServer();

const port = 3000;

server.on( 'request', ( req, res ) => {
    fs.readFile( path.join( __dirname, req.url ), ( err, contents ) => {
        if ( err ) {
            console.log ( err );
            return;
        }

        res.write( contents );
        res.end();
    });
});

server.on( 'listening', () => {
    console.log( `server started on: http://localhost:${port}` );
});

server.listen( port );