// const addTo = ( x ) => {
//     return y => x+y;
// }

const addTo = x => y => x+y;

var addTo10 = addTo ( 10 );
console.log ( addTo10( 5 ) );
console.log ( addTo10( 7 ) );

var addTo20 = addTo( 20 );
console.log ( addTo20( 5 ) );
console.log ( addTo20( 7 ) );