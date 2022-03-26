import axios from 'axios';
const api = {
    userInfo : '/db/userInfo.json',
    images : '/db/images.json',
    comments : '/db/comments.json'
}

function Fetch_UserInfo() {
    return axios.get(api.userInfo);
}

function Fetch_Images () {
    return axios.get(api.images);
}

function Fetch_Comments () {
    return axios.get(api.comments);
}

export{
    Fetch_UserInfo,
    Fetch_Images,
    Fetch_Comments
}