// i => 159
db.shows.find(
    {
        genres: {
            $in: ['Drama', 'Horror']
        }
    }
);

// ii => 24, in -> either 
db.shows.find(
    {
        type: {
            $in: ['Animation', 'Reality']
        }
    }
);

// iii => 81, not in -> nin -> neither
db.shows.find(
    {
        genres: {
            $nin: ['Drama', 'Horror']
        }
    }
);

// iv => 216
db.shows.find(
    {
        type: {
            $nin: ['Animation', 'Reality']
        }
    }
);

// v => 202
db.shows.find(
    {
        "network.name": {
            $nin: ['HBO', 'FOX']
        }
    }
);