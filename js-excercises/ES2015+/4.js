const max = ( ...restOfArgs ) => {
    console.log( Math.max( ...restOfArgs ) );
};

max( 25, 65, 35, 45 ); // 65
max( 25, 65, 35, 75, 45 ); // 75