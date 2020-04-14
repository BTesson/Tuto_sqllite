/**
 * Fichier création de la BDD
 */
const sqllite = require('sqlite3').verbose();
var path = require('path');

const createData = () => {
    console.log("Start Ddb");
    const db_name = path.join(__dirname, "apptest.db");

    const db = new sqllite.Database(db_name, (err) => {
        if(err){
            return console.log(err.message);
        }
        console.log("Connexion réussi à la base de données 'apptest.db'");
    });

    const createTable = 'CREATE TABLE IF NOT EXISTS Books (Book_ID INTEGER PRIMARY KEY AUTOINCREMENT, Title VARCHAR(100) NOT NULL, Author VARCHAR(100) NOT NULL,Comments TEXT);';

    db.run(createTable, (err) => {
        if(err) {
            return console.log(err.message);
        }
        console.log('Création de la table books réussi');
    });
    
    const dataTable = 'INSERT INTO Books (Book_ID, Title, Author, Comments) VALUES(1, "Mrs. Bridge", "Evan S. Connell", "Premier de la série"),(2, "Mr. Bridge", "Evan S. Connell", "Second de la série"),(3, "L\'ingénue libertien", "Colette", "Mine + Les égarements de Minne");';

    db.run(dataTable, (err) => {
        if(err){
            return console.log(err.message);
        }
        console.log("Alimentation de la table Books réussi");
    });
}

exports.modules = { 
    createData: createData,
}