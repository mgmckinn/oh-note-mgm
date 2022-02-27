const router = require('express').Router();
const { findById, createNewNote, validateNote } = require('../../Develop/public/notes.html');
const { notes } = require('../../Develop/db/db.json');
const { append } = require('express/lib/response');


// get list of notes
router.get('/notes', (req, res) => {
  const results = notes;
  res.json(results);
  console.log(notes)
})

// pick note by id
router.get('/notes/:id', (req, res) => {
  const result = findById(req.params.id, notes);
  res.json(result);
  console.log(result)
})

//return error if note not found
router.get('/notes/:id', (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
})
// store note to server
router.post('/notes', (req, res) => {
  
  // set id based on the next index
  req.body.id = notes.length.toString();
  
  
  // error sent for missing notes
  if(!validateNote(req.body)) {
    res.status(400).send(
      'There is a missing title or the note has no text.');
  } else {
   
   
   
    // use notes array to add to json
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});



module.exports = router;