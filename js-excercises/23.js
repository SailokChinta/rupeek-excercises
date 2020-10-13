const numbers = [ 5,11,13,7,2,31,19,23,17,29 ];

numbers.sort((x, y) => y-x);
console.log( numbers );

numbers.sort((x, y) => x-y);
console.log( numbers );

numbers.push( 37 );
console.log( numbers );

numbers.pop();
numbers.pop();

console.log( numbers );

numbers.splice( 3,2, 'Seven', 'Eleven' );
console.log( numbers );

console.log ( numbers.indexOf( 23 ) );
console.log ( numbers.indexOf( 41 ) );
