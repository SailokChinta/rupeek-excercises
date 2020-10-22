// API Functions
function getWorkshops( req, res ) {
    const workshops = require( '../data/workshops.json' );
    res.json( workshops )

}
function getWorkshopById( req, res ) {
    const workshops = require( '../data/workshops.json' );
    const id = req.params.id;
    workshops.forEach( workshop => {
            if( workshop.id === parseInt(id) ){
                    return res.json( workshop );
                }
            });
    res.status(404).json({ });
}

// View Functions
function sendWorkshops() {
    const workshops = require( '../data/workshops.json' );
    return workshops
}

function sendWorkshopById( id ) {
    const workshops = require( '../data/workshops.json' );
    [ workshop ] = workshops.filter( workshop => workshop.id === parseInt(id) );
    return workshop;
}

module.exports = {
    getWorkshops,
    getWorkshopById,
    sendWorkshops,
    sendWorkshopById
};