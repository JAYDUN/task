import {combineReducers} from 'redux';
import AccountList from './reducers/AccountList';
import AccountDetail from './reducers/AccountDetail';

const rootReducer = combineReducers({
    AccountList,
    AccountDetail
});

export default rootReducer;