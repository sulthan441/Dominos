require('dotenv').config();
const express = require('express');
const connect = require('./db/connect');
const app = express();
app.use(express.json());
const port = 8080;


connect().then(() => {
    app.listen(port, () => {
        console.log(`server listening on port ${port}`);
    })
})
