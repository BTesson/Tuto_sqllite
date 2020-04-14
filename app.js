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
        console.log(request.body);
        books.modules.create(request, response);
    })
    .post('/books/:id/update', (request, response) => {
        console.log(request.body);
        books.modules.update(request, response);
    })
    .post('/books/:id/delete', (request, response) => {
        books.modules.delete(request, response);
    })
    .listen(8080);

//https://www.sqlite.org/datatype3.html

//Dans cmd pour le GET   CURL -X GET "localhost:9000/database" [{"id":"1","firstname":"FirstName","lastname":"LastName"}]

//Pour le add  curl -d {\"id\":\"2\",\"firstname\":\"Lewis\",\"lastname\":\"Carroll\"} -H "Content-Type: application/json" -X POST "http://localhost:9000/add"

//Pour le delete   curl -d {\"id\":\"1\"} -H "Content-Type: application/json" -X POST "http://localhost:9000/delete"

//add => 
//curl -d '{\"booktitle\":\"book test\", \"bookauthor\":\"Oui oui\", \"bookcomment\":\"Why not !\"}' -H "Content-Type:application/json" -X POST http://localhost:8080/create

//update 
//curl -d '{\"booktitle\":\"book update\", \"bookauthor\":\"Yes life\", \"bookcomment\":\"But or not !\"}' -H "Content-Type:application/json" -X POST http://localhost:8080/books/2/update

//delete 
//curl -d '' -H "Content-Type:application/json" -X POST http://localhost:8080/books/2
