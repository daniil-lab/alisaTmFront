import { combineReducers, createStore } from 'redux';
import DataReducer from './Data Reducer/dataReducer';

const rootReducer = combineReducers({
    data: DataReducer,
});

const store = createStore(rootReducer);

export default store;
