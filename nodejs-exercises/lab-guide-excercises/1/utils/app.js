const http = require( 'http' );
const path = require( 'path' );
const fs = require( 'fs' );

const messages = require( './messages.json' );

const port = 3000

const server = http.createServer();
server.listen( port );

server.on( 'listening', () => {
    console.log( `server started on http://localhost:${port}` );
});


const servePage = ( pageTitle, res ) => {
    fs.readFile( path.join( '../', `${pageTitle}.html` ), 'UTF-8', ( err, content ) => {
        if( err ) {
            console.log( err );
            return;
        }

        res.writeHeader(200, { "Content-type": "text/html" });
        res.write( content );
    })
}

server.on( 'request', ( req, res ) => {
    if( req.url === '/favicon.ico' ){
        return;
    }
    
    if( req.method === 'GET' ) {
        if( req.url === '/' ) {
            servePage( 'index', res );
        } else if( req.url === '/contact' ) {
            servePage( 'contact', res );
        } 
    }else{
        if( req.method === 'POST' ){
            req.on( 'data', chunk => {
                // push data to messages, 
                [ name, message ]= chunk.toString().split('&');
                name = name.split('=').slice(1);
                message = message.split('=').slice(1);
                const msgObject = {
                    name,
                    message
                    
                }
                console.log( msgObject );
                messages.messages.push(msgObject);

                fs.writeFile( path.join( __dirname, 'messages.json'),JSON.stringify(messages), err => {
                    if( err ){
                        console.log( err );
                        return;
                    }
                });
                servePage( 'contact', res );
                // res.end( 'Thank you contacting!' );
            });
        }
    }
});
