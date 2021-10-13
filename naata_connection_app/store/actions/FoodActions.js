import { API_ENDPOINT } from "../../config";

export const FETCH_FOOD_SUCCESS = 'FETCH_FOOD_SUCCESS';
export const FETCH_FOOD_FAILURE = "FETCH_FOOD_FAILURE";
export const SET_FOOD_LOADING = "SET_FOOD_LOADING";

export const fetchFood = () => {
    return (dispatch) => {
        dispatch({type:SET_FOOD_LOADING});
        fetch(API_ENDPOINT+"/food", {
            "method" : "GET"
        })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type : FETCH_FOOD_SUCCESS,
                payload : data
            })            
        })
        .catch(error => {
            // console.log(error)
            dispatch({
                type : FETCH_FOOD_FAILURE,
                payload : error.message
            })
        })
    }
}
