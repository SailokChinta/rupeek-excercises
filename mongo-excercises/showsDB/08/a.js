// i => 217
db.shows.updateMany(
    {
        language: {
            $regex: 'English',
            $options: 'i'
        },
        'network.country.code': 'US'
    },
    {
        $set: {
            language: 'English (US)',
            locale: 'en-US'
        }
    }
);

db.shows.find(
    {
        language: 'English (US)'
    }
);

// ii => 1
db.shows.updateOne(
    {
        weight: {
            $lt: 40,
        },
        'rating.average': {
            $gt: 7
        }
    },
    {
        $set: {
            crticsChoice: true
        },
        $inc: {
            weight: 10
        }
    }
);

// iii, -> 0
db.shows.updateOne(
    {
        weight: {
            $gt: 80
        },
        'ratings.average': {
            $lt: 6
        }
    },
    {
        $set: {
            criticsChoice: false
        },
        $inc: {
            weight: -10
        }
    }
);

// iv
db.shows.updateMany(
    {
        weight: {
            $lt: 50
        },
        'rating.average': {
            $gt: 7
        }
    },
    {
        $max: {
            weight: 50
        }
    }
);
