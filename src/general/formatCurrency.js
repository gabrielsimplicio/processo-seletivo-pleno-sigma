export const formatToString = (value) => {
  if (!value) {
    return '';
  }

  var valueStr = value.toString().replace('.', ',');

  return `R$ ${valueStr}`;

}
