/**********************************************************************************
 * BTI325 – Assignment 1
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 * 
 * Name: Itzel Velez     Student ID: 179425210     Date: 15/09/2023
 * Online (Cyclic) URL: https://shy-crab-wear.cyclic.app/ 
 * 
 *********************************************************************************/

const path = require('path');

const express = require('express'); // "require" the Express module
const app = express(); // obtain the "app" object
const HTTP_PORT = process.env.PORT || 8080; // assign a port

app.get('/', (req, res) => {
    res.send('Itzel Velez - 179425210');
});

// start the server on the port and output a confirmation ot the console
app.listen(HTTP_PORT, () => console.log(`server listening on: ${HTTP_PORT}`));
