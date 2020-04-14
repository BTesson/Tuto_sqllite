/**
 * Fichier affichage des livres
 */
const sqllite = require('sqlite3').verbose();
var path = require('path');

const path_db = path.join(__dirname, "apptest.db");

const selectAll = (response) => {
        const db = new sqllite.Database(path_db, (err) => {
            if(err){
                return console.log(err.message);
            }
            console.log("Connexion réussi à la base de données 'apptest.db'");
        });
        const sql = 'SELECT * FROM Books ORDER BY Title;';
        //sql => requete sql
        //[] => tableau de variable nécéssaires à la requete
        db.all(sql, [], (err, rows) => {
            if(err){
                return console.log(err.message);
            }
            response.send('{"title": "Books", "content": ' + JSON.stringify(rows) + '}');
        });
    }

const select = (request, response) => {
    const db = new sqllite.Database(path_db, (err) => {
        if(err){
            return console.log(err.message);
        }
        console.log("Connexion réussi à la base de données 'apptest.db'");
    });
    const sql = 'SELECT * FROM Books WHERE Book_ID = ?;';
    //sql => requete sql
    //[] => tableau de variable nécéssaires à la requete
    db.get(sql, request.params.id, (err, rows) => {
        if(err){
            return console.log(err.message);
        }
        response.send('{"title": "Books", "content": ' + JSON.stringify(rows) + '}');
    });
}

const create = (request, response) => {
    console.log(request.body);
    const db = new sqllite.Database(path_db, (err) => {
        if(err){
            return console.log(err.message);
        }
        console.log("Connexion réussi à la base de données 'apptest.db'");
    });
    //let book = [request.body.booktitle, request.body.bookauthor, request.body.bookcomment];
    let book = ["Mrs. Bridge", "Evan S. Connell", "Premier de la série"]
    const sql = 'INSERT INTO Books (Title, Author, Comments) Values (?, ?, ?);';
    //sql => requete sql
    //[] => tableau de variable nécéssaires à la requete
    db.run(sql, book, (err, rows) => {
        if(err){
            return console.log(err.message);
        }
        response.redirect('/books');
    });
}

const update = (request, response) => {
    const db = new sqllite.Database(path_db, (err) => {
        if(err){
            return console.log(err.message);
        }
        console.log("Connexion réussi à la base de données 'apptest.db'");
    });
    let book2 = [request.body.booktitle, request.body.bookauthor, request.body.bookcomment, id];
    let book = ["Test", "Moi", "Réussi", request.params.id];
    const sql = 'UPDATE Books SET Title = ?, Author = ?, Comments = ? WHERE (Book_ID = ?);';
    //sql => requete sql
    //[] => tableau de variable nécéssaires à la requete
    db.run(sql, book, (err, rows) => {
        if(err){
            return console.log(err.message);
        }
        response.redirect(200, '/books/' + request.params.id);
    });
}

const deletee = (request, response) => {
    const db = new sqllite.Database(path_db, (err) => {
        if(err){
            return console.log(err.message);
        }
        console.log("Connexion réussi à la base de données 'apptest.db'");
    });
    const sql = 'DELETE FROM Books WHERE Book_ID = ?;';
    //sql => requete sql
    //[] => tableau de variable nécéssaires à la requete
    db.run(sql, request.params.id, (err, rows) => {
        if(err){
            return console.log(err.message);
        }
        response.redirect('/books');
    });
}

exports.modules = {
    select: select,
    selectAll: selectAll,
    create: create,
    update: update,
    delete: deletee,
};