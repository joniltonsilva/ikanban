const express = require('express');

const routes = express.Router();


routes.get('/healthcheck', (request, response) => {

    //return response.send('Tudo ok!');
    return response.json({ 
        success: true
    });

});


routes.post('/users', (request, response) => {
    return response.json(request.body);
});

module.exports = routes;