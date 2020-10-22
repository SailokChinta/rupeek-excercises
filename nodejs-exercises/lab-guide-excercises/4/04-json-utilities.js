const { notStrictEqual } = require('assert');

// 1
function getItem( filename, itemKey ) {
    const data = require( filename );
    if( typeof data === 'object' && data !== null && !(data instanceof Array) ) {
        if( itemKey in data )
            return data[ itemKey ];
    } 
    
    return null;
}

// 2
function setItemKey ( filename, itemKey, setKey ) {
    const data = require( filename );
    const fs = require( 'fs' );

    if( typeof data === 'object' && data !== null && !(data instanceof Array) ) {
        if( itemKey in data ) {
            data[ setKey ] = data[ itemKey ];
            delete data[ itemKey ]

            fs.writeFile( filename, JSON.stringify( data ), err => {
                if( err ) {
                    console.log( err.message );
                    return;
                }
            });
        }
    } 
}

// 3
function searchKeyValuePair( filename, key, value ) {
    const data = require( filename );
    if( typeof data === 'object' && data !== null && data instanceof Array ) {
        const output = data.filter( item => {
            if( typeof item === 'object' && item !== null && !(item instanceof Array) ) {
                if( key in item )
                    return item[ key ] === value;
            }

            return false;
        });

        return output;
    } 
    
    return null;
}



module.exports = {
    getItem,
    setItemKey,
    searchKeyValuePair
}