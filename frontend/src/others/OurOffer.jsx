import React, { useState, useEffect } from "react";
import { tablet } from "../Responsive";
import styled from "styled-components";
import SecurityIcon from "@mui/icons-material/Security";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const Wrapper = styled.div`
  background: rgba(42, 41, 50, 1);
  color: white;
  padding-top: 20px;

  .offers {
    display: grid;
    grid-template-columns: 45% 45%;
    gap: 20px;
    align-items: center;
    justify-content: center;
    background: rgba(42, 41, 50, 1);
    margin: 10px 0 50px 0;
    overflow: hidden;
    ${tablet({ gap: "50px" })}
  }
  .offer {
    background: rgba(42, 41, 50, 1);
    color: white;
    padding: 20px;
    box-shadow:
      -3px -3px 5px 3px rgba(16, 30, 186, 0.2),
      3px 3px 15px 3px #ffffff;
    border-radius: 10px;

    // opacity: 0;
    // transform: translateY(100px);

    opacity: 0;
    transform: translateY(100px);

    /* Animation */
    transition: all 1.4s ease;
  }
  .offer.show {
    opacity: 1;
    transform: translateY(0);
  }

  .offer:nth-child(2) {
    transition-delay: 0.3s;
  }
  .offer:nth-child(3) {
    transition-delay: 0.6s;
  }
  .offer:nth-child(4) {
    transition-delay: 0.9s;
  }

  .icon-container {
    margin: 20px 0;
    align-self: center;
  }

  span {
    background: var(--primary-color);
    padding: 20px;
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }
  p {
    font-size: 14px;
    ${tablet({ fontSize: "18px" })}
  }
`;

function OurOffer() {
  useEffect(() => {
    const offers = document.querySelectorAll(".offer");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    offers.forEach((offer) => observer.observe(offer));

    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper>
      <h2 className="text-4xl text-center mt-10">Our Offers</h2>
      <div className="offers py-15 px-5">
        <div className="offer">
          <div className="icon-container">
            <span className="my-20">
              <SecurityIcon />
            </span>
          </div>
          <h3 className="my-5">Enhanced Security</h3>
          <p className="">
            Advanced security measures help protect your account, personal
            information, and digital assets.
          </p>
        </div>

        <div className="offer">
          <div className="icon-container">
            <span className="my-20">
              <ManageHistoryIcon />
            </span>
          </div>
          <h3 className="my-5">Easy Portfolio Management</h3>
          <p className="">
            Track and manage your investments conveniently from one simple
            dashboard.
          </p>
        </div>

        <div className="offer">
          <div className="icon-container">
            <span className="my-20">
              <ReceiptIcon />
            </span>
          </div>
          <h3 className="my-5">Fast & Reliable Transactions</h3>
          <p className="">
            Enjoy a smooth and convenient process for deposits, investments, and
            withdrawals.
          </p>
        </div>

        <div className="offer">
          <div className="icon-container">
            <span className="my-20">
              <AddBusinessIcon />
            </span>
          </div>
          <h3 className="my-5">Real-Time Market Insights</h3>
          <p className="">
            Access up-to-date cryptocurrency prices, market trends, and relevant
            market information.
          </p>
        </div>

        <div className="offer">
          <div className="icon-container">
            <span className="my-20">
              <DynamicFeedIcon />
            </span>
          </div>
          <h3 className="my-5">Multiple Investment Options</h3>
          <p className="">
            Explore a range of cryptocurrency and investment opportunities based
            on your goals.
          </p>
        </div>

        <div className="offer">
          <div className="icon-container">
            <span className="my-20">
              <SupportAgentIcon />
            </span>
          </div>
          <h3 className="my-5">24/7 Customer Support</h3>
          <p className="">
            Get assistance whenever you need help with your account or
            platform-related questions
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default OurOffer;
