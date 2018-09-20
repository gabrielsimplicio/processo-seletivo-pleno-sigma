import lodash from 'lodash';
import crypto from 'crypto';

const ENDPOINT = "http://gateway.marvel.com";

const PRIVATE_KEY = "75d5c6ea8251ea00d75a3c77dfc0617aa111bf95"
const PUBLIC_KEY = "253bed508bd2110c74786c4843f809e8"

const HASH = crypto.createHash('md5').update(`1${PRIVATE_KEY}${PUBLIC_KEY}`).digest("hex");

class MarvelService {


    async getComics(optionsOrigin = {}) {

        const defaultOptions = { page: 1, limit: 20, title: null, characters: null }
        const options = Object.assign(defaultOptions, optionsOrigin)

        const offset = options.page == 1 ? 0 : (options.page - 1) * options.limit;

        let url = `${ENDPOINT}/v1/public/comics?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}&limit=${options.limit}&offset=${offset}`;

        if (options.title) {
            url = url.concat(`&titleStartsWith=${options.title}`)
        }

        if (options.characters) {
            url = url.concat(`&characters=${options.characters}`)
        }


        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Marvel v1/public/comics failed, HTTP status ${response.status}`);
        }

        const data = await response.json();
        return data;

    }

    async getComicById(id) {
        let url = `${ENDPOINT}/v1/public/comics/${id}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Marvel v1/public/comics failed, HTTP status ${response.status}`);
        }

        const data = await response.json();
        return data;

    }

    async getCharacters(optionsOrigin = {}) {

        const defaultOptions = { page: 1, limit: 20, name: null, comics: null }
        const options = Object.assign(defaultOptions, optionsOrigin);

        const offset = options.page == 1 ? 0 : (options.page - 1) * options.limit;

        let url = `${ENDPOINT}/v1/public/characters?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}&limit=${options.limit}&offset=${offset}`;

        if (options.name) {
            url = url.concat(`&nameStartsWith=${options.name}`)
        }

        if (options.comics) {
            url = url.concat(`&comics=${options.comics}`)
        }

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Marvel v1/public/characters failed, HTTP status ${response.status}`);
        }

        const data = await response.json();
        return data;

    }

    async getCharacterById(id) {
        let url = `${ENDPOINT}/v1/public/characters/${id}?ts=1&apikey=${PUBLIC_KEY}&hash=${HASH}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Marvel v1/public/characters failed, HTTP status ${response.status}`);
        }

        const data = await response.json();
        return data;

    }

}


export default new MarvelService();