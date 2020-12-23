type PokemonProps = {
  like: boolean,
  id: string;
  name: string;
  img: string;
  type: string[];
  stats: {
    hp: string;
    attack: string;
    defense: string;
    spattack: string;
    spdefense: string;
    speed: string;
  },
  moves: {
    level: {
      learnedat: string;
      name: string;
      gen: string;
    }[];
    tmhm: {
      learnedat: string;
      name: string;
      gen: string;
    }[];
    egg: {
      name: string;
      gen: string;
    }[];
    tutor: {
      name: string;
      gen: string;
    }[];
    gen34: {
      name: string;
      method: string;
    }[];
  },
  damages: {
    normal: string,
    fire: string,
    water: string,
    electric: string,
    grass: string,
    ice: string,
    fight: string,
    poison: string,
    ground: string,
    flying: string,
    psychic: string,
    bug: string,
    rock: string,
    ghost: string,
    dragon: string,
    dark: string,
    steel: string,
  },
  misc: {
    sex: {
      male: number,
      female: string
    },
    abilities: {
      normal: string[],
      hidden: string[],
    },
    classification: string,
    height: string,
    weight: string,
    capturerate: number,
    eggsteps: string,
    expgrowth: string,
    happiness: string,
    evpoints: string[],
    fleeflag: string,
    entreeforestlevel: string,
  }
}

export default PokemonProps;