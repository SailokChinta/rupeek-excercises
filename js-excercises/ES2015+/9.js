class Movie {
    constructor( name, cast, yearOfRelease, boxOfficeColelection ) {
        this.name = name;
        this.cast = cast;
        this.yearOfRelease = yearOfRelease;
        this.boxOfficeColelection = boxOfficeColelection;
    }

    addToCast ( newMember ) {
        this.cast.push ( newMember );
    }

    addToCollection ( amount ) {
        this.boxOfficeColelection += amount;
    }
}

const Endgame = new Movie ( 'Endgame', ['RDJ', 'Chris Evans'], 2019, 300 );

const Bahubali = new Movie ( 'Bahubali', ['Prabhas'], 2015, 500 );

Endgame.addToCast ( 'Scarlett Johansson' );
Bahubali.addToCast ( 'Anushka' );

Endgame.addToCollection ( 300 );
Bahubali.addToCollection ( 400 );

console.log ( Endgame );
console.log ( Bahubali );