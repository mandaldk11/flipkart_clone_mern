import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
function SignUp() {
  const navigate = useNavigate();
  const [usernameError, setUsernameError] = useState(false);
  const [phoneError, setPhoneerror] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let { username, email, phone, password } = user;
      // Validation
      if (!username) {
        setUsernameError(true);
      } else {
        setUsernameError(false);
      }
      if (!email) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
      if (!phone) {
        setPhoneerror(true);
      } else {
        setPhoneerror(false);
      }

      if (!password) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }

      if (!username || !email || !phone || !password) {
        setError(true);
        return;
      }
      await axios.post("http://localhost:8080/users/register", {
        username,
        email,
        phone,
        password,
      });

      alert("register successfully...");

      user.username = "";
      user.email = "";
      user.phone = "";
      user.password = "";
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="mainContainer  my-4">
        <div className="item1">
          <b style={{ fontSize: "24px", fontWeight: "580px" }}>
            Looks like you're new here!
          </b>
          <p className="paraItem1">
            <span>
              sign up with your
              <br /> Mobile & email to get started
            </span>
          </p>
        </div>
        <div className="item2">
          <div className="item2Div">
            <div>
              <form onSubmit={handleSubmit}>
                {/* user name */}
                <div className="item2Div2">
                  <label htmlFor="firstname">
                    <span>Enter Username</span>
                  </label>
                  <input
                    autoComplete="off"
                    type="text"
                    className="emailInput"
                    id="username"
                    name="username"
                    value={user.username}
                    onChange={handleInput}
                  />
                  {usernameError ? (
                    <b style={{ color: "red" }}>username is required *</b>
                  ) : (
                    ""
                  )}
                </div>

                {/* email */}
                <div className="item2Div2">
                  <label htmlFor="email">
                    <span>Enter Email</span>
                  </label>
                  <input
                    autoComplete="off"
                    type="email"
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
                {/* phone */}
                <div className="item2Div2">
                  <label htmlFor="phone">
                    <span>Enter Phone</span>
                  </label>
                  <input
                    autoComplete="off"
                    type="text"
                    className="emailInput"
                    id="phone"
                    name="phone"
                    value={user.phone}
                    onChange={handleInput}
                  />
                  {phoneError ? (
                    <b style={{ color: "red" }}>phone no. is required *</b>
                  ) : (
                    ""
                  )}
                </div>
                {/* password */}
                <div className="item2Div2">
                  <label htmlFor="paaword">
                    <span>Enter Password</span>
                  </label>
                  <input
                    autoComplete="off"
                    type="text"
                    className="emailInput"
                    id="password"
                    value={user.password}
                    onChange={handleInput}
                    name="password"
                  />
                  {passwordError ? (
                    <b style={{ color: "red" }}>password is required *</b>
                  ) : (
                    ""
                  )}
                </div>

                <div className="my-2">
                  <button className="loginBtn" type="submit">
                    Continue
                  </button>
                </div>
                <div>
                  <Link to="/login">
                    <center> Existing User? Log In</center>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
