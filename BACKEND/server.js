const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const dotenv = require("dotenv");

dotenv.config();

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {

})

const connection = mongoose.connection

connection.once("open", () => {
    console.log("mongodb was connected successful");
})

const app = express();

const PORT = process.env.PORT || 8070;

app.use(cors());

app.use(express.json());

app.listen(PORT, () =>{
    console.log(`server is up and running port on number ${PORT}`);
}) 