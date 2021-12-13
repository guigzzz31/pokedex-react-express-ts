import {Request, Response} from "express";
import PokemonModel from "../models/Pokemon";
import PokemonModelOutput from "../models/Pokemon";


export default {
  create: async (req: Request, res: Response) => {
    await PokemonModel.init();
    const pokemon = new PokemonModel(req.body);
    const result = await pokemon.save();
    res.status(201).json({ success: true, result });
  },

  createAll: async (req:Request, res: Response) => {
    await PokemonModel.init();
    const result = await PokemonModel.insertMany(req.body)
    res.status(201).json({ success: true, result });
  },

  delete: async (req: Request, res: Response) => {
    const id = req.params._id;
    const result = await PokemonModel.findOneAndDelete({ _id: id });
    res.status(200).json({ success: true, result: result });
  },
  
  like: async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await PokemonModel.findOneAndUpdate({ id: id }, req.body, {
      new: true,
      useFindAndModify: false,
    });
    res.status(200).json(result);
  },

  getAllPokemon: async (req: Request, res: Response) => {
    const result = await PokemonModelOutput.find();
    res.status(200).json({ success: true, result });
  },

  getPokemonByID: async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await PokemonModel.findOne({ id: id });
    res.status(200).json({ success: true, result });
  },

  getPokemonLiked: async (req: Request, res: Response) => {
    const result = await PokemonModel.find({ like: true });
    res.status(200).json({ success: true, result });
  },
};
