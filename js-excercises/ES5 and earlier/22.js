const sum = ( x,y ) => {
    return x+y;
}

const fn1 = sum.bind( { x : 10 } );
console.log ( fn1(5) );