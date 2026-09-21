import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import styled from "styled-components";

import SliderModule from "react-slick";
const Slider = SliderModule.default || SliderModule;

const Wrapper = styled.div`
  .hero-slider {
    width: 100%;
    overflow: hidden;
  }

  .hero-slide {
    position: relative;
    height: 550px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    display: flex !important;
    align-items: center;
  }

  .hero-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  .hero-content {
    position: relative;
    z-index: 2;

    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    color: white;
  }

  .hero-content h1 {
    max-width: 650px;
    font-size: 52px;
    line-height: 1.1;
    margin-bottom: 20px;
    font-weight: 700;
  }

  .hero-content p {
    max-width: 550px;
    font-size: 20px;
    line-height: 1.6;
    margin-bottom: 30px;
  }

  .hero-button {
    padding: 14px 28px;
    border: none;
    border-radius: 6px;
    background: var(--primary-color);
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }

  .hero-button:hover {
    background: #e85f00;
  }

  /* Mobile */
  @media (max-width: 768px) {
    .hero-slide {
      height: 450px;
    }

    .hero-content h1 {
      font-size: 36px;
    }

    .hero-content p {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    .hero-slide {
      height: 400px;
    }

    .hero-content h1 {
      font-size: 30px;
    }

    .hero-content p {
      font-size: 15px;
    }
  }
`;

function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const slides = [
    {
      id: 1,
      image: hero1,
      title: "5,000+ Stocks. Endless Possibilities",
      description:
        "From established global brands to emerging companies, explore a wide range of stocks, stay informed" +
        "on market movements, and build a portfolio that matches your goals",
      button: "Explore Investment",
    },
    {
      id: 2,
      image: hero2,
      title: "Put your Money to Work",
      description:
        "Make your money more than something you save—use it to explore investment opportunities across stocks" +
        ", crypto, and more",
      button: "Get Started",
    },
    {
      id: 3,
      image: hero3,
      title: "Turn Possibilities Into Progress",
      description:
        "Explore thousands of investment opportunities and find assets that align with your financial goals",
      button: "Discover More",
    },
  ];

  return (
    <Wrapper>
      <section className="hero-slider">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id}>
              <div
                className="hero-slide"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                {/* Overlay */}
                <div className="hero-overlay"></div>

                {/* Content */}
                <div className="hero-content">
                  <h1>{slide.title}</h1>

                  <p>{slide.description}</p>

                  <button className="hero-button">{slide.button}</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </Wrapper>
  );
}

export default Hero;
