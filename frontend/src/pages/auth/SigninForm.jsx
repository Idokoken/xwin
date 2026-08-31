import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { tablet } from "../../Responsive";
import brand from "../../assets/brand.png";
import { AppContext } from "@/context/AppContext";

const Wrapper = styled.div`
  // width: 100vw;
  // height: 100vh;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // font-family: "Poppins", sans-serif;
  // background-color: #000000;

  .head {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }

  img {
    border: 2px solid black;
    border-radius: 50%;
  }
  label,
  h3 {
    font-weight: 600;
    color: white;
  }
  input {
    border-radius: 20px;
  }
  button {
    width: 100%;
    border-radius: 20px;
  }
`;

function SigninForm() {
  const { loginUser } = useContext(AppContext);
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    const userData = { email, password };
    loginUser({ userData, navigate });
    console.log(userData);
  };
  return (
    <Wrapper>
      <div className="content">
        <div className="head">
          <img src={brand} alt="brand" width="50" height="50" />
          <h3 className="my-2">Login</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="my-2">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="enter email"
            />
          </div>
          <div className="form-group">
            <label className="my-2">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="enter password"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary mt-5">Submit</button>
          </div>
        </form>

        {/* <p className="my-3">
          Not yet a member?{" "}
          <Link to="/register" style={{ textDecoration: "none" }}>
            <span style={{ fontStyle: "italic", color: "yellow" }}>
              register
            </span>
          </Link>
        </p> */}
      </div>
    </Wrapper>
  );
}

export default SigninForm;
