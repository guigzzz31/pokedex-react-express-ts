import React from "react"
import PokemonProps from "./types/Pokemon";

export type TInitialState = {
  type: string,
  isLoading: boolean,
  pokemons: PokemonProps[],
  likedPokemons: PokemonProps[],
  pokemonDetails: PokemonProps,
}

export const initialState: TInitialState = {
  type: "",
  isLoading: false,
  pokemons: [],
  likedPokemons: [],
  pokemonDetails: {
    id: "",
    name: "",
    like: false,
    img: "",
    type: [],
    stats: {
      hp: "0",
      attack: "0",
      defense: "0",
      spattack: "0",
      spdefense: "0",
      speed: "0",
    },
    damages: {
      normal: "1",
      fire: "1",
      water: "1",
      electric: "1",
      grass: "1",
      ice: "1",
      fight: "1",
      poison: "1",
      ground: "1",
      flying: "1",
      psychic: "1",
      bug: "1",
      rock: "1",
      ghost: "1",
      dragon: "1",
      dark: "1",
      steel: "1",
    },
    misc: {
      sex: {
        male: 0,
        female: "",
      },
      abilities: {
        normal: [],
        hidden: [],
      },
      classification: "",
      height: "",
      weight: "",

    }
  },
};

const appReducer = (state: TInitialState, action: any) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: action.isLoading }

    case "POKEMONS_FETCH_SUCCESS":
      return { ...state, pokemons: action.pokemons, isLoading: action.isLoading };

    case "POKEMON_DETAILS_FETCH_SUCCESS":
      return { ...state, pokemonDetails: action.pokemonDetails }

    case "POKEMONS_LIKED_FETCH_SUCCESS":
      return { ...state, likedPokemons: action.likedPokemons };

    default:
      return state;
  }
};

export default appReducer;
