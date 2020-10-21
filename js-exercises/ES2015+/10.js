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

class SequelMovie extends Movie {
    constructor ( name, cast, yearOfRelease, boxOfficeColelection, earlierMovies ) {
        super ( name, cast, yearOfRelease, boxOfficeColelection );
        this.earlierMovies = earlierMovies;
    }

    getLifeTimeEarnings () {
        let sum = this.boxOfficeColelection;
        this.earlierMovies.forEach( movie => sum += movie.boxOfficeColelection );

        return sum;
    }
}

Bahubali = new Movie ( 'Bahubali', ['Prabhas'], 2015, 550 );

Bahubali2 = new SequelMovie ( 'Bahubali2', ['Prabhas'], 2017, 1200, [Bahubali] );

Bahubali3 = new SequelMovie ( 'Bahubali3', ['Prabhas'], 2020, 1800, [Bahubali, Bahubali2] );

// console.log ( Bahubali );
console.log ( Bahubali3.getLifeTimeEarnings() );