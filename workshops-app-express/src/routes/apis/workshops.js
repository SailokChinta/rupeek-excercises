const express = require( 'express' );
const path = require( 'path' );
const { 
    sendWorkshops, 
    sendWorkshopById, 
    addWorkshops,
    updateWorkshopsById,
    deleteWorkshopById,
    sendSessionsForWorkshopById,
    addSessionsForWorkshopById
} = require( '../../controller/workshops' );
const { authenticate, isAdmin } = require( '../../utils/auth' );

const router = express.Router();

// Workshop routes
// first authenticating and then return workshops
router.get( '/', authenticate, sendWorkshops );
router.get( '/:id', authenticate, sendWorkshopById );
router.post( '/', authenticate, isAdmin, addWorkshops );
router.patch( '/:id', authenticate, isAdmin, updateWorkshopsById );
router.delete( '/:id', authenticate, isAdmin, deleteWorkshopById );
// -   PUT     /:id                                                                                    405                 -
router.put( '/:id', ( req, res ) => {
    res.status( 405 ).send();
});

// Workshop/:id/sessions route
router.get( '/:id/sessions', authenticate, sendSessionsForWorkshopById );
router.patch( '/:id/sessions', authenticate, addSessionsForWorkshopById );

module.exports = router;