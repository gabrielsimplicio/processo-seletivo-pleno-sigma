import { LOAD_COMICS, LOAD_COMICS_SUCCESS, LOAD_COMICS_REQUESTING, LOAD_COMIC_SUCCESS, LOAD_COMIC_REQUESTING } from './actionTypes';

const initialState = {
    listComic: {
        comics: [],
        isLoadSuccess: false,
        isRequesting: false
    },
    detailComic: {
        comic: null,
        isLoadSuccess: false,
        isRequesting: false
    }

};

export const comicReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_COMICS:
            return {
                ...state,
                listComic: {
                    ...state.listComic,
                    comics: action.comics
                }
            };
        case LOAD_COMICS_REQUESTING:
            return {
                ...state,
                listComic: {
                    ...state.listComic,
                    comics: [],
                    isLoadSuccess: false,
                    isRequesting: true
                }
            }
        case LOAD_COMICS_SUCCESS:
            return {
                ...state,
                listComic: {
                    ...state.listComic,
                    comics: action.comics,
                    isLoadSuccess: true,
                    needLoad: false
                }

            }
        case LOAD_COMIC_REQUESTING:
            return {
                ...state,
                detailComic: {
                    ...state.detailComic,
                    comics: [],
                    isLoadSuccess: false,
                    isRequesting: true
                }
            }
        case LOAD_COMIC_SUCCESS:
            return {
                ...state,
                detailComic: {
                    ...state.detailComic,
                    comic: action.comic,
                    isLoadSuccess: true,
                    needLoad: false
                }

            }
        default:
            return state;
    }
}