/**
 * Fichier principale
 */
const express = require('express');
const books = require('./books');
const tablebooks = require('./tableBooks');

let app = express();
tablebooks.modules.createData();

app
    .get('/', (request, response) => {
        response.setHeader('Content-type', 'application/json; charset=utf-8');
        response.send('{"title": "Index", "content": "Hello"}');
    })
    .get('/about', (request, response) => {
        response.setHeader('Content-type', 'application/json; charset=utf-8');
        response.send('{"title": "About", "content": "About"}');
    })
    .get('/data', (request, response) => {
        response.setHeader('Content-type', 'application/json; charset=utf-8');
        response.send('{"title": "Data", "content": "Data"}');
    })
    .get('/books', (request, response) => {
        response.setHeader('Content-type', 'application/json; charset=utf-8');
        books.modules.selectAll(response);
    })
    .get('/books/:id', (request, response) => {
        response.setHeader('Content-type', 'application/json; charset=utf-8');
        books.modules.select(request, response);
    })
    .get('/create', (request, response) => {
        response.setHeader('Content-type', 'application/json; charset=utf-8');
        response.send('{"title": "Form", content: "{"book_id": "", "book_author": "", "book_comment": ""}"}'); 
    })
    .post('/create', (request, response) => {
        books.modules.create(request, response);
    })
    .post('/books/:id/update', (request, response) => {
        books.modules.update(request, response);
    })
    .post('/books/:id/delete', (request, response) => {
        books.modules.delete(request, response);
    })
    .listen(8080);