const fs = require('fs');
const path = require('path');

function findById(id,notesArray) {
    const result = notesArray.filter(note => note.id === id) [0];
};

function createNewNote(body,notesArray) {
    const notes = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: notesArray}, null, 2)
    );

    return notes;
};

function validateNote(note) {
    if(!note.title){
        return false;
    }

    if(!note.text) {

        return false;
    }

    return true;
};

module.exports = {
    findById,createNewNote,validateNote
};