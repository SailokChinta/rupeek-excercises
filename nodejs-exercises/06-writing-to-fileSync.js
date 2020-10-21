const fs = require( 'fs' );
const path = require( 'path' );

const filename = process.argv[2];

try{
    fs.writeFileSync( path.join( __dirname, filename ), 'Hellofilesystem module sync version');
    console.log( `successfully written to ${filename}` );
} catch( err ) {
    console.log( err.message );
}
