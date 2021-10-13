export const SET_EVENTS = 'SET_EVENTS';

export const setEvents = () => {
    return async (dispatch) => {
        /* Change the hostname according to your local network */
        const response = await fetch("http://10.3.2.56:8000/api/events/", {
                                    "method": "GET"
                                });
        
        if(response.ok){
            const resData = await response.json();
            const data = [];
            for(const key in resData){
                data.push(resData[key]);
            }
            dispatch({
                type: SET_EVENTS,
                payload: data
            })
        }
        else{
            const msg = 'An error occurred. Status Code: ' + response.status;
            throw new Error(msg);
        }
    }
};