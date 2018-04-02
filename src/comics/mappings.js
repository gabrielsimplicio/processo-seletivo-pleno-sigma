export const getComic = item => ({
  id: item.id,
  title: item.title,
  price: getFirstPrice(item.prices),
  thumbnail: getThumbnailPath(item.thumbnail)
});

export const getFirstPrice = prices =>
  prices && prices.length ? prices[0].price : 0;

export const getDetailUrl = urls =>
  urls && urls.length ? urls.find(x => x.type === 'detail').url : '';

export const getThumbnailPath = thumbnail =>
  thumbnail && thumbnail.path ? `${thumbnail.path}.${thumbnail.extension}` : '';

export const getCreatorName = creator =>
  creator && creator.name ? `${creator.name} | ${creator.role}` : '';
