const express = require('express');
const routes = express.Router();

const ongController = require('../controllers/ongController')
const incidentsController = require('../controllers/incidentsController')
const profileController = require('../controllers/incidentsController')
const sessionController = require('../controllers/sessionController')

//login route
routes.post('/session', sessionController.create)

//ongs routes
routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

//incidents routes
routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);

//ong's specific routes
routes.get('/profile', profileController.index);


module.exports = routes;