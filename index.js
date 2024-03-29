const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./dbConnect');
const authRouter = require("./routers/authRouter");
const postsRouter = require("./routers/postsRouter");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
dotenv.config("./.env");

//generateRondom String
// const crypto = require('crypto');
// const cryptoBytes = crypto.randomBytes(64).toString('hex');
// console.log(cryptoBytes);

const app = express();

//middlewares
app.use(express.json());
app.use(morgan("common"));
app.use(cookieParser());

//router
app.use("/auth", authRouter);
app.use("/posts", postsRouter);

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
 