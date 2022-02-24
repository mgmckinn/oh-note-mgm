//List of dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');
//Express app initialization
const app = express();
const PORT = process.env.PORT || 3000;
//Data parsing options
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));
//Require routes
require('.routes/routes')(app);
//Setup application Listener
app.listen(PORT, () => {
    console.log('Application listening on PORT: ' + PORT);
});