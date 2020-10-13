// 19th ques
const john = {
    name: 'John',
    age: 21
}

const jane = {
    name: 'Jane',
    age: 25
}

console.log ( john.age );
jane.age++;
console.log ( jane.age );

john.address = {
    'first line': 'lane 2',
    city: 'Hyderabad'
}

console.log ( john );
console.log ( john['address']['city'] );

john.spouse = jane;
jane.spouse = john;

console.log ( jane );

jane.emailids = [ 'jane@google.com', 'jane@yahoo.com' ];
jane['emailids'][1] = 'jane@rediff.com';
console.log ( jane['emailids'][1] );

jane['emailids'].push( 'jane@aol.com' );

console.log ( jane );

function celebrateBirthDay () {
    this.age++;
}

john.celebrateBirthDay = jane.celebrateBirthDay = celebrateBirthDay

john.celebrateBirthDay();
// console.log ( john );

jane.celebrateBirthDay();
// console.log ( jane );



celebrateBirthDay();

console.log ( jane );
console.log ( jane );