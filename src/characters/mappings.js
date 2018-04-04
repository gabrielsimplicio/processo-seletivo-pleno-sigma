
export const getCharacter = item => ({
  id: item.id,
  name: item.name,
  thumbnail: getThumbnailPath(item.thumbnail)
});

export const getThumbnailPath = thumbnail =>
  thumbnail && thumbnail.path ? `${thumbnail.path}/portrait_incredible.${thumbnail.extension}` : '';


