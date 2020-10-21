// i => 36
db.shows.updateMany(
    {
        'schedule.days': 'Monday'
    },
    {
        $set: {
            'schedule.days.$': 'monday'
        }
    }
);

// ii => 23
db.shows.updateMany(
    {
        genres: 'Horror'
    },
    {
        $push: {
            genres: 'Supernatural'
        }
    }
);

// iii => 23
db.shows.updateMany(
    {
        genres: 'Horror'
    },
    {
        $push: {
            genres: {
                $each: [ 'Supernatural', 'Spook' ]
            }
        }
    }
);

// iv
db.shows.updateOne(
    {
        genres: 'Supernatural'
    },
    {
        $pull: {
            genres: {
                $in: [ 'Supernatural' ]
            }
        }
    }
);

// v
db.shows.updateMany(
    {
    },
    {
        $pop:{
            genres: 1
        }
    }
);


// vi
db.shows.updateMany(
    {
        genres: 'Horror'
    },
    {
        $addToSet: {
            genres:  'Supernatural'
        }
    }
);

