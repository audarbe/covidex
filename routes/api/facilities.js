const express = require('express');
const router = express.Router();
const facilitiesCtrl = require('../../controllers/api/facilities');

router.get('/', facilitiesCtrl.index);
router.post('/add', facilitiesCtrl.create);
router.delete('/:id', facilitiesCtrl.delete);
router.put('/:id', facilitiesCtrl.update);

module.exports = router;