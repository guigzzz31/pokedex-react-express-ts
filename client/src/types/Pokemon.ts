export type Stats = {
  hp: string;
  attack: string;
  defense: string;
  spattack: string;
  spdefense: string;
  speed: string;
}

export enum EStats {
  Hp = 'hp',
  Attack = 'attack',
  Defense = 'defense',
  SpeAttack = 'spattack',
  SpeDefense = 'spdefense',
  Speed = 'speed'
}

export const statMap: Record<EStats, string> = {
  [EStats.Hp]: 'HP',
  [EStats.Attack]: 'ATK',
  [EStats.Defense]: 'DEF',
  [EStats.SpeAttack]: 'ATK SP',
  [EStats.SpeDefense]: 'DEF SP',
  [EStats.Speed]: 'SPEED',
}

type PokemonProps = {
  like: boolean,
  id: string;
  name: string;
  img: string;
  type: string[];
  stats: Stats,
  moves?: {
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
    capturerate?: number,
    eggsteps?: string,
    expgrowth?: string,
    happiness?: string,
    evpoints?: string[],
    fleeflag?: string,
    entreeforestlevel?: string,
  }
}

export default PokemonProps;