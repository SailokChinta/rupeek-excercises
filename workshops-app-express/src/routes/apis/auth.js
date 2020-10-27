const express = require( 'express' );
const path = require( 'path' );
const { sendToken } = require( '../../controller/auth' );

const router = express.Router();

router.post( '/login', sendToken );

module.exports = router;