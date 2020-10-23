// API Functions
const mongoose = require( 'mongoose' );

const Workshop = mongoose.model( 'workshop' );


// Workshop methods
/*
    * Instead of sending error response from controller, we are forwarding the error object to middleware which handles it by taking in an extra parameter called next and sending the error object through it.
*/

async function sendWorkshops( req, res, next ) {
    try{
        const workshops = await Workshop.find().exec();
        res.json( workshops )
    } catch( error ) {
        error.status = 500;
        next( error );
    }
}

async function sendWorkshopById( req, res, next ) {
    const id = req.params.id;
    try{
        const workshop = await Workshop.findById( id );
        res.json(workshop);
    } catch( error ) {
        error.status = 404;
        next( error );
    }
}

// -   POST    /       Add multiple/single workshop(s)     The array of new workshops/single workshop  201, 400            The newly added workshop (will have id)
async function addWorkshops( req, res, next ){
    const data = req.body;
    let workshops;

    if( data instanceof Object && Object.keys( data ).length === 0) {
        const error = new Error( 'Workshops data is missing' );
        error.status = 400;
        next( error );
    }

    if( data instanceof Array ) {
        workshops = data;
    } else{
        workshops = [ data ]
    }

    try{
        const addedWorkshops = await Workshop.insertMany( workshops );
        res.status( 201 ).json( addedWorkshops );
    } catch( error ) {
        // need to put if conditions checking whether what kind of error is it.
        // TODO Set 400/500 as per the error
        error.status = 500;
        next( error );
    }
}
    
// -   PATCH   /:id    Update workshop with given id       The required fields and their new values    201, 400, 404       The newly updated workshop}
async function updateWorkshopsById( req, res, next ){
    const data = req.body;
    const id = req.params.id;
    let workshop = data;

    if( data instanceof Object && Object.keys( data ).length === 0) {
        const error = new Error( 'Workshop data to updated is missing' );
        error.status = 400;
        next( error );
    }

    // check if workshop.mode is array, this is necessary because using below query, it will replace the existing array
    const modes = workshop.modes || [];
    delete workshop.modes;

    try{
        // addToSet and push can be used here, depends on the use case.
        const updatedWorkshop = await Workshop.findByIdAndUpdate( id, { $set: workshop, $addToSet: { modes } } );
        res.json( updatedWorkshop );
    } catch( error ) {
        // need to put if conditions checking whether what kind of error is it.
        // TODO Set 400/500 as per the error
        error.status = 500;
        next( error );
    }
}

// -   DELETE  /:id    Delete workshop with given id       -                                           204                 -
async function deleteWorkshopById( req, res, next ){
    const id = req.params.id;
    try{
        const removedWorkshop = await Workshop.findByIdAndRemove( id );
        
        if( removedWorkshop === null ) {
            const error = new Error( 'Document with the given id does not exists' );
            error.status = 404;
            next( error );
        }
        // if 204 is status code, then express won't process any response body sent.
        res.status( 204 ).send();
    } catch( error ) {
        error.status = 404;
        next( error );
    }
}

// Session methods
async function sendSessionsForWorkshopById( req, res, next ) {
    const id = req.params.id;
    try{
        const sessions = await Workshop.findById( id ).select( [ 'sessions' ] );
        res.json( sessions )
    } catch( error ) {
        error.status = 404;
        next( error );
    }
}

async function addSessionsForWorkshopById( req, res, next ) {
    const id = req.params.id;
    const data = req.body;
    let sessions;

    if( data instanceof Object && Object.keys( data ).length === 0 ) {
        const error = new Error( 'Session data is missing' );
        error.status = 400;
        next( error );
    }

    if( data instanceof Array ) {
        sessions = data;
    } else {
        sessiosn = [ data ];
    }

    try{
        const addedSessions = await Workshop.findByIdAndUpdate( id, { $addToSet: { sessions } } );
        res.status( 201 ).json( addedSessions );
    } catch( error ) {
        error.status = 404,
        next( error );
    }
}


// View Functions
function getWorkshops() {
    const workshops = require( '../data/workshops.json' );
    return workshops
}

function getWorkshopById( id ) {
    const workshops = require( '../data/workshops.json' );
    [ workshop ] = workshops.filter( workshop => workshop.id === id );
    return workshop;
}

module.exports = {
    sendWorkshops,
    sendWorkshopById,
    addWorkshops,
    updateWorkshopsById,
    deleteWorkshopById,
    getWorkshops,
    getWorkshopById,
    sendSessionsForWorkshopById,
    addSessionsForWorkshopById
};