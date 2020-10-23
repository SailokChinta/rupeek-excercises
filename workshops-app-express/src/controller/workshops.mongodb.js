// API Functions
const { client } = require( '../db/init' );

async function sendWorkshops( req, res ) {
    const database = client.db( 'workshops-app' );
    const collection = database.collection( 'workshops' );

    const query = {};

    try{
        const workshops = await collection.find( query ).toArray();
        res.json( workshops )
    } catch( error ) {
        res.status( 404 ).json( {
            message: error.message
        });
    }
}

async function sendWorkshopById( req, res ) {
    const workshop_id = +req.params.id;
    // const workshops = require( '../data/workshops.json' );
    const database = client.db( 'workshops-app' );
    const collection = database.collection( 'workshops' );

    const query = { id: workshop_id };
    try{
        const workshop = await collection.findOne( query );
        res.json(workshop);
    }catch( error ) {
        res.status( 500 ).json({
            message: error.message
        });
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
    getWorkshops,
    getWorkshopById,
    sendWorkshops,
    sendWorkshopById
};