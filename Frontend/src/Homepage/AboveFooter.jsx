import React from 'react'
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GoMail } from "react-icons/go";
import {useState} from "react";

const AboveFooter = () => {
    const [screen, setScreen] = useState(window.innerWidth);
    window.addEventListener("resize", () => {
      setScreen(window.innerWidth);
    });

  return (
    
    <div className={'style.snow'}
    style={{ color: "snow", padding: "3rem", backgroundColor: "#422a4c" }}
  >
    <div style={{ marginBottom: "2rem" }}>
      <h1 style={{ fontSize: "2rem", textAlign: "center" }}>
        Ready to get on{" "}
        <em style={{ color: "hotpink", textAlign: "center" }}>Track</em>?
      </h1>
    </div>

    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: screen > 800 ? "1fr 1fr" : "1fr",
          padding: screen > 1000 ? "2rem 5rem" : "2rem",
        }}
      >
        <div>
          <div
            style={
              screen > 800
                ? {
                    backgroundColor: "#2c1438",
                    color: "#fce4d8",
                    padding: "3rem",
                    width: "110%",
                    position: "relative",
                    fontSize: "1.2rem",
                  }
                : {
                    backgroundColor: "#2c1438",
                    color: "#fce4d8",
                    padding: "2rem",
                  }
            }
          >
            <h1
              style={{
                fontSize: "2.1rem",
                fontWeight: "bold",
                marginBottom: "2rem",
              }}
            >
              Sign up for free
            </h1>
            <p>
              All plans come with a free, 30-day trial of Toggl Track
              Premium—no credit card required. Upgrade at the end of the
              trial or continue using Track for free.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <button
                style={{
                  display: "flex",
                  padding: "0.75rem 1.5rem",
                  color: "black",
                  backgroundColor: "snow",
                  borderRadius: "25px",
                  margin: "1rem 0",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <span>
                  <FcGoogle
                    style={{ fontSize: "1.3rem", marginRight: "1rem" }}
                  />
                </span>{" "}
                <span style={{ fontSize: "1rem" }}>
                  Sign up via Google
                </span>
              </button>
              <button
                style={{
                  display: "flex",
                  padding: "0.75rem 1.5rem",
                  color: "black",
                  backgroundColor: "snow",
                  borderRadius: "25px",
                  margin: "1rem 0",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <span>
                  <FaApple
                    style={{ fontSize: "1.3rem", marginRight: "1rem" }}
                  />
                </span>{" "}
                <span style={{ fontSize: "1rem" }}>
                  Sign up via Apple
                </span>
              </button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "2rem",
              }}
            >
              <button
                style={{
                  display: "flex",
                  padding: "0.75rem 1.5rem",
                  color: "black",
                  backgroundColor: "snow",
                  borderRadius: "25px",
                  margin: "1rem",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <span>
                  <GoMail
                    style={{ fontSize: "1.3rem", marginRight: "1.5rem" }}
                  />
                </span>{" "}
                <span>or sign up via email</span>
              </button>
            </div>
            <p style={{ fontSize: "14px" }}>
              By signing up, you agree to our{" "}
              <em
                style={{ color: "hotpink", textDecoration: "underline" }}
              >
                terms of service
              </em>
              ,{" "}
              <em
                style={{ color: "hotpink", textDecoration: "underline" }}
              >
                privacy policy
              </em>{" "}
              and to{" "}
              <em
                style={{ color: "hotpink", textDecoration: "underline" }}
              >
                receiving
              </em>{" "}
              marketing communication from Toggl Track. You can opt out
              anytime.
            </p>
          </div>
        </div>
        <div>
          <div
            style={
              screen > 800
                ? {
                    backgroundColor: "#fce4d8",
                    color: "#2c1438",
                    padding: "3rem",
                    paddingLeft: screen > 1000 ? "6rem" : "4rem",
                    fontSize: "1.2rem",
                    marginTop: "17rem",
                    zIndex: "1",
                  }
                : {
                    backgroundColor: "#fce4d8",
                    color: "#2c1438",
                    padding: "2rem",
                    paddingLeft: "2rem",
                    marginTop: "0",
                  }
            }
          >
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: "bold",
                marginBottom: "2rem",
              }}
            >
              Prefer a product demo instead?
            </h2>
            <p style={{ marginBottom: "2rem" }}>
              Request a 30-minute personalized demo to see how Toggl Track
              can meet your time tracking goals
            </p>
            <button
              style={{
                padding: "0.75rem 1.5rem",
                color: "snow",
                backgroundColor: "#e67dd8",
                borderRadius: "25px",
              }}
            >
              Book a demo
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboveFooter