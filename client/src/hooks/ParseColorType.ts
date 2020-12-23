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
      colorType = '#FF8A8A';
      break;
    }
    case 'Water': {
      colorType = '#88D1FB';
      break;
    }
    case 'Electric': {
      colorType = '#FFE175';
      break;
    }
    case 'Grass': {
      colorType = '#B4FE7B';
      break;
    }
    case 'Ice': {
      colorType = '#C6EAFF';
      break;
    }
    case 'Fighting': {
      // colorType = '#81341F';
      colorType = '#FFB169';
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
      colorType = '#CACACA'
    }
  }
  return colorType
}
