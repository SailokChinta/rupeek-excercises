[ first, second, ...numArray ] = process.argv;
sum = 0;
numArray.forEach( num => sum += parseInt( num ) );
console.log( sum );