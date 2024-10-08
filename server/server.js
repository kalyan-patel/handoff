require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connected to Database"));



app.use(express.static('build'));
app.use(express.json());

const listingsRouter = require('./routes/listings');
app.use('/api/listings', listingsRouter);


app.listen(PORT, () => console.log("Server started on port 5000"));