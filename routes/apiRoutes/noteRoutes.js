const {notes} = require("../../db/db.json");
const {createNewNote, validateNote} = require("../../lib/note");
const router = require('express').Router();

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id =notes.length.toString();
    if (!validateNote(req.body)) {
        res.status(400).send("Invalid note");
    }else {
    const note = createNewNote(req.body, notes);
    res.join(note);
    }
});

module.exports =router;