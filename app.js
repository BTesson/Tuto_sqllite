/**
 * Fichier principale
 */
const express = require('express');
const books = require('./books');
const body = require('body-parser');
const tablebooks = require('./tableBooks');

let app = express();
app.use(body.json({type: 'application/json'}));
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
        books.selectAll(response);
    })
    .get('/books/:id', (request, response) => {
        response.setHeader('Content-type', 'application/json; charset=utf-8');
        books.select(request, response);
    })
    .get('/create', (request, response) => {
        response.setHeader('Content-type', 'application/json; charset=utf-8');
        response.send('{"title": "Form", content: "{"book_id": "", "book_author": "", "book_comment": ""}"}'); 
    })
    .get('/error', (request, response) => {
        response.setHeader('Content-type', 'application/json; charset=utf-8');
        response.send('{"title": "Error", content: "Mistake Bro"}'); 
    })
    .post('/create', (request, response) => {
        books.create(request, response);
    })
    .post('/books/:id/update', (request, response) => {
        books.update(request, response);
    })
    .post('/books/:id/delete', (request, response) => {
        books.delete(request, response);
    })
    .listen(8080);

//https://www.sqlite.org/datatype3.html
//https://www.baeldung.com/curl-rest

//Dans cmd pour le GET   CURL -X GET "localhost:9000/database" [{"id":"1","firstname":"FirstName","lastname":"LastName"}]

//add => 
//curl -d "{\"booktitle\": \"Harry Potter a l ecole des sorciers\",\"bookauthor\": \"J. K. Rowling\",\"bookcomment\": \"Debut des aventures de Harry Potters\"}" -H "Content-Type:application/json; charset=utf-8" http://localhost:8080/create

//update 
//curl -d "{\"booktitle\": \"book update\", \"bookauthor\": \"Yes life\", \"bookcomment\": \"But or not !\"}" -H "Content-Type:application/json" http://localhost:8080/books/4/update

//delete 
//curl -d "" -H "Content-Type:application/json" http://localhost:8080/books/4/delete
