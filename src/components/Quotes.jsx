import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/Quotes.css";

function Quotes() {
  return (
    <div className="carsel">
      <h3>Inspiring Quotes</h3>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block"
            src="https://www.livemint.com/lm-img/img/2023/11/24/600x338/Philanthropy-DonorsChoose-0_1692937240314_1700805083732.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <p>
              " Programming is a skill that can be learned and practiced, but
              it’s also an art form in itself."
            </p>
            <h5>By Bill Gates </h5>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <p>
              “Not everyone needs to be a programmer, but everyone can benefit
              from learning to code”
            </p>
            <h5>By Elon Musk</h5>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src="https://pbs.twimg.com/profile_images/1239374679200038912/rrDXNAvU_400x400.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <p>
              "Programming isn't about what you know; it's about what you can
              figure out.”
            </p>
            <h5>By Chris Pine</h5>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src="https://news.harvard.edu/wp-content/uploads/2017/03/mark-zuckerberg-headshot-11.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <p>
              "The only way to learn a new programming language is by writing
              programs in it." -
            </p>
            <h5>By Marc Zuckerberg</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Quotes;
