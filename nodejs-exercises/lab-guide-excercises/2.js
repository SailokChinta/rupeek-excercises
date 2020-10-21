const http = require( 'http' );
const url = require( 'url' );

const port = 3000;

const server = http.createServer();
server.listen( port );

const operations = {
    add ( x, y ) {
        return x + y;
    },
    subtract ( x, y ) {
        return x - y;
    },
    multiply ( x, y ) {
        return x * y;
    },
    divide ( x, y ) {
        return x / y;
    },
}



server.on( 'request', ( req, res ) => {
    if( req.url === '/favicon.ico' ) {
        res.end();
        return;
    }

    const urlObject = url.parse( req.url, true );
    
    
    const x = parseInt( urlObject.query.x );
    const y = parseInt( urlObject.query.y );

    const operator = urlObject.pathname.slice(1);

    if( !operations.hasOwnProperty( operator ) || isNaN(x) || isNaN(y) ){
        res.statusCode = 401;
        // res.writeHead(401, { 'content-type': 'application/json' });
        res.write( 'Badly contructed request' );
        // res.end("{'message': 'Badly contructed request'}");
        res.end();
        return;
    }

    res.write( operations[operator]( x, y ).toString() );
    res.end();
})

server.on( 'listening', () => {
    console.log( `server started at: http://localhost:${port}` );
});