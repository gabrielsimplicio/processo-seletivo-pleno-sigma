const DEFAULT_PATH = '/img/not_found.jpg';

export const getComic = item => ({
  id: item.id,
  title: item.title,
  price: getFirstPrice(item.prices),
  thumbnail: getThumbnailPath(item)
});

export const getFirstPrice = prices =>
  prices && prices.length ? prices[0].price : 0;

export const getDetailUrl = urls =>
  urls && urls.length ? urls.find(x => x.type === 'detail').url : '';

export const getThumbnailPath = item => {

  const thumbnailPath = item.thumbnail && item.thumbnail.path ?
    `${item.thumbnail.path}.${item.thumbnail.extension}` : null;

  if (thumbnailPath && isImageAvailable(thumbnailPath)) {
    return thumbnailPath;
  }

  if (item.images && item.images.length) {
    return getImagePath(item.images);
  }

  return DEFAULT_PATH;
}

export const getCreatorName = creator =>
  creator && creator.name ? `${creator.name} | ${creator.role}` : '';

export const isImageAvailable = path => {
  const imageFilterRegex = /image_not_available/;
  return !imageFilterRegex.test(path);
}

export const getImagePath = images => {
  if (!images || !images.length) {
    return DEFAULT_PATH;
  }

  if (!isImageAvailable(images[0].path)) {
    return DEFAULT_PATH;
  }

  return `${images[0].path}.${images[0].extension}`;

};
