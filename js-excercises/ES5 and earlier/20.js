const bahubali = {
    name: 'Bahubali',
    cast: [ 'Prabhas' ],
    yearOfRelease: 2015,
    boxOfficeCollection: 500,
    addToCast ( castName ) {
        this.cast.push( castName );
    },
    addToCollection ( amount ) {
        this.boxOfficeCollection+=amount;
    }
}

bahubali.addToCast( 'Anushka' );
bahubali.addToCollection( 1000 );
console.log ( bahubali );