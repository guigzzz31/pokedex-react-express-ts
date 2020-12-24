import express from "express";
import {Db as MongoDb, MongoClient} from 'mongodb'
const cors = require('cors')
const path = require('path')
import mongoose from "mongoose";
import routes from "./routes/router";
const app = express();

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


// const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://guigz:<kaioken>@cluster0.rhs7n.mongodb.net/<pokedexV1>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("pokedexv1").collection("pokemons");
  // perform actions on the collection object
  client.close();
});
//middleware
//app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

//routes
app.use(routes);

// start server
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server started on ${port}`));
