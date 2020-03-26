const express = require('express');

const routes = express.Router();


routes.get('/healthcheck', (request, response) => {

    //return response.send('Tudo ok!');
    return response.json({ 
        success: true
    });

});

module.exports = routes;