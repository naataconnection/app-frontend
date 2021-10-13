const User =  {
    t_id: '',
    username: '',
    avatar: '',
    first_name: '',
    last_name: "",
    email_id: "",
    number: "",
    registered_events: [],
    bookmarked_events: [],
};

const Module = {
    m_id: '',
    creation_date: '',
    name: '',
    core_member: [
        {name:'',email_id:'',mobile:''}
    ],
};

const Events = {
    e_id: '',
    event_name: '',
    event_status: '',
    details: [
        {image_url:'', desc:'', start_time:null, end_time:null, location:{name:'',coordinates:[]}, module:'', period:'', tag:''}
    ],
    liked_by = ['u1','u2']
}

const Filters = {

}
const Sponsors = {
    s_id: '',
    name: '',
    logo_url: '',
    webiste_url: ''
}
const Entertainment = {

}
const Schedule = {
    sh_id: '',
    schedule_type: '{day1,day2,day3,myschedule}',
    events: [
        {e_id: ''}
    ],
}
const FAQs = {
    id: '',
    questions: '',
    answer: ''
}


