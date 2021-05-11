// Modules
const express = require('express');
const router = express.Router();

// Resources
const { TodosResources } = require('../resources');

router.use('/todos', TodosResources);

module.exports = router;