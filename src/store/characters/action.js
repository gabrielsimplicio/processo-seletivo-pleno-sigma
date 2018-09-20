import { LOAD_CHARACTERS_SUCCESS, LOAD_CHARACTERS_REQUESTING, LOAD_CHARACTER_SUCCESS, LOAD_CHARACTER_REQUESTING } from './actionTypes';
import MarvelService from './../../services/marvelService';


/* LIST ACTION */
export const loadCharactersSuccess = (list) => {
    return {
        type: LOAD_CHARACTERS_SUCCESS,
        comics: list
    }
};


export const loadCharactersRequesting = () => {
    return {
        type: LOAD_CHARACTERS_REQUESTING
    }
}

/*DETAIL ACTION */
export const loadCharacterSuccess = (list) => {
    return {
        type: LOAD_CHARACTER_SUCCESS,
        comic: list
    }
};

export const loadCharacterRequesting = () => {
    return {
        type: LOAD_CHARACTER_REQUESTING
    }
}


/* LIST Actions Creator*/
export const loadCharacters = (obj) => {
    return async (dispatch) => {
        dispatch(loadCharactersRequesting());
        let list = await MarvelService.getCharacters(obj);
        return dispatch(loadCharactersSuccess(list));
    }
}


/* DETAIL Actions Creator*/
export const loadCharacterById = (id) => {
    return async (dispatch) => {
        dispatch(loadCharacterRequesting());
        let list = await MarvelService.getCharacterById(id);
        return dispatch(loadCharacterSuccess(list));
    }
}