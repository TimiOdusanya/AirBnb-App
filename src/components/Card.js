import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      {/* <img
        src={`../images/${props.coverImg}`}
        className="card--image"
        alt="card_img"
      /> */}
      <Carousel fade>
        <Carousel.Item>
          <img
            className="card--image"
            src={`../images/${props.coverImg}`}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="card--image"
            src={`../images/${props.coverImg}`}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="card--image"
            src={`../images/${props.coverImg}`}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" alt="star_img" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

{
  /* <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100 card--image"
      src={`../images/${props.coverImg}`}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 card--image"
      src={`../images/${props.coverImg}`}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 card--image"
      src={`../images/${props.coverImg}`}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>; */
}
