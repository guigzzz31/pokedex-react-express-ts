import {Request, Response} from "express";
import PokemonModel from "../models/Pokemon";


export default {
  create: async (req: Request, res: Response) => {
    await PokemonModel.init();
    const pokemon = new PokemonModel(req.body);
    const result = await pokemon.save();
    res.status(201).json({ success: true, result });
  },

  delete: async (req: Request, res: Response) => {
    const id = req.params._id;
    const result = await PokemonModel.findOneAndDelete({ _id: id });
    res.status(200).json({ success: true, result: result });
  },
  
  like: async (req: Request, res: Response) => {
    const id = req.params._id;
    const result = await PokemonModel.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(result);
  },

  get: async (req: Request, res: Response) => {
    const result = await PokemonModel.find();
    res.status(200).json({ success: true, result });
  },
};
