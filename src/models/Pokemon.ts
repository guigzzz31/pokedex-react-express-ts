import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
  id: {type: String, unique: true},
  name: { type: String, unique: true },
  img: String,
  type: [],
  stats: Object,
  moves: Object,
  damages: Object,
  misc: Object,
  abilities: Object,
  classification: String,
  height: String,
  weight: String,
  capturerate: Number,
  eggstep: String,
  expgrowth: String,
  happiness: String,
  fleeflag: String,
  entreeforestlevel: String,
  like: Boolean,
});

export default mongoose.model("pokemon", PokemonSchema);
