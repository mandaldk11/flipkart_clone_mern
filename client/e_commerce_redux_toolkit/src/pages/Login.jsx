import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let { email, password } = user;
      // Validation
      if (!email) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }

      if (!password) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }

      if (!email || !password) {
        return;
      }

      const response = await axios.post("http://localhost:8080/users/login", {
        email,
        password,
      });
      const token = response.data.accessToken;

      alert("login successfully...");
      email = "";
      password = "";
      navigate("/");
      // window.location.reload();
      localStorage.setItem("token", token);
    } catch (error) {
      alert("invalid credentials...");
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="mainContainer  my-4">
        <div className="item1">
          <b style={{ fontSize: "24px", fontWeight: "540px" }}>Login</b>
          <p className="paraItem1">
            <span>Get access to your Orders, Wishlist and Recommendations</span>
          </p>
        </div>
        <div className="item2">
          <div className="item2Div">
            <div>
              <form onSubmit={handleSubmit}>
                <div className="item2Div2 my-4">
                  <label htmlFor="email">
                    <span>Enter Email</span>
                  </label>
                  <input
                    autoComplete="off"
                    type="text"
                    className="emailInput"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                  />
                  {emailError ? (
                    <b style={{ color: "red" }}>email is required *</b>
                  ) : (
                    ""
                  )}
                </div>
                <div className="item2Div2">
                  <label htmlFor="paaword">
                    <span>Enter Password</span>
                  </label>
                  <input
                    autoComplete="off"
                    type="text"
                    className="emailInput"
                    id="password"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                  />
                  {passwordError ? (
                    <b style={{ color: "red" }}>password is required *</b>
                  ) : (
                    ""
                  )}
                </div>
                <div className="tnc">
                  By continuing, you agree to Flipkart's{" "}
                  <a target="_blank" href="/pages/terms">
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a target="_blank" href="/pages/privacypolicy">
                    Privacy Policy
                  </a>
                  .
                </div>
                <div className="my-2">
                  <button className="loginBtn" type="submit">
                    LOGIN
                  </button>
                </div>
                <center>
                  <b>OR</b>
                </center>
                <div className="my-2">
                  <button className="loginBtn">Request OTP</button>
                </div>
                <div style={{ marginTop: "4.7rem" }}>
                  <a href="/signup">
                    <center> New to Flipkart? Create an account</center>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
