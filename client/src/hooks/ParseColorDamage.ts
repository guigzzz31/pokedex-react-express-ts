export default function ParseColorDamage(typePokemon: string) {
  let colorType: string;
  switch (typePokemon) {
    case 'normal': {
      colorType = '#CACACA';
      break;
    }
    case 'fire': {
      colorType = '#FF8A8A';
      break;
    }
    case 'water': {
      colorType = '#88D1FB';
      break;
    }
    case 'electric': {
      colorType = '#FFE175';
      break;
    }
    case 'grass': {
      colorType = '#B4FE7B';
      break;
    }
    case 'ice': {
      colorType = '#C6EAFF';
      break;
    }
    case 'fighting': {
      // colorType = '#81341F';
      colorType = '#FFB169';
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
