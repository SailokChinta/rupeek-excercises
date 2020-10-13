function greeting () {
    let hour = (new Date()).getHours();

    if ( hour >= 5 && hour < 12 ) {
        console.log ( 'Good Morning' );
    } else if ( hour >= 12 && hour < 16 ) {
        console.log ( 'Good Afternoon' );
    } else if ( hour >= 16 && hour < 20 ) {
        console.log ( 'Good Evening' );
    } else {
        console.log ( 'Good Night' );
    }
}

greeting();