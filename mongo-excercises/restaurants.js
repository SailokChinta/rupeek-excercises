// 1
db.restaurants.find();

// 2
db.restaurants.find({}, {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1
});

// 3
db.restaurants.find({}, {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    cuisine: 1,
    _id: 0
});

// 4
db.restaurants.find({}, {
    restaurant_id: 1,
    name: 1,
    borough: 1,
    'address.zipcode': 1,
    _id: 0
});

// 5
db.restaurants.find(
    {
        borough: 'Bronx'
    }
);

// 6
db.restaurants.find(
    {
        borough: 'Bronx'
    }
).limit(5);

// 7
db.restaurants.find(
    {
        borough: 'Bronx'
    }
).skip(5).limit(5);

// 8
db.restaurants.find(
    {
        'grades.score': {
            $gte: 90
        }
    }
);

db.restaurants.find(
    {
        grades: {
            $elemMatch: {
                score: {
                    $gte: 90
                }
            }
        }
    }
);

// 9
db.restaurants.find(
    {
        grades: {
            $elemMatch: {
                score: {
                    $gt: 80,
                    $lt: 100
                }
            }
        }
    }
);

// 10
db.restaurants.find(
    {
        'address.coord.0':{
            $lt: -95.754168
        }
    }
);

// 11

db.restaurants.find(
    {
        $and: [
                { 
                   cuisine: {
                        $ne: 'American '
                    }
                },
                {
                    grades: {
                        $elemMatch: {
                            score: {
                                $gt: 70
                            }
                        }
                    }
                },
                {
                    'address.coord': {
                        $lt: -65.754168
                    }
                }
        ]       
    }
);

// 12

db.restaurants.find(
    {
        cuisine: {
            $ne: 'American '
        },
        grades: {
            $elemMatch: {
                score: {
                    $gt: 70
                }
            }
        },        
        'address.coord.0': {
            $lt: -65.754168
        }
            
    }
);

// 13
db.restaurants.find(
    {
        cuisine: {
            $ne: 'American '
        },
        grades: {
            $elemMatch: {
                grade: 'A'
            }
        },
        borough: {
            $ne: 'Brooklyn'
        }
    }
).sort( { cuisine: -1 } );

// 14
db.restaurants.find(
    {
        name: {
            $regex: /^Wil/
        }
    },
    {
        restaurant_id: 1,
        name: 1,
        borough: 1,
        cuisine: 1
    }
)

// 15
db.restaurants.find(
    {
        name: {
            $regex: /ces$/
        }
    },
    {
        restaurant_id: 1,
        name: 1,
        borough: 1,
        cuisine: 1
    }
)

// 16
db.restaurants.find(
    {
        name: {
            $regex: /Reg/
        }
    },
    {
        restaurant_id: 1,
        name: 1,
        borough: 1,
        cuisine: 1
    }
)

// 17
db.restaurants.find(
    {
        borough: 'Bronx',
        $or: [
            {
                cuisine: 'American '
            },
            {
                cuisine: 'Chinese'
            }
        ]
    }
);

db.restaurants.find(
    {
        borough: 'Bronx',
        cuisine: {
            $in: ['American ', 'Chinese']
         }
    }
)

// 18
db.restaurants.find(
    {
        borough: {
            $in: [ 'Bronx', 'Brooklyn', 'Staten Island', 'Queens' ]
        }
    },
    {
        restaurant_id: 1,
        name: 1,
        borough: 1,
        cuisine: 1
    }
)

// 19
db.restaurants.find(
    {
        borough: {
            $nin: [ 'Bronx', 'Brooklyn', 'Staten Island', 'Queens' ]
        }
    },
    {
        restaurant_id: 1,
        name: 1,
        borough: 1,
        cuisine: 1
    }
)

// 20 -> doubt
db.restaurants.find(
    {
        grades: {
            $elemMatch: {
                score: {
                    $lte: 10
                }
            }
        }
    },
    {
        restaurant_id: 1,
        name: 1,
        borough: 1,
        cuisine: 1
    }
)

db.restaurants.find(
    {
        'grades.score': 
            {
                $not: {
                    $gt:10
                }  
            }
    },
    {
        restaurant_id: 1,
        name: 1,
        borough: 1,
        cuisine: 1
    }
)

// 21
db.restaurants.find(
    {
        $or: [
                {
                    name: {
                        $regex: /^Wil/
                    }
                },
                {
                    $and: [
                        {
                            cuisine: {
                                $ne: 'American '
                            }
                        },
                        {
                            cuisine: {
                                $ne: 'Chinees'
                            }
                        }
                    ]
                }
            ]
    },
    {
        restaurant_id: 1,
        name: 1,
        borough: 1,
        cuisine: 1
    }
)

// 22
db.restaurants.find(
    {
        grades: {
            $elemMatch: {
                grade: 'A',
                score: 11,
                date: ISODate('2014-08-11T00:00:00Z')
            }
        }
    },
    {
        restaurant_id: 1,
        name: 1,
        grades: 1
    }
)

// 23 -> doubt
db.restaurants.find(
    {
        'grades.1': {
            $elemMatch: {
                grade: 'A',
                score: 11,
                date: ISODate('2014-08-11T00:00:00Z')
            }
        }
    },
    {
        restaurant_id: 1,
        name: 1,
        grades: 1
    }
)

db.restaurants.find(
    {
        'grades.1.grade': 'A',
        'grades.1.date': ISODate('2014-08-11T00:00:00Z'),
        'grades.1.score': 9,
    },
    {
        restaurant_id: 1,
        name: 1,
        grades: 1
    }
)

// 24 -> how to show inner documents in projection
db.restaurants.find(
    {
        'address.coord.1': {
            $gte: 42,
            $lte: 52
        }
    },
    {
        restaurant_id: 1,
        name: 1,
        address: 1,
    }
)

// 25
db.restaurants.find(
    {

    }
).sort(
    {
        name: 1
    }
)

// 26
db.restaurants.find(
    {

    }
).sort(
    {
        name: -1
    }
)

// 27
db.restaurants.find(
    {

    }
).sort(
    {
        cuisine: 1,
        borough: -1
    }
)

// 28
db.restaurants.find(
    {
        'address.street': {
            $exists: true
        }
    }
).count();

// 29
db.restaurants.find(
    {
        'address.coord': {
            $exists: true,
            $type: "double"
        }
    }
)

// 30
// for finding modulus
db.restaurants.find(
    {
        'grades.score': {
            $mod: [7,0]
        }
    },
    {
        restaurant_id: 1,
        name: 1,
        grades: 1,
    }
)

// 31 -> doubt
db.restaurants.find(
    {
        name: {
            $regex: /.*mon*./
        }
    },
    {
        restaurant_id: 1,
        name: 1,
        grades: 1,
        'address.coords': 1,
        cuisine: 1
    }
)

// 32
db.restaurants.find(
    {
        name: {
            $regex: /^Mad/
        }
    },
    {
        restaurant_id: 1,
        name: 1,
        grades: 1,
        'address.coords': 1,
        cuisine: 1
    }
)