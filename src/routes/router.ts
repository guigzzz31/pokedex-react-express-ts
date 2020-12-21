import express from "express";
import PokemonController from "../controllers/pokemon";
import catchErrorHandler from "../utils/errorHandler";
const router = express.Router();

router.post("/api/insert/pokemons", catchErrorHandler(PokemonController.create));
router.get("/api/pokemons", catchErrorHandler(PokemonController.get));
router.put("/api/pokemons/:_id", catchErrorHandler(PokemonController.like));
router.delete("/api/delete/pokemon/:_id", catchErrorHandler(PokemonController.delete));

export default router;
