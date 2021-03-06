'use strict';

var express = require('express')
  , ctrl = require('../controllers/main-controller')
  , router = express.Router();

router.get('/', ctrl.renderHomePage);
router.get('/:tag', ctrl.renderTagSearsh);

module.exports = router;
