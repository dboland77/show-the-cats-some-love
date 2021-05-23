import React, { useEffect } from "react";
import axios from "axios";

const apiUrl = "https://api.thecatapi.com/v1/votes";
//const apiUploadUrl = "https://api.thecatapi.com/v1/images/upload";
//const apifavouriteUrl = "https://api.thecatapi.com/v1/favourites";
const apiVoteUrl = 'https://api.thecatapi.com/v1/votes'


const returnHeaders = () => {
  return (
      axios.defaults.headers = {
          'CONTENT-TYPE': 'APPLICATION/JSON',
          'X-API-KEY': process.env.REACT_APP_API_KEY
          
      }
  )
}

export function isNice(image_id, sub_id, yes_or_no){
  returnHeaders();

  const cat = {
      "image_id": image_id,
      "sub_id": sub_id,
      "value": yes_or_no
    };

  axios.post(apiVoteUrl, cat);
}

const ApiResult = (props) => {
  useEffect(() => {
    returnHeaders();
    return () => {
      //cleanup
    };
  }, []);

  const onClickYes = (event) => {
    event.preventDefault();

    const cat = {
      image_id: props.image_id,
      sub_id: props.sub_id,
      value: 1,
    };

    axios.post(apiUrl, cat).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  const onClickNo = (event) => {
    event.preventDefault();

    const cat = {
      image_id: props.image_id,
      sub_id: props.sub_id,
      value: 0,
    };

    axios.post(apiUrl, cat).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  return (
    <div>
      <button onClick={() => onClickYes}>Yes</button>
      <button onClick={() => onClickNo}>No</button>
    </div>
  );
};

export default ApiResult;
