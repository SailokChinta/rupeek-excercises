function square ( x ) {
    return x*x;
}

function cube ( x ) {
    return x*x*x;
}

const sum = function ( x, y, f ) {
    return f( x ) + f( y );
}

console.log ( sum( 2,3,square ) );
console.log ( sum( 2,3,cube ) );