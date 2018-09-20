import {LOAD_CART_SUCCESS, LOAD_CART_REQUESTING} from './actionTypes';

const initialState = {
    listComic: {
        comics: [],
        totalPrice: 0,
        isLoadSuccess: false,
        isRequesting: false
    }

};

export const chartReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOAD_CART_REQUESTING:
            return {
                ...state,
                listComic: {
                    ...state.listComic,
                    comics: [],
                    totalPrice: 0,
                    isLoadSuccess: false,
                    isRequesting: true
                }
            }
        case LOAD_CART_SUCCESS:
            return {
                ...state,
                listComic: {
                    ...state.listComic,
                    comics: action.comics,
                    totalPrice: action.totalPrice,
                    isLoadSuccess: true,
                    isRequesting: false
                }

            }
        default:
            return state;
    }
}