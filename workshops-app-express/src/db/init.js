const mongoose = require( 'mongoose' );
const { seed } = require( './seed' );

// need to import this here to create the model
require( '../models/workshop' );

const uri = 'mongodb://localhost:27017/workshops-app'

// need to set these, because incase of update we need to get updated details
mongoose.set( 'useFindAndModify', false );
mongoose.set( 'returnOriginal', false );

mongoose.connect( uri, { useNewUrlParser: true });

// will fire events
mongoose.connection.on( 'open', () => {
    console.log( 'Connected Successfully to DB' );
    // enable this if you need to reupload the data
    // seed();
});

mongoose.connection.on( 'error', err => {
    console.log( err.message );
    process.exit();
});