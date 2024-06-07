import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/Quotes.css";

import { quotesData } from "../helpers/Data";
function Quotes() {
  return (
    <div className="carsel">
      <h3>Inspiring Quotes</h3>
      <Carousel data-bs-theme="dark">
        {quotesData.map((quote, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block"
              src={quote.imgSrc}
              alt={`Slide ${index + 1}`}
            />
            <Carousel.Caption>
              <p>{quote.quote}</p>
              <h5>By {quote.author}</h5>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Quotes;
