
const exponentFactory = function ( x ) {
    function square ( x ) {
        return x*x;
    }

    function cube ( x ) {
        return x*x*x;
    }

    if ( x === 2 ) {
        return square;
    } else if ( x === 3 ) {
        return cube;
    } else {
        return x => x;
    }
}

fn = exponentFactory ( 2 );
console.log ( fn( 5 ) );

fn = exponentFactory ( 3 );
console.log ( fn( 5 ) );

fn = exponentFactory ( 4 );
console.log ( fn( 5 ) );
