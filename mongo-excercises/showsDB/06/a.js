// i
db.shows.find( { runtime: { $gte: 60 } } ); 

// ii
db.shows.find(
    { 
        runtime: 
        { 
            $gte: 30, 
            $lte: 60 
        } 
    } 
);

// iii => 112
db.shows.find(
    {
        "rating.average": {
            $gte: 8
        }
    }
);

// iv => 105
db.shows.find(
    {
        "rating.average": {
            $gte: 8,
            $lte: 9
        }
    }
);

// v => 23, treat arrays as single valued attribute
db.shows.find(
    {
        genres: 'Horror'
    }
);

// vi => 8, this looks documents that have first element as Drama
db.shows.find(
    {
        genres: [ 'Drama' ]
    }
)