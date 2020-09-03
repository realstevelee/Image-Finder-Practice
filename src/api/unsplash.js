import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID TYcT4uNPf5MAA_lik14T_BOuHWfVOFsNY2fu4feP15Q'
    }
})