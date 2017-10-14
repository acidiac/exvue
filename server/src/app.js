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
    console.log("server: hi from register!");
    res.send({
        message: 'Hello, You are registered!',
        credentials: req.body.email
    })
})

app.listen(process.env.PORT || 8081);