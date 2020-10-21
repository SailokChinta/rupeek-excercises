const async = require( 'async' );

function one( callback ) {
    setTimeout(() => {
        callback(null, 'one');
    }, 2000);
}
function two( callback ) {
    setTimeout(() => {
        callback(null, 'two');
    }, 1000);
}


async.parallel([ one, two ], ( err, result ) => {
    if( err ) {
        return;
    }

    console.log( result );
});