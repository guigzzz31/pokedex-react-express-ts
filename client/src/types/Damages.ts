export type DamageProps = {
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
    stats: object,
  },
};

export enum EDamages {
  Normal = 'normal',
  Fire = 'fire',
  Water = 'water',
  Electric = 'electric',
  Grass = 'grass',
  Ice = 'ice',
  Fighting = 'fight',
  Poison = 'poison',
  Ground = 'ground',
  Flying = 'flying',
  Psychic = 'psychic',
  Bug = 'bug',
  Rock = 'rock',
  Ghost = 'ghost',
  Dragon = 'dragon',
  Dark = 'dark',
  Steel = 'steel',
}

export const damagesMapColor: Record<EDamages, string> = {
  [EDamages.Normal]: '#CACACA',
  [EDamages.Fire]: '#ED7F37',
  [EDamages.Water]: '#3EAFF6',
  [EDamages.Electric]: '#FCEF2C',
  [EDamages.Grass]: '#78C850',
  [EDamages.Ice]: '#66D1E5',
  [EDamages.Fighting]: '#81221B',
  [EDamages.Poison]: '#A14CA0',
  [EDamages.Ground]: '#CA9F5E',
  [EDamages.Flying]: '#A890F0',
  [EDamages.Psychic]: '#E65386',
  [EDamages.Bug]: '#A8B820',
  [EDamages.Rock]: '#898373',
  [EDamages.Ghost]: '#805594',
  [EDamages.Dragon]: '#796BF8',
  [EDamages.Dark]: '#3c2d23',
  [EDamages.Steel]: '#B8B8D0',
}

export enum EValues {
  None = '0',
  VeryLow = '0.25',
  Low = '0.5',
  Regular = '1',
  High = '2',
  VeryHigh = '4'
}

export const valuesMapColor: Record<EValues, string> = {
  [EValues.None]: '#CACACA',
  [EValues.VeryLow]: '#197219',
  [EValues.Low]: '#7ABC8E',
  [EValues.Regular]: '#90E39A',
  [EValues.High]: '#D62246',
  [EValues.VeryHigh]: '#a51c1c',
}