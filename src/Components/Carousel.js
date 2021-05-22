import React, { useState } from "react";
import { Carousel, CarouselItem, Button } from "reactstrap";
import Graph from "./Graph";

import * as API from "../Utilities/ApiResult";

const style = {
  position: "absolute",
  bottom: "40px",
  voteUpLeft: "54%",
  voteDownLeft: "40%",
};

const CatCarousel = (props) => {
  const [activeIndex, setactiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(true);
  };

  const next = () => {
    setTimeout(() => {
      if (animating) return;
      const nextIndex =
        activeIndex === props.list.length - 1 ? 0 : activeIndex + 1;
      setactiveIndex(nextIndex);
    }, 1000);
  };

  const previous = () => {
    setTimeout(() => {
      if (animating) return;
      const nextIndex =
        activeIndex === 0 ? props.list.length - 1 : activeIndex - 1;
      setactiveIndex(nextIndex);
    }, 1000);
  };

  // const goToIndex = (newIndex) => {
  //     if (animating) return;
  //     setactiveIndex(newIndex);
  // }

  const showVote = (voteName, voteValue) => {
    if (voteName === voteValue) {
      return "focus";
    }
  };

  const updateCute = (catValue, value) => {
    if (catValue !== value) {
      if (value === 1) {
        props.tally[1] = props.tally[1] + 1;
        props.tally[0] = props.tally[0] - 1;
      } else if (value === 0) {
        props.tally[0] = props.tally[0] + 1;
        props.tally[1] = props.tally[1] - 1;
      }
    }
  };

  let individualCat = -1;
  const slides = props.list.map((cat) => {
    individualCat++;
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={cat.id}
        onExiting={onExiting}
        onExited={onExited}
      >
        <img src={cat.image.url} alt={cat.image.id} style={{ width: "100%" }} />

        <Button
          type="button"
          color={"danger"}
          data-tag={individualCat}
          onClick={(event) => {
            API.isCute(cat.image.id, cat.sub_id, "0");
            updateCute(cat.value, 0);
            props.updateVoteCount(event.target.getAttribute("data-tag"), 0);
            next();
          }}
          style={{
            position: style.position,
            left: style.voteDownLeft,
            bottom: style.bottom,
          }}
          className={showVote(cat.value, 0)}
        >
          Soggy
        </Button>

        <Button
          type="button"
          color={"success"}
          data-tag={individualCat}
          onClick={(event) => {
            API.isCute(cat.image.id, cat.sub_id, "1");
            updateCute(cat.value, 1);
            props.updateVoteCount(event.target.getAttribute("data-tag"), 1);
            next();
          }}
          style={{
            position: style.position,
            left: style.voteUpLeft,
            bottom: style.bottom,
          }}
          className={showVote(cat.value, 1)}
        >
          Moggy
        </Button>
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {`.custom-tag {
                        max-width: 100%;
                        height: 500px;
                        background: black;
                        }`}
      </style>
      <Graph tally={props.tally} />
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval={false}
      >
        {slides}
      </Carousel>
    </div>
  );
};

export default CatCarousel;
