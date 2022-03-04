//import variables
const express = require('express')
const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));


app.listen(PORT, function() {
    console.log(`Listening to PORT: ${PORT}`);
});


