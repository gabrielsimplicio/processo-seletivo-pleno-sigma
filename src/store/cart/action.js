import {LOAD_CART_SUCCESS, LOAD_CART_REQUESTING} from './actionTypes';

import MarvelService from './../../services/marvelService';
import cookie from 'react-cookies';

/* ACTION */
export const loadChartSuccess = (list, totalPrice) => {
    return {
        type: LOAD_CART_SUCCESS,
        comics: list,
        totalPrice:totalPrice
    }
};

export const loadChartRequesting = () => {
    return {
        type: LOAD_CART_REQUESTING
    }
}


/* Actions Creator*/
export const loadChart = () => {
    return async (dispatch) => {
        var idsComics = cookie.load('chartItems');
        dispatch(loadChartRequesting());
        var listComics = [];
        var totalPrice = 0;

        if (idsComics) {
            for (var index in idsComics) {
                let list = await MarvelService.getComicById(idsComics[index]);
                listComics.push(list.data.results[0])
                totalPrice += list.data.results[0].prices[0].price;
            }
        }
        return dispatch(loadChartSuccess(listComics,totalPrice));
    }
}

