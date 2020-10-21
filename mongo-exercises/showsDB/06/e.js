// i => 3
db.shows.find(
    {
        name: {
            $regex: /Last/
        }
    }
);

// ii => 0
db.shows.find(
    {
        name: {
            $regex: /last/
        }
    }
);

// iii => 3
db.shows.find(
    {
        name: {
            $regex: /last/,
            $options: 'i'
        }
    }
);

// iv
db.shows.find(
    {
        weight: {
            $gte: 10*'rating.average'
        }
    }
);