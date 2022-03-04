const { response } = require('express');
const fs = require('fs');
const { request } = require('http');

module.exports = function (app) {
    app.get("/api/notes", function (req, res){
        console.log("/n/nStarting GET notes request");

        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

        console.log("/nGET notes: " + JSON.stringify(data));

        response.json(data);
    });

    //POST request

    app.post("/api/notes/:id", function (req, res) {

        const newNote = request.body;

        console.log("/n/nPOST request New Note: " + JSON.stringify(newNote));

        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

        data.push(newNote);

        fs.writeFileSync("./db/db.json", JSON.stringify(data));

        console.log("/nNote added successfully!");

        response.json(data);

        
    });

    app.delete("/api/notes/:id", function(req, res) {
        let noteId = req.params.id.toString();

        console.log(`/n/n DELETE note ${noteId}`);

        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

        const newData = data.filter(note => note.id.toString() !== noteId);

        fs.writeFileSync("./db/db.json", JSON.stringify(newData));

        console.log(`/nNote deleted : ${noteId}`);

        response.json(newData);
    });
};