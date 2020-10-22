const { getItem, setItemKey, searchKeyValuePair } = require( './04-json-utilities' );

// 1
console.log( getItem( './package.json', 'description' ) );
console.log( getItem( './package.json', 'styles' ) );

// 2
console.log( setItemKey( './package.json', 'main', 'abstract' ) );

// 3
console.log( searchKeyValuePair( './workshops.json', 'time', '9:30 am - 1:30 pm' ) );

// 4
