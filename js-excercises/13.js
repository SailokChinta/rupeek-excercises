const contains = function ( arr, num ) {
    for ( let i = 0; i < arr.length; i++) {
        if ( arr[i] === num ) {
            return true;
        }
    }

    return false;
}

console.log ( contains( [1,2,3,4], 3 ) );
console.log ( contains( [1,2,3,4], 5 ) );