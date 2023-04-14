import { combineReducers, createStore } from 'redux';
import productsReducer from '../features/products';
import sortReducer from '../features/sort';

const reducer = combineReducers({
    products: productsReducer,
    sort: sortReducer,
});
export const store = createStore(reducer);


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
