import express from "express";
import PokemonController from "../controllers/pokemon";
import catchErrorHandler from "../utils/errorHandler";

const router = express.Router();

router.post("/api/insert/pokemon", catchErrorHandler(PokemonController.create));
router.post("/api/insert/pokemons", catchErrorHandler(PokemonController.createAll));
router.get("/api/pokemons", catchErrorHandler(PokemonController.getAllPokemon));
router.get("/api/pokemon/:id", catchErrorHandler(PokemonController.getPokemonByID));
router.get("/api/pokemon/:name", catchErrorHandler(PokemonController.getPokemonByName));
router.put("/api/pokemons/:_id", catchErrorHandler(PokemonController.like));
router.delete("/api/delete/pokemon/:_id", catchErrorHandler(PokemonController.delete));

export default router;
