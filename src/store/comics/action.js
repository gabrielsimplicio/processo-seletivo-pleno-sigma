import { LOAD_COMICS, LOAD_COMICS_SUCCESS, LOAD_COMICS_REQUESTING, LOAD_COMIC_SUCCESS, LOAD_COMIC_REQUESTING } from './actionTypes';
import MarvelService from './../../services/marvelService';


/* LIST ACTION */
export const loadComicsSuccess = (list) => {
    return {
        type: LOAD_COMICS_SUCCESS,
        comics: list
    }
};

export const loadComicsRequesting = () =>{
    return {
        type: LOAD_COMICS_REQUESTING
    }
}

/*DETAIL ACTION */
export const loadComicSuccess = (list) => {
    return {
        type: LOAD_COMIC_SUCCESS,
        comic: list
    }
};

export const loadComicRequesting = () =>{
    return {
        type: LOAD_COMIC_REQUESTING
    }
}


/* LIST Actions Creator*/
export const loadComics = (obj) => {
    return async (dispatch) => {
        dispatch(loadComicsRequesting());
        let list = await MarvelService.getComics(obj);
        return dispatch(loadComicsSuccess(list));
    }
}


/* DETAIL Actions Creator*/
export const loadComicById = (id) => {
    return async (dispatch) => {
        dispatch(loadComicRequesting());
        let list = await MarvelService.getComicById(id);
        return dispatch(loadComicSuccess(list));
    }
}