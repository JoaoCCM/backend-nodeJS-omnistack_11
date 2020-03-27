const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

const routes = require('./routes/routes')

const app = express();

app.use(express.json())

//cors config
app.use(cors());

//routes config
app.use(routes)

app.listen(PORT, () => {
    console.log('server on')
})