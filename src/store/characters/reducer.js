import { LOAD_CHARACTERS_SUCCESS, LOAD_CHARACTERS_REQUESTING, LOAD_CHARACTER_SUCCESS, LOAD_CHARACTER_REQUESTING } from './actionTypes';

const initialState = {
    listCharacter: {
        characters: [],
        isLoadSuccess: false,
        isRequesting: false
    },
    detailCharacter: {
        character: null,
        isLoadSuccess: false,
        isRequesting: false
    }

};

export const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case LOAD_CHARACTERS_REQUESTING:
            return {
                ...state,
                listCharacter: {
                    ...state.listCharacter,
                    characters: [],
                    isLoadSuccess: false,
                    isRequesting: true
                }
            }
        case LOAD_CHARACTERS_SUCCESS:
            return {
                ...state,
                listCharacter: {
                    ...state.listCharacter,
                    characters: action.comics,
                    isLoadSuccess: true,
                    needLoad: false
                }

            }
        case LOAD_CHARACTER_REQUESTING:
            return {
                ...state,
                detailCharacter: {
                    ...state.detailCharacter,
                    character: [],
                    isLoadSuccess: false,
                    isRequesting: true
                }
            }
        case LOAD_CHARACTER_SUCCESS:
            return {
                ...state,
                detailCharacter: {
                    ...state.detailCharacter,
                    character: action.comic,
                    isLoadSuccess: true
                }
            }
        default:
            return state;
    }
}