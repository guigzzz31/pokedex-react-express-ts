import express from "express";
import mongoose from "mongoose";
import routes from "./routes/router";
const app = express();

//Database
mongoose
  .connect("mongodb://127.0.0.1:27017/pokedexV1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use(routes);

// start server
app.listen(5000, () => console.log("Server started on 5000"));
