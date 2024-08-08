const express = require("express")
const mongoose = require("mongoose")
const app = express();

require("dotenv").config();

const PORT = 3000;
app.use(express.json());

const URL = process.env.URL
app.use('/movie',require("./Routes/Routes"))

mongoose.connect(URL).then(() =>
{
    console.log("Mongodb connection success")
}).catch((error) => {
    console.log("error connection")
})

app.listen(PORT,() => {
    console.log(`sever running on port number ${PORT}`)
})