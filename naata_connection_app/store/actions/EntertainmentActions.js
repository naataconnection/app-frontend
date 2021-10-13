import { API_ENDPOINT } from "../../config";

export const FETCH_ENT_SUCCESS = "FETCH_CONTENT_SUCCESS";
export const FETCH_ENT_FAILURE = "FETCH_CONTENT_FAILURE";
export const SET_ENT_LOADING = "SET_ENT_LOADING";

export const fetchEntertainment = () => {
    return (dispatch) => {
        dispatch({type: SET_ENT_LOADING});
        fetch(API_ENDPOINT+"/entertainment", {
            "method" : "GET"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            dispatch({
                type: FETCH_ENT_SUCCESS,
                payload: data
            })            
        })
        .catch(error => {
            console.log(error)
            dispatch({
                type: FETCH_ENT_FAILURE,
                payload: error.message
            })
        })
    }
}
