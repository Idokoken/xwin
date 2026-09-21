import React from "react";
import { tablet } from "../Responsive";
import styled from "styled-components";

const Wrapper = styled.div`
  background: rgba(42, 41, 50, 1);
  color: white;

  .offers {
    display: grid;
    grid-template-columns: 45% 45%;
    gap: 50px;
    align-items: center;
    justify-content: center;
    background: rgba(42, 41, 50, 1);
    margin: 50px 0;
  }
  .offer {
    background: rgba(42, 41, 50, 1);
    color: white;
    padding: 20px;
    box-shadow:
      -3px -3px 5px 3px rgba(16, 30, 186, 0.2),
      3px 3px 15px 3px #ffffff;
    border-radius: 10px;
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
  return (
    <Wrapper>
      <h2>Our Offers</h2>
      <div className="offers py-15" px-5>
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
