const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./dbConnect');
dotenv.config('./.env');

const app = express();

app.get('/', (req, res) => {
    return res.status(200).json({
        id : 123,
        name : "Ankit Sharma",
        course : "Bsc Computer Science",
        city : "Delhi"
    })
})

const PORT = process.env.PORT || 4001;

//call database
dbConnect();

app.listen(PORT, () => {
    console.log(`listening on port : ${PORT}`);
})
 