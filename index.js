import express  from "express";
import router from "./routes/route.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors'
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true }))

app.use(cors())

app.use('/api', router);

mongoose.connect("mongodb://localhost:27017/movies_DB", {useNewUrlParser: true, useUnifiedTopology: true} );

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})