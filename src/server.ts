import bodyParser from "body-parser";
import express from "express";
import {Db as MongoDb} from 'mongodb'
const cors = require('cors')
const path = require('path')
import mongoose from "mongoose";
import routes from "./routes/router";
const app = express();

// app.use(bodyParser.json());
app.use(cors())

//Database
// mongoose
//   .connect("mongodb://127.0.0.1:27017/pokedexV1", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     autoIndex: true,
//   })
//   .then(() => console.log("Connected to database"))
//   .catch((err) => console.log(err));

const connection = "mongodb+srv://guigz:kaioken@cluster0.rhs7n.mongodb.net/pokedexV1?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err))
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client/public')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/public/index.html'))
})

//routes
app.use(routes);

// start server
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));
