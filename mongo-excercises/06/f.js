// i => 17
db.shows.find(
    {
        genres: {
            $all: ['Drama', 'Horror']
        }
    }
);

// ii => 4
db.shows.find(
    {
        "schedule.days": {
            $all: ['Monday', 'Tuesday']
        }
    }
);

// create a collection to store scores

use contacts

const scores = [
    {
        name: 'John',
        scores: [
            {
                subject: 'Physics',
                score: 95
            },
            {
                subject: 'History',
                score: 93
            },
            {
                subject: 'Geography',
                score: 78
            },
        ]
    },
    {
        name: 'Jane',
        scores: [
            {
                subject: 'Geography',
                score: 82
            },
            {
                subject: 'History',
                score: 99
            },
            {
                subject: 'English',
                score: 85
            },
        ]
    },
    {
        name: 'Mark',
        scores: [
            {
                subject: 'Biology',
                score: 75
            },
            {
                subject: 'Arts',
                score: 93
            },
            {
                subject: 'History',
                score: 99
            },
        ]
    },
];

db.classScores.insertMany( scores )

// i, select those students who have scored more than 80 in any subject and has taken Geography
db.classScores.find(
    {
        'scores.score': {
            $gte: 80
        },
        'scores.subject': {
            $regex: 'Geography',
            $options: 'i'
        }
    }
);

// ii, scored more than 80% in Geography
db.classScores.find(
    {
        scores: {
            $elemMatch: {
                score: { $gte: 80 },
                subject: { $regex: 'Geography', $options: 'i' }
            }
        }
    }
);

// iii 
db.classScores.find(
    
);