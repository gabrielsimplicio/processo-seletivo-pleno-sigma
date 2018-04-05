export const formatToString = (value) => {
  if (!value) {
    return '';
  }

  let valueStr = value.toString().replace('.', ',');

  let splitted = valueStr.split(',');

  if (splitted.length === 1) {
    valueStr += ',00';
  } else if (splitted.length === 2 && splitted[1].length === 1) {
    valueStr += '0';
  }

  return `R$ ${valueStr}`;

}
