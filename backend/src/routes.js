const express = require('express');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/healthcheck', (request, response) => {

    //return response.send('Tudo ok!');
    return response.json({ 
        success: true
    });

});


routes.get('/users', UserController.get);
routes.post('/users', UserController.post);
routes.delete('/users/:id', UserController.delete);

module.exports = routes;