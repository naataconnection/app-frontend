import { API_ENDPOINT } from "../../config";

export const FETCH_SCHEDULE_SUCCESS = "FETCH_SCHEDULE_SUCCESS" ;
export const FETCH_SCHEDULE_ERROR = "FETCH_SCHEDULE_ERROR";
export const SET_SCHEDULE_LOADING = "SET_SCHEDULE_LOADING";


export const getSchedule = (token) => {
    return (dispatch) => {
        dispatch({type:SET_SCHEDULE_LOADING});
        fetch(API_ENDPOINT+"/user-schedule/", {
            "method" : "POST",
            "headers":{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization" : 'Token '+token,
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log("user-schedule:",data);
            dispatch({
                type: FETCH_SCHEDULE_SUCCESS,
                payload: data
            })            
        })
        .catch(error => {
            console.log(error)
            dispatch({
                type: FETCH_SCHEDULE_ERROR,
                payload: error.message
            }) 
        })
    }
}