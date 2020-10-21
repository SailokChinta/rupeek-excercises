const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

days.forEach( (day) => console.log ( day ) );

const newArray = days.map( day => day.length );
console.log ( newArray );


const daysFiltered = days.filter( day => day[0] >= 'S' && day[0] <= 'Z' );
console.log ( daysFiltered );

const sixLetterdays = days.filter( day => day.length === 6 );
console.log ( sixLetterdays );