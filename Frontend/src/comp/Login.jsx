import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginAPI } from "../store/auth/auth.actions";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isAuth } = useSelector((state) => state.auth);
  const [loginCreds, setLoginCreds] = useState({});
  const navigate = useNavigate();
  const Saved_data = JSON.parse(localStorage.getItem("userData"));
  // console.log(Saved_data.Email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
    dispatch(loginAPI(loginCreds));
  };
  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  useEffect(() => {
    if (
      isAuth &&
      Saved_data.Email === loginCreds.email &&
      Saved_data.password === loginCreds.password
    ) {
      return navigate("/timer", { replace: true });
    }
  }, [isAuth, Saved_data, loginCreds, location, navigate]);

  return (
    <div className="login">
      <div className="loginbackground">
        <Text className="text1">Log in to your account</Text>
        <Text className="text2">Let's get tracking!</Text>
        <div className="loginmainbox">
          <div className="loginbox2">
            <Flex className="buttons">
              <Link className="anchor1" to="/login">
                <Flex>
                  <img
                    src="https://img.icons8.com/fluency/30/000000/google-logo.png"
                    alt="img"
                  />
                  <button> Signup via Google</button>
                </Flex>{" "}
              </Link>
              <Link className="anchor1" to="/login">
                {" "}
                <Flex>
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/000000/mac-client.png"
                    alt="img"
                  />
                  <button>Signup via Apple</button>
                </Flex>{" "}
              </Link>
            </Flex>
          </div>
          <br />
          <br />
          <div className="loginbox3">
            <form onSubmit={handleSubmit}>
              <label>Email</label>
              <br />
              <input
                className="logininput"
                type="email"
                name="email"
                placeholder="Email"
                onChange={hanldeChange}
                value={loginCreds.email}
              />
              {/* {errors.email && <span>This field is required</span>} */}
              <br />
              <br />
              <label>Password</label>
              <br />
              <input
                className="logininput"
                type="password"
                name="password"
                placeholder="Password"
                onChange={hanldeChange}
                value={loginCreds.password}
              />
              {/* {errors.password && <span>This field is required</span>} */}
              <br />
              <br />
              <div style={{ textAlign: "end", paddingRight: "2rem" }}>
                <Link to="/signup">Forgot Password?</Link>
              </div>
              <br />
              <br />
              <button className="loginbutton">Login</button>
            </form>
          </div>
        </div>
        <br />
        <br />
        <div className="loginbox4">
          <p>Don't have an account ?</p>
          <br />
          <Link to="/signup">
            <button className="signupforfree">Signup for free</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
