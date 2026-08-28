import React from "react";
// import "./auth.css";
import SignupForm from "./SignupForm";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import ForgotpasswordForm from "./ForgotpasswordForm";
import SigninForm from "./SigninForm";
// import styled from "styled-components";
// import { tablet } from "../../Responsive";

// const Wrapper = styled.div`
//   .authContainer {
//     background-image: url("/images/auth_bg.png");
//     height: 100vh;
//     width: 100%;
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center;
//   }
// `;

function Auth() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="relative h-screen authContainer">
      <div className="absolute top-0  right-0 left-0 bottom-0 bg-opacity-50">
        <div
          className="bgBlure absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
           flex flex-col justify-center items-center
           h-[30rem] w-[30rem] rounded-md z-50
           bg-black/50 shadow-2xl shadow-white"
        >
          <h1 className="text-6xl font-bold pb-9">Xwin Trading</h1>
          {location.pathname === "/signup" ? (
            <section>
              <SignupForm />
              <div className="flex items-center justify-center">
                <span>don't have an account ?</span>
                <Button variant="ghost" onClick={() => navigate("/signin")}>
                  Signin
                </Button>
              </div>
            </section>
          ) : location.pathname == "/forgot-password" ? (
            <section>
              <ForgotpasswordForm />
              <div className="flex items-center justify-center">
                <span>back to login ? </span>
                <Button variant="ghost" onClick={() => navigate("/signin")}>
                  signin
                </Button>
              </div>
            </section>
          ) : (
            <section>
              <SigninForm />
              <div className="flex items-center justify-center">
                <span>already have an account ?</span>
                <Button variant="ghost" onClick={() => navigate("/signup")}>
                  Signup
                </Button>
              </div>
              <div className="">
                <Button
                  className="py-5 w-full"
                  variant="outline"
                  onClick={() => navigate("/forgot-password")}
                >
                  forgot Password
                </Button>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;
