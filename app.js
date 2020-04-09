/**
 * Fichier principale
 */
const express = require('express');
const books = require('./books');

let app = express();

app
    .get('/', (request, response) => {
        response.setHeader('Content-type', 'application/json; charset=utf-8');
        response.send('{"result": "Hello"}');
    })
    .get('/about', (request, response) => {
        response.setHeader('Content-type', 'application/json; charset=utf-8');
        response.send('{"result": "Hello"}');
    })
    .get('/data', (request, response) => {
        response.setHeader('Content-type', 'application/json; charset=utf-8');
        response.send('{"result": "Hello"}');
    })
    .get('/books', (request, response) => {
        books.modules.select(request, response);
    })
    .listen(8080);