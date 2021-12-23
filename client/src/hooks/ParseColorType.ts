export default function ParseColorType(typePokemon: string) {
  let colorType: string;
  switch (typePokemon) {
    case '': {
      colorType = '#OOO';
      break;
    }
    case 'Normal': {
      colorType = '#CACACA';
      break;
    }
    case 'Fire': {
      colorType = '#ED7F37';
      break;
    }
    case 'Water': {
      colorType = '#3EAFF6';
      break;
    }
    case 'Electric': {
      colorType = '#FCEF2C';
      break;
    }
    case 'Grass': {
      colorType = '#56980F';
      break;
    }
    case 'Ice': {
      colorType = '#66D1E5';
      break;
    }
    case 'Fighting': {
      colorType = '#81221B';
      break;
    }
    case 'Poison': {
      colorType = '#BF8CD1';
      break;
    }
    case 'Ground': {
      colorType = '#CA9F5E';
      break;
    }
    case 'Flying': {
      colorType = '#5F9FFF';
      break;
    }
    case 'Psychic': {
      colorType = '#FFB7FC';
      break;
    }
    case 'Bug': {
      colorType = '#D1E16F';
      break;
    }
    case 'Rock': {
      colorType = '#898373';
      break;
    }
    case 'Ghost': {
      colorType = '#805594';
      break;
    }
    case 'Dragon': {
      colorType = '#C699FF';
      break;
    }
    case 'Dark': {
      colorType = '#3c2d23';
      break;
    }
    case 'Steel': {
      colorType = '#E4E4E4';
      break;
    }
    default: {
      colorType = '#CCC9AA'
    }
  }
  return colorType
}
