const express = require('express');
const {
    celebrate,
    Joi,
    Segments
} = require('celebrate')
const routes = express.Router();

const ongController = require('../controllers/ongController')
const incidentsController = require('../controllers/incidentsController')
const profileController = require('../controllers/incidentsController')
const sessionController = require('../controllers/sessionController')

//login route
routes.post('/session', sessionController.create)

//ongs routes
routes.get('/ongs', ongController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), ongController.create);

//incidents routes
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), incidentsController.index);

routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), incidentsController.delete);

//ong's specific routes
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), profileController.index);


module.exports = routes;