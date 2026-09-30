import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";

import SliderModule from "react-slick";
const Slider = SliderModule.default || SliderModule;

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .img-container {
    height: 150px;
    width: 150px;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  h1 {
    max-width: 650px;
    font-size: 35px;
    line-height: 1.1;
    margin-bottom: 20px;
    font-weight: 700;
    text-align: center;
  }
  h2 {
    max-width: 650px;
    font-size: 35px;
    line-height: 1.1;
    margin-bottom: 20px;
    font-weight: 700;
  }
  .desc {
  }
  .content p {
    max-width: 550px;
    font-size: 20px;
    line-height: 1.6;
    margin-bottom: 30px;
    text-align: center;
    font-style: italic;
  }

  .star {
    color: #e6cb36;
  }
`;

function OurClients() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const slides = [
    {
      id: 1,
      image: hero1,
      name: "Carlos slim",
      message:
        "From established global brands to emerging companies, explore a wide range of stocks, stay informed" +
        "on market movements, and build a portfolio that matches your goals",
      profession: "Investment Banker",
    },
    {
      id: 2,
      image: hero2,
      name: "Tim Haword Kin",
      message:
        "Make your money more than something you save—use it to explore investment opportunities across stocks" +
        ", crypto, and more",
      profession: "Machanical Engineer",
    },
    {
      id: 3,
      image: hero3,
      name: "Amarach Pepertua",
      message:
        "Explore thousands of investment opportunities and find assets that align with your financial goals",
      profession: "",
    },
  ];

  return (
    <Wrapper>
      <section className="">
        <div className="head flex flex-col justify-center items-center">
          <h1 className="">What Our Clients Think</h1>
          <p className="desc text-center mb-5 mx-5">
            Hear from the companies we work with. Discover how our flexible
            corporate rental solutions help them simplify relocations, support
            staff, and secure reliable short- and long-term housing with ease
          </p>
        </div>
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="">
              <div className="content">
                <div className="img-container">
                  <img src={slide.image} alt="client" />
                </div>
                <div className="stars my-4">
                  <StarIcon className="star" />
                  <StarIcon className="star" />
                  <StarIcon className="star" />
                  <StarIcon className="star" />
                  <StarIcon className="star" />
                </div>
                <p className="mx-5">{slide.message}</p>
                <h2>{slide.name}</h2>
                <h3>{slide.profession}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </Wrapper>
  );
}

export default OurClients;
