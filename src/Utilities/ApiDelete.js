import React, { useEffect } from "react";
import axios from "axios";

const apiUnfavouriteUrl = "https://api.thecatapi.com/v1/favourites/{favourite_id}";

const ApiResult = (props) => {
  useEffect(() => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      "x-api-key": process.env.REACT_APP_API_KEY,
    };
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
