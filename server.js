const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');

const app = express();

require('dotenv').config()
require('./config/database')


const usersRouter = require('./routes/api/users');
const facilitiesRouter = require('./routes/api/facilities');

app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.png')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(require('./config/auth'));
app.use(cors());

app.use('/api/users', usersRouter);
app.use('/api/facilities', facilitiesRouter);

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log(`Express app running on port ${port}`)
});