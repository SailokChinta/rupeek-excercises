const express = require( 'express' );
const path = require( 'path' );
const { route } = require('../../../../rupeek-excercise/workshops-app-express/src/routes');
const { 
    sendWorkshops, 
    sendWorkshopById, 
    addWorkshops,
    updateWorkshopsById,
    deleteWorkshopById,
    sendSessionsForWorkshopById,
    addSessionsForWorkshopById
} = require( '../../controller/workshops' );

const router = express.Router();

// Workshop routes
router.get( '/', sendWorkshops );
router.get( '/:id', sendWorkshopById );
router.post( '/', addWorkshops );
router.patch( '/:id', updateWorkshopsById );
router.delete( '/:id', deleteWorkshopById );
// -   PUT     /:id                                                                                    405                 -
router.put( '/:id', ( req, res ) => {
    res.status( 405 ).send();
});

// Workshop/:id/sessions route
router.get( '/:id/sessions', sendSessionsForWorkshopById );
router.patch( '/:id/sessions', addSessionsForWorkshopById );

module.exports = router;