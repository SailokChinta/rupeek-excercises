const http = require( 'http' );
const fs = require( 'fs' );
const path = require( 'path' );

const port = 3000;

const server = http.createServer();
server.listen( port );

server.on( 'listening', () => {
    console.log( `server started at http://localhost:${port}` );
});

server.on( 'request', ( req, res ) => {
    if( req.url === '/favicon.ico' ) {
        res.end();
        return;
    }
    const src = req.url;
    const rs = fs.createReadStream( path.join( __dirname, src ) );
    
    rs.read();
    
    // pipe is async method, hence res.end() executes first and response is null
    rs.pipe( res );
    // res.end();
});