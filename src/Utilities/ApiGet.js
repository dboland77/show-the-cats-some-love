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

    // GET THE LIST OF CATS 
    return axios.get(apiListUrl)

    // returns 
    // {
    //     created_at: "2018-12-06T18:19:12.000Z",
    //     id: 4124,
    //     image: {id: "bod", url: "https://cdn2.thecatapi.com/images/bod.jpg"},
    //     image_id: "bod",
    //     sub_id: "imfm4j",
    //     user_id: "imfm4j"
    // }
}

// Post Api for Voting
export function isCute(image_id, sub_id, yes_or_no){
    returnHeaders();

    const cat = {
        "image_id": image_id,
        "sub_id": sub_id,
        "value": yes_or_no
      };

    axios.post(apiVoteUrl, cat);
}

export function getVotes() {
    returnHeaders();

    // GET THE VOTES 
    /* Result includes following parameters: (example)
        {
            "country_code": null,
            "created_at": "2018-12-06T18:54:11.000Z",
            "id": 47294,
            "image_id": "9ccXTANkb",
            "sub_id": "imfm4j",
            "value": 1
         },
         We need to use value for vote (1 or 0) and image_id and sub_id to map with the testcats[] list
    */
    return axios.get(apiVoteUrl)
}