export default function ParseColorDamageValue(value: string) {
  let colorType: string;
  switch (value) {
    case '0': {
      colorType = '#CACACA';
      break;
    }
    case '0.25': {
      colorType = '#197219';
      break;
    }
    case '0.5': {
      colorType = '#7ABC8E';
      break;
    }
    case '1': {
      colorType = '#90E39A';
      break;
    }
    case '2': {
      colorType = '#D62246';
      break;
    }
    case '4': {
      colorType = '#a51c1c';
      break;
    }
    default: {
      colorType = '#CACACA'
    }
  }
  return colorType
}
