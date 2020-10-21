const http = require( 'http' );
const fs = require( 'fs' );
const path = require( 'path' );

const port = 3000;

const server = http.createServer();
server.listen( port );

const filename = 'history.txt';

server.on( 'listening', () => {
    console.log( `server started on http://localhost:${port}` );
});

server.on( 'request', ( req, res ) => {
    if( req.url === '/favicon.ico' ) {
        res.end();
        return;
    }

    const operations = {
        add ( x, y ) {
            return x + y;
        },
        multiply ( x, y ) {
            return x * y;
        }
    };

    const inputs = req.url.split('/').slice(1);
    const result = operations[inputs[0]]( parseInt( inputs[1] ), parseInt( inputs[2] ) );

    fs.appendFile( path.join( __dirname, filename) , `${inputs[0]} ${inputs[1]} ${inputs[2]} ${result}\n`, err => {
        if( err ) {
            console.log( err.message );
            return;
        }
        res.end( `${inputs[0]} ${inputs[1]} ${inputs[2]} ${result}` );
        console.log( `successfully appended to ${filename}` );
    });
});