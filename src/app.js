const express = require('express');
const cors = require('cors');
const {
    errors
} = require('celebrate');


const routes = require('./routes/routes')

const app = express();

app.use(express.json())

//cors config
app.use(cors());

//routes config
app.use(routes)

//erros config
app.use(errors());

module.exports = app;