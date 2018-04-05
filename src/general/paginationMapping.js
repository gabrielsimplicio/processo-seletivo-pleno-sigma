export const getPages = (total, perPage) => {
  perPage = !!perPage ? perPage : 1;
  const numberPages = Math.floor(total/perPage);
  const pages = [];
  for (let i = 0; i < numberPages; i++) {
    pages.push(i + 1);
  }
  return pages;
};

export const filterPages = (pages, currentPage) => {

  if (pages.length < 10) {
    return pages;
  }

  const position = pages.findIndex(x => x === currentPage);
  let initial = position - 4 < 0 ? 0 : position - 4;
  let final = position + 5 > pages.length ? pages.length : position + 5;

  if (initial === 0 && final !== pages.length) {
    final = 9;
  }

  if (final === pages.length && initial !== 0) {
    initial = position - 9;
  }

  const array = [];
  for (let i = initial; i < final; i++) {
    array.push(pages[i]);
  }
  return array;
};
