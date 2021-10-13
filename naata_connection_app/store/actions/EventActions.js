import { API_ENDPOINT } from "../../config";

export const SET_EVENTS = 'SET_EVENTS';
export const SET_ERROR= 'SET_ERROR';
export const LIKE_EVENT = 'LIKE_EVENT';
export const UNLIKE_EVENT = 'UNLIKE_EVENT';
export const REVIEW_EVENT = 'REVIEW_EVENT';
export const UNSET_LOADED = 'UNSET_LOADED';

export const setEvents = (token) => {
    return async (dispatch) => {
        try{
            dispatch({type:UNSET_LOADED})
            const response = await fetch(API_ENDPOINT+"/events/", {
                                        "method": "POST",
                                        "headers":{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization" : 'Token '+token,
            }
                                    });
            
            if(response.ok){
                const resData = await response.json();
                const data = [];
                for(const key in resData){
                    data.push(resData[key]);
                }
                console.log(data);
                dispatch({
                    type: SET_EVENTS,
                    payload: data
                })
            }
            else{
                const msg = 'An error occurred. Status Code: ' + response.status;
                throw new Error(msg);
            }
        }catch(e){
            dispatch({
                    type:SET_ERROR,
                    payload:'Uh Oh! Something went Wrong.'
                })
            console.log("Could not load events");
        }

    }
};

export const likeEvent = (eid,token,cb) =>{
    return async (dispatch)=>{
        try{
            const response = await fetch(API_ENDPOINT+"/like-event/",{ 
        "method":"POST",
        "body":JSON.stringify({e_id:eid}),
        "headers":{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization" : 'Token '+token,
        }
    })
        if(response.ok){
            const data = await response.json();
            if(data.detail === 'success'){
                cb('The Event has been bookmarked. You can view it under “My Events”.');
                 dispatch({
                type:LIKE_EVENT,
                payload:{eid:eid},
            });
            }else{
                console.log(data.detail);
            }
        }
    }catch(e){
        cb('Could not Bookmark this Event. Try Again.');
        console.log('Could not connect. ',e);
    }
    }
}

export const unlikeEvent = (eid,token) =>{
    return async (dispatch)=>{
        try{
            const response = await fetch(API_ENDPOINT+"/unlike-event/",{ 
        "method":"POST",
        "body":JSON.stringify({e_id:eid}),
        "headers":{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization" : 'Token '+token,
        }
    })
        if(response.ok){
            const data = await response.json();
            if(data.detail === 'success'){
                 dispatch({
                type:UNLIKE_EVENT,
                payload:{eid:eid},
            });
            }else{
                console.log(data.detail);
            }
        }
    }catch(e){
        console.log('Could not connect. ',e);
    }
    }
}

export const reviewEvent = (eid, rating, review, token) =>{
    return async (dispatch)=>{
        try{
            const response = await fetch(API_ENDPOINT+"/review-event/",{ 
        "method":"POST",
        "body":JSON.stringify({e_id:eid,
                            rating: rating,
                            review: review}),
        "headers":{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization" : 'Token '+token,
        }
    })
        if(response.ok){
            const data = await response.json();
            if(data.detail === 'success'){
                 dispatch({
                type:REVIEW_EVENT,
                payload:{eid:eid, review:data.review, rating:data.rating},
            });
            }else{
                console.log(data.detail);
            }
        }
    }catch(e){
        console.log('Could not connect. ',e);
    }
    }
}

export const showMessage = (getMsg,type) =>{

    var msg;
    if(type=='Bookmark'){
        
    }else{
        msg='You have successfully registered for this event. You can view it under “My Events” and “My Schedule”';
    }
    getMsg(msg);
}