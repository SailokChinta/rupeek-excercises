const _sum_ = ( ...resOfArgs ) => {
    let sum = 0;
    resOfArgs.forEach( num => sum+=num );
    return sum;
}

var result = _sum_( 1, 2, 3, 4 );
console.log( result ); // prints 10

var result = _sum_( 1, 2, 3, 4, 5  );
console.log( result ); // prints 15