const express = require('express');
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8000;



mongoose.connect(
    process.env.DB_CONNECT,
    {
        useNewUrlParser: true,
    },
    () => {
        console.log("Connected to DB");
    }
);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); 
