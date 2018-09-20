import { createStore, applyMiddleware } from 'redux';
import { Reducers} from './reducers';
import thunk from 'redux-thunk';

export const Store = createStore(Reducers, applyMiddleware(thunk));

Store.subscribe(()=>{
    //console.log('[Subscribe]', Storage.getState());
})