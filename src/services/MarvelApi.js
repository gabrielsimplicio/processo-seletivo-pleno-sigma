import CryptoJS from 'crypto-js'
import moment from 'moment'

const config = {
    publicKey: '75e4399fc665eecef300db50fa57390c',
    privateKey: '356e3392898b6102757287624e0de26e67212bb7',
    baseUrl: `${window.location.protocol || 'http'}//gateway.marvel.com:80`,
}

class MarvelAPI {

    static async getCharacters(origOptions = {}) {
        const defaultOptions = {page: 1, count: 18, name: '', nameStartsWith: '', comics: null}
        const options = Object.assign(defaultOptions, origOptions)

        const URI = '/v1/public/characters'
        const timeStamp = moment().unix()
        const hash = CryptoJS.MD5(timeStamp + config.privateKey + config.publicKey).toString(CryptoJS.enc.Hex)

        const currentOffset = options.page == 1 ? 0 : (options.count * (options.page - 1))


        let params = `?apikey=${config.publicKey}&ts=${timeStamp}&hash=${hash}&limit=${options.count}&offset=${currentOffset}`

        if (options.name) {
            params = params.concat(`&name=${options.name}`)
        }
        if (options.nameStartsWith) {
            params = params.concat(`&nameStartsWith=${options.nameStartsWith}`)
        }

        if (options.comics) {
            params = params.concat(`&comics=${options.comics}`)
        }

        const url = `${config.baseUrl}${URI}${params}`

        var response = await fetch(url)
        var data = await response.json();
        return data;
    }

    static async getComics(origOptions = {}) {
        const defaultOptions = {page: 1, count: 18, name: '', titleStartsWith: '', characters: null}
        const options = Object.assign(defaultOptions, origOptions)
        const URI = '/v1/public/comics'
        const timeStamp = moment().unix()
        const hash = CryptoJS.MD5(timeStamp + config.privateKey + config.publicKey).toString(CryptoJS.enc.Hex)
        const currentOffset = options.page === 1 ? 0 : (options.count * (options.page - 1))
        let params = `?apikey=${config.publicKey}&ts=${timeStamp}&hash=${hash}&limit=${options.count}&offset=${currentOffset}`

        if (options.titleStartsWith) {
            params = params.concat(`&titleStartsWith=${options.titleStartsWith}`)
        }

        if (options.characters) {
            params = params.concat(`&characters=${options.characters}`)
        }

        const url = `${config.baseUrl}${URI}${params}`

        var response = await fetch(url)
        var data = await response.json();
        return data;
    }

    static async getComicsById(id) {
        const URI = `/v1/public/comics/${id}`;
        const timeStamp = moment().unix();
        const hash = CryptoJS.MD5(timeStamp + config.privateKey + config.publicKey).toString(CryptoJS.enc.Hex);

        let params = `?apikey=${config.publicKey}&ts=${timeStamp}&hash=${hash}`

        const url = `${config.baseUrl}${URI}${params}`

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

    static async getCharactersById(id) {
        const URI = `/v1/public/characters/${id}`;
        const timeStamp = moment().unix();
        const hash = CryptoJS.MD5(timeStamp + config.privateKey + config.publicKey).toString(CryptoJS.enc.Hex);

        let params = `?apikey=${config.publicKey}&ts=${timeStamp}&hash=${hash}`

        const url = `${config.baseUrl}${URI}${params}`

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

export default MarvelAPI