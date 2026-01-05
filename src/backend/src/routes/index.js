const express = require('express');
const router = express.Router();

// Import controllers
const usersController = require('../controllers/usersController');

// User routes
router.get('/users', usersController.getAll);
router.post('/users', usersController.create);
router.put('/users/:id', usersController.update);
router.delete('/users/:id', usersController.delete);

module.exports = router;
