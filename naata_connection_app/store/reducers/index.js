import eventReducer from './EventReducer';
import {combineReducers} from 'redux'

export default combineReducers({
    events: eventReducer
});