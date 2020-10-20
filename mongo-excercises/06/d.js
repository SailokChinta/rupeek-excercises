// i => 10, $exists checks whether this property exists in document
db.shows.find(
    {
        webChannel: {
            $exists: true,
            $not:  {
                $type: "null"
            }
        }
    }
);

// ii => 5
db.shows.find(
    {
        "webChannel.country": {
            $exists: true,
            $not:  {
                $type: "null"
            }
        }
    }
);

// iii => 230
db.shows.find(
    {
        webChannel: {
            $exists: true,
            $type: "null"
        }
    }
);

// iv => 10
db.shows.find(
    {
        webChannel: {
            $exists: true,
            $not:  {
                $type: "null"
            }
        }
    }
);

// v => 5
db.shows.find(
    {
        $and: [
            {
                webChannel: {
                    $exists: true,
                    $not: {
                        $type: "null"
                    }
                }
            },
            {
                "webChannel.country": {
                    $exists: true,
                    $type: "null"
                }
            }
        ]
    }
);