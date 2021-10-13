import { API_ENDPOINT } from "../../config";

export const FETCH_FAQS_SUCCESS = 'FETCH_FAQS_SUCCESS';
export const FETCH_FAQS_FAILURE = 'FETCH_FAQS_FAILURE';
export const SET_FAQS_LOADING = 'SET_FAQS_LOADING';

export const fetchFaqs = () => {
    return (dispatch) => {
        dispatch({type:SET_FAQS_LOADING});
        fetch(API_ENDPOINT+"/faq/", {
            "method" : "GET"
        })
        // .then(res => {
        //     if (res.ok) {
        //         console.log("there is no error")
        //     }
        // })
        .then(res => res.json())
        .then(data => {
            const faqs = data
            dispatch({
                type : FETCH_FAQS_SUCCESS,
                payload : faqs
            })
            // console.log("it came to data")
        })
        .catch(error => {
            dispatch({
                type : FETCH_FAQS_FAILURE,
                payload : error.message
            })
            // console.log("it came to error")
        })
    }
}
