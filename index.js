const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const newsRoutes = require('./routes/news');

require('dotenv').config();
app.use(bodyParser.json());

app.use('/api', newsRoutes);

mongoose.connect(
    "example.connection.string", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log("Database connected.")
    });
app.listen(8080,()=>{
    console.log('Server Started.')
});

