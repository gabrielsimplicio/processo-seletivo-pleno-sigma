
const getKeyParams = () => 'ts=1&apikey=f1ba065adfeffb958a41c4e59f325904&hash=cce20d2f9e962178c3937313535fb883';

const getBaseUrl = () => 'http://gateway.marvel.com/v1/public';

export const createUrl = (endpoint, baseUrl, apiKeys) => `${baseUrl}/${endpoint}?${apiKeys}`;

export const marvelUrl = (endpoint) => {
  return createUrl(
    endpoint,
    getBaseUrl(),
    getKeyParams()
  );
}



