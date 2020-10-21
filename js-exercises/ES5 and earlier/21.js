const foo = function () {
    console.log ( this );
}

const fn = foo.bind( { x : 1 } );
fn();