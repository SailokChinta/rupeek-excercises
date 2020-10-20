// i => 159
db.shows.find(
    {
        $or: [
            {
                genres: 'Drama'
            },
            {
                genres: 'Horror'
            }
        ]
    }
);

// ii
// $nor
db.shows.find(
    {
        $nor: [
            {
                genres: 'Drama'
            },
            {
                genres: 'Horror'
            }
        ]
    }
);

// $not and $in
db.shows.find(
    {
        genres: {
            $not: {
                $in: ['Drama', 'Horror']
            }
        }
    }
);

// iii => 17
db.shows.find(
    {
        $and: [
            {
                genres: 'Drama'
            },
            {
                genres: 'Horror'
            }
        ]
    }
)

// iv 
// drama, not horror => 136
db.shows.find(
    {
        genres:{
            $in: ['Drama'],
            $nin: ['Horror']
        }
    }
)

// Horror, not drama => 6
db.shows.find(
    {
        genres:{
            $in: ['Horror'],
            $nin: ['Drama']
        }
    }
)

// combined query, => 142
db.shows.find(
    {
        $or:[
            {
                genres:{
                    $in: ['Horror'],
                    $nin: ['Drama']
                }
            },
            {
                genres:{
                    $in: ['Drama'],
                    $nin: ['Horror']
                }
            }
        ]
    }
)

// v
db.shows.find(
    {
        $or:[
            {
                genres:{
                    $in: ['Horror'],
                    $nin: ['Drama']
                }
            },
            {
                genres:{
                    $in: ['Drama'],
                    $nin: ['Horror']
                }
            },
            {
                genres:{
                    $nin: ['Drama'],
                    $nin: ['Horror']
                }
            }
        ]
    }
)