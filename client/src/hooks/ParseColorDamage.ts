export default function ParseColorDamage(typePokemon: string) {
  let colorType: string;
  switch (typePokemon) {
    case 'normal': {
      colorType = '#CACACA';
      break;
    }
    case 'fire': {
      colorType = '#ED7F37';
      break;
    }
    case 'water': {
      colorType = '#3EAFF6';
      break;
    }
    case 'electric': {
      colorType = '#FCEF2C';
      break;
    }
    case 'grass': {
      colorType = '#56980F';
      break;
    }
    case 'ice': {
      colorType = '#66D1E5';
      break;
    }
    case 'fighting': {
      // colorType = '#81341F';
      colorType = '#81221B';
      break;
    }
    case 'poison': {
      colorType = '#BF8CD1';
      break;
    }
    case 'ground': {
      colorType = '#CA9F5E';
      break;
    }
    case 'flying': {
      colorType = '#5F9FFF';
      break;
    }
    case 'psychic': {
      colorType = '#FFB7FC';
      break;
    }
    case 'bug': {
      colorType = '#D1E16F';
      break;
    }
    case 'rock': {
      colorType = '#898373';
      break;
    }
    case 'ghost': {
      colorType = '#805594';
      break;
    }
    case 'dragon': {
      colorType = '#C699FF';
      break;
    }
    case 'dark': {
      colorType = '#3c2d23';
      break;
    }
    case 'steel': {
      colorType = '#E4E4E4';
      break;
    }
    default: {
      colorType = '#CACACA'
    }
  }
  return colorType
}
