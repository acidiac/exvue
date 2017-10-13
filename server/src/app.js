// Importing all the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');


const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req, res, next) => {
    res.send({
        message: "hello world"
    });
});

app.post('/register', (req, res, next) => {
    res.send({
        message: "You are registered!"
    })
})

app.listen(process.env.PORT || 8081);