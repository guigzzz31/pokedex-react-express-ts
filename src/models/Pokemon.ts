import mongoose from "mongoose";

const Schema = mongoose.Schema;

const WilderSchema = new Schema({
  id: {type: String, unique: true},
  name: { type: String, unique: true },
  img: String,
  types: [String],
  like: Boolean,
  
});

export default mongoose.model("wilder", WilderSchema);
