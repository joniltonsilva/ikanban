const express = require('express');

const app = express();

app.get('/', (request, response) => {

    //return response.send('Tudo ok!');
    return response.json({ 
        success: true,
        message: 'Tudo funcionando corretamente ok!'
    });

});

app.listen(3333);