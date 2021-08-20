/**
 * Simple backend for generating survey results from JSON input
 */

const express = require('express');
const fs = require('fs');

const app = express();

app.get('/data', (req, res) => {
    try {
        res.status(200).send(JSON.parse(fs.readFileSync('data-sample.json', 'utf8')));
    } catch(error) {
        res.status(500).send({
            error: error.message
        })
    }
});

app.listen(3456);
