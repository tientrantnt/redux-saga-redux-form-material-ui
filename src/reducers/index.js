import {combineReducers} from 'redux';
import taskReducer from './../reducers/task';
import uiReducer from './../reducers/ui';
import modalReducer from './../reducers/modal';


const rootReducer = combineReducers({
    task : taskReducer,
    ui : uiReducer,
    modal: modalReducer
});
export default rootReducer;