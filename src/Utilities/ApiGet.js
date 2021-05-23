import axios from 'axios';

const apiListUrl = 'https://api.thecatapi.com/v1/images'
const apifavouriteUrl = 'https://api.thecatapi.com/v1/favourites'
const apiVoteUrl = 'https://api.thecatapi.com/v1/votes'



const returnHeaders = () => {
    return (
        axios.defaults.headers = {
            'CONTENT-TYPE': 'APPLICATION/JSON',
            'X-API-KEY': process.env.REACT_APP_API_KEY
            
        }
    )
}

export function  getCats(){
    returnHeaders();
    return axios.get(apiListUrl)
}


export function getVotes() {
    returnHeaders();
    return axios.get(apiVoteUrl)
}

export function getFavourite() {
    returnHeaders(); 
    return axios.get(apifavouriteUrl)
}