import { API_ENDPOINT } from "../../config";

export const FETCH_SPONSORS_SUCCESS = 'FETCH_SPONSORS_SUCCESS';
export const FETCH_SPONSORS_FAILURE = "FETCH_SPONSORS_FAILURE";
export const SET_SPONSORS_LOADING = "SET_SPONSORS_LOADING";

export const fetchSponsors = () => {
    return (dispatch) => {
        dispatch({type: SET_SPONSORS_LOADING});
        fetch(API_ENDPOINT+"/sponsors", {
            "method" : "GET"
        })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: FETCH_SPONSORS_SUCCESS,
                payload: data
            })            
        })
        .catch(error => {
            console.log(error)
            dispatch({
                type: FETCH_SPONSORS_FAILURE,
                payload: error.message
            })
        })
    }
}
