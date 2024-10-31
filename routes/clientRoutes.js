const express = require('express');
const router = express.router();
const clientController = require('../controllers/clientController');
const { ensureAuthenticated } = require('../middleware/auth');

router.get('/', ensureAuthenticated, clientController.getAllClients);
router.post('/add', ensureAuthenticated, clientController.addClient);
router.get('/edit/:id', ensureAuthenticated, clientController.getEditClient);
router.post('/edit/:id', ensureAuthenticated, clientController.editClient);

module.exports = router;