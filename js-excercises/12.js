function sumSquares( arr ) {
    let sum = 0;
    for ( let i = 0; i < arr.length; i++ ) {
        sum += arr[i]*arr[i];
    }

    return sum;
}

let sum = sumSquares( [1,2,3,4] );
console.log ( sum );