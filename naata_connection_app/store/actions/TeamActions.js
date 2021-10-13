import { API_ENDPOINT } from "../../config";

export const FETCH_TEAM_SUCCESS = 'FETCH_TEAM_SUCCESS';
export const FETCH_TEAM_FAILURE = "FETCH_TEAM_FAILURE";
export const SET_TEAM_LOADING = "SET_TEAM_LOADING";

export const fetchTeam = () => {
    return (dispatch) => {
        dispatch({type:SET_TEAM_LOADING});
        fetch(API_ENDPOINT+"/team", {
            "method" : "GET"
        })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: FETCH_TEAM_SUCCESS,
                payload: data
            })            
        })
        .catch(error => {
            console.log(error)
            dispatch({
                type: FETCH_TEAM_FAILURE,
                payload: error.message
            })
        })
    }
}
