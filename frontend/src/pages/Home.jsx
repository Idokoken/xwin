import React from "react";
import Footer from "@/others/Footer";
import Hero from "@/others/Hero";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { tablet } from "@/Responsive";
import OurOffer from "@/others/OurOffer";
import Hero4 from "../assets/hero4.jpg";
import OurClients from "@/others/OurClients";

const Wrapper = styled.div`
  .invest h1 {
    font-size: 25px;
    font-weight: bold;
    line-spacing: 1;
    ${tablet({ fontSize: "35px" })}
  }
  .invest a {
    background: linear-gradient(90deg, #101eba 54.91%, #06070a 100%);
    color: white;
    padding: 12px 25px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 20px;
  }

  .discovery {
    margin: 10px 0;
    padding: 10px;
  }
  .discovery .content {
    background: url("/images/hero3.jpg");
    display: grid;
    grid-template-columns: 70% 20%;
    gap: 20px;
    border-radius: 20px;
    padding: 30px;
    ${tablet({ gridTemplateColumns: "45% 45%", padding: "30px" })}
  }
  .discovery a {
    background: var(--primary-color);
    color: white;
    padding: 12px 25px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 20px;
  }

  .global {
    display: grid;
    grid-template-columns: 25% 40% 25%;
    gap: 30px;
    justify-content: center;
    align-items: center;
  }
  .global .content {
    display: flex;
    flex-direction: column;
    gap: 2px;
    justify-content: center;
    align-items: center;
    ${tablet({ gap: "10px" })}
  }
  .global .content a {
    background: linear-gradient(90deg, #101eba 54.91%, #06070a 100%);
    color: white;
    padding: 6px 15px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    ${tablet({ fontSize: "20px", padding: "12px 25px" })}
  }
  .global h1 {
    width: 100%;
    font-size: 15px;
    font-weight: bold;
    line-spacing: 1;
    ${tablet({ fontSize: "35px" })}
  }
  .global p {
    width: 100%;
    font-size: 12px;
    ${tablet({ fontSize: "18px" })}
  }

  .global .one,
  .global .three {
    background: url("/images/bg2.png");
    background-size: contain;
    border-radius: 20px;
  }
`;

function Home() {
  return (
    <Wrapper>
      <section className="hero">
        <Hero />
      </section>

      <section className="invest flex flex-col items-center my-10 mx-5">
        <h1 className="text-xl m-4 text-center md:w-3/5">
          Buy, Sell, Grow, and Manage your digital assets with Ease
        </h1>
        <p className="lg:w-2/5 md:w-3/5 text-center">
          Discover <span className="font-extrabold">100+ digital</span> assets
          at your fingertips. Find your favourite crypto, explore new
          opportunities, and build your portfolio—all from one app.
        </p>
        <Link to="" className="my-8">
          Invest Now
        </Link>
      </section>

      <section className="offer">
        <OurOffer />
      </section>

      <section className="global my-10 mx-5">
        <div className="one w-full h-full"></div>

        <div className="content two w-full">
          <h1 className="text-xl m-4 text-center md:w-3/5 w-full">
            A Financial Experience Without Borders
          </h1>
          <p className="lg:w-2/5 md:w-3/5 text-center w-full">
            Connect to Global Markets and Manage your Money from one Powerful
            Platform
          </p>
          <Link to="" className="my-2 lg:my-8">
            Go Beyond Borders
          </Link>
        </div>

        <div className="three w-full h-full"></div>
      </section>

      <section className="discovery my-20 p-10">
        <div className="content">
          <div className="">
            <h2 className="text-xl md:text-4xl font-bold">
              Try XWin, Start with as Low as $50 USD
            </h2>
            <p className="my-10">
              Discover what your Money is capable of: Invest, grow, earn and
              move Money
            </p>
            <Link to="" className="my-10">
              Start Now
            </Link>
          </div>
          <div className=""></div>
        </div>
      </section>

      <section className="ourclients my-10">
        <OurClients />
      </section>

      <Footer />
    </Wrapper>
  );
}

export default Home;
