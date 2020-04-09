/**
 * Fichier affichage des livres
 */
const sqllite = require('sqlite3').verbose();
var path = require('path');

const db_name = path.join(__dirname, "data", "apptest.db");


const select = (request, response) => {
        console.log("la");
        const db = new sqllite.Database(db_name, (err) => {
            if(err){
                return console.log(err.message);
            }
            console.log("Connexion réussi à la base de données 'apptest.db'");
        });
        const sql = 'SELECT * FROM Books ORDERBY Title;';
        //sql => requete sql
        //[] => tableau de variable nécéssaires à la requete
        db.all(sql, [], (err, rows) => {
            if(err){
                return console.log(err.message);
            }
            response.send({"model": rows});
        });
    }

exports.modules = {
    select: select,
};