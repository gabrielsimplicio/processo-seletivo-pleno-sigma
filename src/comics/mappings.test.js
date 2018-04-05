import {
  getFirstPrice,
  getDetailUrl,
  getThumbnailPath,
  getComic,
  getCreatorName,
  isImageAvailable,
  getImagePath
} from './mappings';

describe('getFirstPrice', () => {

  test('Expect to be 0 when undefined', () => expect(getFirstPrice()).toBe(0));

  test('Expect to be 0 when empty array', () => expect(getFirstPrice([])).toBe(0));

  test('Expect to be 3.99', () => expect(getFirstPrice([{ price: 3.99 }, { price: 4 }])).toBe(3.99));

});

describe('getDetailUrl', () => {

  test('Expect to be an empty string when undefined', () => expect(getDetailUrl()).toBe(''));

  test('Expect to be an empty string when empty array', () => expect(getDetailUrl([])).toBe(''));

  test('Expect to be test.com', () => {
    expect(getDetailUrl([
      { type: 'test', url: '' },
      { type:  'detail', url: 'test.com' } ])).toBe('test.com');

  });

});

describe('getThumbnailPath', () => {

  test('Expect to be an empty string', () => expect(getThumbnailPath({})).toBe('/img/not_found.jpg'));

  test('Expect to be text.com/thumb', () =>
    expect(getThumbnailPath({thumbnail: { path: 'text.com/thumb', extension: 'png' }})).toBe('text.com/thumb.png'));

  test('Expect to substitute thumbnail by image', () => {

    const input = {
      thumbnail : { path: 'thumb.com/image_not_available', extension: 'png' },
      images: [
        { path: 'thumb.com/image', extension: 'png' }
      ]
    }

    expect(getThumbnailPath(input)).toBe('thumb.com/image.png');

  });

  test('Expect to substitute thumbnail by image default', () => {

    const input = {
      thumbnail : { path: 'thumb.com/image_not_available', extension: 'png' },
      images: [
        { path: 'thumb.com/image_not_available', extension: 'png' }
      ]
    }

    expect(getThumbnailPath(input)).toBe('/img/not_found.jpg');

  });
});

describe('isImageAvailable', () => {

  test('Expect to be false', () =>
    expect(isImageAvailable('thumb.com/image_not_available.jpg')).toBeFalsy());

  test('Expect to be true', () =>
    expect(isImageAvailable('thumb.com/image.jpg')).toBeTruthy());

});

describe('getCreatorName', () => {

  test('Expect to be an empty string', () => expect(getCreatorName()).toBe(''));

  test('Expect to be George Lucas | director', () =>
    expect(getCreatorName({ name: 'George Lucas', role: 'director' })).toBe('George Lucas | director'));

});

describe('getComic', () => {

  const objectTest = {
    "id":1220,
    "digitalId":0,
    "title":"Amazing Spider-Man 500 Covers Slipcase - Book II (Trade Paperback)",
    "issueNumber":0,
    "variantDescription":"",
    "description":null,
    "modified":"-0001-11-30T00:00:00-0500",
    "isbn":"",
    "upc":"",
    "diamondCode":"",
    "ean":"",
    "issn":"",
    "format":"Trade Paperback",
    "pageCount":0,
    "textObjects":[],
    "resourceURI":"http://gateway.marvel.com/v1/public/comics/1220",
    "urls":[
      {
        "type":"detail",
        "url":"http://marvel.com/comics/collection/1220/amazing_spider-man_500_covers_slipcase_-_book_ii_trade_paperback?utm_campaign=apiRef&utm_source=f1ba065adfeffb958a41c4e59f325904"
      }
    ],
    "series":{
      "resourceURI":"http://gateway.marvel.com/v1/public/series/277",
      "name":"Amazing Spider-Man 500 Covers Slipcase - Book II (2003)"
    },
    "variants":[],
    "collections":[],
    "collectedIssues":[],
    "dates":[
      {"type":"onsaleDate","date":"2029-12-31T00:00:00-0500"},
      {"type":"focDate","date":"-0001-11-30T00:00:00-0500"}
    ],
    "prices":[
      {"type":"printPrice","price":0}
    ],
    "thumbnail":{
      "path":"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
      "extension":"jpg"
    },
    "images":[],
    "creators":{
      "available":0,
      "collectionURI":"http://gateway.marvel.com/v1/public/comics/1220/creators",
      "items":[],
      "returned":0
    },
    "characters":{
      "available":0,
      "collectionURI":"http://gateway.marvel.com/v1/public/comics/1220/characters",
      "items":[],
      "returned":0
    },
    "stories":{
      "available":2,
      "collectionURI":"http://gateway.marvel.com/v1/public/comics/1220/stories",
      "items":[
        {
          "resourceURI":"http://gateway.marvel.com/v1/public/stories/351",
          "name":"Interior #351",
          "type":"interiorStory"
        },
        {
          "resourceURI":"http://gateway.marvel.com/v1/public/stories/65310",
          "name":"AMAZING SPIDER-MAN 500 COVERS SLIPCASE - BOOK II 0 cover",
          "type":"cover"
        }
      ],
      "returned":2
    },
    "events":{
      "available":0,
      "collectionURI":"http://gateway.marvel.com/v1/public/comics/1220/events",
      "items":[],
      "returned":0
    }
  };

  const expected = {
    id: objectTest.id,
    title: objectTest.title,
    price: 0,
    thumbnail: '/img/not_found.jpg'
  };

  test('Expect to have right properties', () => expect(getComic(objectTest)).toEqual(expected));

});

describe('getImagePath', () => {

  test('expect to return default image path when undefined value', () =>
    expect(getImagePath()).toBe('/img/not_found.jpg'));

  test('expect to return default image path when invalid image', () =>
    expect(getImagePath([{ path: 'image_not_available', extension: 'jpg' }])).toBe('/img/not_found.jpg'));

  test('expect to return right path', () =>
    expect(getImagePath([{ path: 'image', extension: 'jpg' }])).toBe('image.jpg'));

});
