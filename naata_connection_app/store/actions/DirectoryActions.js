import { API_ENDPOINT } from "../../config";

export const FETCH_DIRECTORY_SUCCESS = "FETCH_DIRECTORY_SUCCESS";
export const FETCH_DIRECTORY_FAILURE = "FETCH_DIRECTORY_FAILURE";
export const SET_DIRECTORY_LOADING = "SET_LOADING";

export const fetchDirectory = () => {
    return (dispatch) => {
        dispatch({type:SET_DIRECTORY_LOADING});
        fetch(API_ENDPOINT+"/directory", {
            "method" : "GET"
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            dispatch({
                type: FETCH_DIRECTORY_SUCCESS,
                payload: data
            })            
        })
        .catch(error => {
            console.log(error)
            dispatch({
                type: FETCH_DIRECTORY_FAILURE,
                payload: error.message
            }) 
        })
    }
}
