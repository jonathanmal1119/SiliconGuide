const express = require('express');
const router = express.Router();
const { save, share, getBuildById, removeBuildById } = require('../controllers/buildController');


router.get('/share', share);
router.post('/save', save);
router.get('/:id', getBuildById);
router.delete('/:id', removeBuildById);


module.exports = router;
