import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import taskReducer from './../reducers/task';
import uiReducer from './../reducers/ui';
import modalReducer from './../reducers/modal';


const rootReducer = combineReducers({
    task : taskReducer,
    ui : uiReducer,
    modal: modalReducer,
    form : formReducer
});
export default rootReducer;