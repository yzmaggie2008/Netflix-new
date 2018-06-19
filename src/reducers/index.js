import { combineReducers } from 'redux';
import mylist from './mylist';
import recommendations from './recommendations';

const reducers = combineReducers({
    mylist,
    recommendations
});

export default reducers;