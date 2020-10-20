use moviesDB;

// a
db.albums.insertOne(
    {
        yearOfRelease: 2020,
        musicDirector: "AR Rahman",
        lyricist: "John doe",
        songs: [
            {
                singers: [
                    'Shreya Ghoshal',
                    'KK'
                ],
                lenghtOfSong: "2:52"
            },
            {
                singers: [
                    'Neha Kakkar',
                    'Baadshah'
                ],
                lenghtOfSong: "3:45"
            }
        ]
    }
);
db.albums.insertOne(
    {
        yearOfRelease: 2019,
        musicDirector: "DSP",
        lyricist: "Jane Doe",
        songs: [
            {
                singers: [
                    'Armaan Malik'
                ],
                lenghtOfSong: "4:00"
            }
        ]
    }
);
db.albums.insertOne(
    {
        yearOfRelease: 2017,
        musicDirector: "Thaman",
        lyricist: "Jack Doe",
        songs: [
            {
                singers: [
                    'Mika Singh',
                    'Baadshah'
                ],
                lenghtOfSong: "3:24"
            },
            {
                singers: [
                    'Vidya Vox',
                ],
                lenghtOfSong: "2:25"
            }
        ]
    }
);

db.albums.find().pretty();

// b
db.albums.updateOne(
    { musicDirector: 'DSP' },
    { $set: 
        {
            lyricist: 'Ram',
            songs: [
                {
                    singers: [
                        'Anirudh'
                    ],
                    lenghtOfSong: '1:45'
                }
            ]
        }
    }
);

db.albums.findOne( { musicDirector: 'DSP' } );

// c
db.albums.find( { yearOfRelease: { $lt: 2019 } } ).pretty();

// d
db.albums.deleteMany( 
    {
        $or: [
            { musicDirector: 'Thaman' },
            { lyricist: 'John doe' }
        ]
    }
);

db.albums.deleteOne( { lyricist: 'Jane Doe' } );

db.albums.find().pretty();
