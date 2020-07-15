const express = require('express');
const router = express.Router();
const facilitiesCtrl = require('../../controllers/api/facilities');

router.post('/add', facilitiesCtrl.create);

module.exports = router;