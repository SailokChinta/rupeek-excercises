function square ( x ) {
    return x*x;
}

function cube ( x ) {
    return x*x*x;
}

const sumArray = function ( arr, f ) {
    let sum = 0;
    for ( let i = 0; i < arr.length; i++ ) {
        sum += f( arr[i] );
    }

    return sum;
}

console.log ( sumArray( [1,2,3], square ) );
console.log ( sumArray( [1,2,3], cube ) );