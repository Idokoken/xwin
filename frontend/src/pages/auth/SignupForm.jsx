import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { tablet } from "../../Responsive";
import { Link } from "react-router-dom";
import brand from "../../assets/brand.png";
import { AppContext } from "@/context/AppContext";

const Wrapper = styled.div`
  // min-height: 60vh;
  // display: flex;
  // justify-content: center;
  // align-items: center;
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

function SignupForm() {
  const { registerUser } = useContext(AppContext);

  const initialValues = {
    username: "",
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
    const { username, email, password } = values;
    const currentUser = { username, email, password };
    registerUser(currentUser);
    console.log(currentUser);
  };

  // useEffect(() => {
  //   if (user) {
  //     navigate("/");
  //   }
  // }, [user, navigate]);

  return (
    <Wrapper>
      <div className="content">
        <div className="head">
          <img src={brand} alt="brand" width="50" height="50" />
          <h3 className="my-2">Register</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="my-2">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={values.username}
              onChange={handleChange}
              placeholder="enter username"
            />
          </div>
          <div className="form-group">
            <label className="my-2">Email</label>
            <input
              type="email"
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
          Already a member?{" "}
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <span style={{ fontStyle: "italic", color: "yellow" }}>login</span>
          </Link>
        </p> */}
      </div>
    </Wrapper>
  );
}

export default SignupForm;
