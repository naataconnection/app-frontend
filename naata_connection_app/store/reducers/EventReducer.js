import EVENTS from "../../data/Dummy";
import {SET_EVENTS } from '../Action';

const initialState = {
    allEvents: [],
    loaded: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_EVENTS:
            // console.log(action.payload)
            return {...state, allEvents : action.payload, loaded:true};
        default:
            return state;
    }
}