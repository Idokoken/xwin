import React, { useState, useEffect } from "react";
import { tablet } from "../Responsive";
import styled from "styled-components";

const Wrapper = styled.div`
  background: rgba(42, 41, 50, 1);
  color: white;
  padding-top: 20px;

  .offers {
    display: grid;
    grid-template-columns: 45% 45%;
    gap: 50px;
    align-items: center;
    justify-content: center;
    background: rgba(42, 41, 50, 1);
    margin: 10px 0 50px 0;
    overflow: hidden;
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
    align-self: center;
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
              <i className="fa-brands fa-tiktok"></i>
            </span>
          </div>
          <h3 className="my-5">Enhanced Security</h3>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium deserunt illo laborum repellendus facere id laudantium
            explicabo est excepturi, eius amet quas non commodi ut
            exercitationem ducimus repudiandae, inventore deleniti?
          </p>
        </div>

        <div className="offer">
          <div className="icon-container">
            <span className="my-20">
              <i className="fa-brands fa-tiktok"></i>
            </span>
          </div>
          <h3 className="my-5">Enhanced Security</h3>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium deserunt illo laborum repellendus facere id laudantium
            explicabo est excepturi, eius amet quas non commodi ut
            exercitationem ducimus repudiandae, inventore deleniti?
          </p>
        </div>

        <div className="offer">
          <div className="icon-container">
            <span className="my-20">
              <i className="fa-brands fa-tiktok"></i>
            </span>
          </div>
          <h3 className="my-5">Enhanced Security</h3>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium deserunt illo laborum repellendus facere id laudantium
            explicabo est excepturi, eius amet quas non commodi ut
            exercitationem ducimus repudiandae, inventore deleniti?
          </p>
        </div>

        <div className="offer">
          <div className="icon-container">
            <span className="my-20">
              <i className="fa-brands fa-tiktok"></i>
            </span>
          </div>
          <h3 className="my-5">Enhanced Security</h3>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium deserunt illo laborum repellendus facere id laudantium
            explicabo est excepturi, eius amet quas non commodi ut
            exercitationem ducimus repudiandae, inventore deleniti?
          </p>
        </div>

        <div className="offer">
          <div className="icon-container">
            <span className="my-20">
              <i className="fa-brands fa-tiktok"></i>
            </span>
          </div>
          <h3 className="my-5">Enhanced Security</h3>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium deserunt illo laborum repellendus facere id laudantium
            explicabo est excepturi, eius amet quas non commodi ut
            exercitationem ducimus repudiandae, inventore deleniti?
          </p>
        </div>

        <div className="offer">
          <div className="icon-container">
            <span className="my-20">
              <i className="fa-brands fa-tiktok"></i>
            </span>
          </div>
          <h3 className="my-5">Enhanced Security</h3>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium deserunt illo laborum repellendus facere id laudantium
            explicabo est excepturi, eius amet quas non commodi ut
            exercitationem ducimus repudiandae, inventore deleniti?
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default OurOffer;
