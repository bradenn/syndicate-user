const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

/* Acquire Environment */
require('dotenv').config();

/* MongoDB Connection */
mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true });
mongoose.set('useCreateIndex', true);

/* Mongoose Logging */
let db = mongoose.connection;
db.on('error', (error) => console.log(`Connection Failed: ${error}`));
db.once('open', () => console.log('Connected to MongoDB with no errors.'));

/* Express Middleware */
app.use(bodyParser.json());

/* Route Handling */
app.use('/', require('./routes'));

/* Start Service */
const port = process.env.PORT;
app.listen(port, () => console.log(`Syndicate::Users microservice started, listening on port ${port}.`));
