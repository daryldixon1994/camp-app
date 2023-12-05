import React, { useEffect, useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
function PublicNavBar() {
  let token = localStorage.getItem("token");
  let isUser = localStorage.getItem("isUser");
  let isAdmin = localStorage.getItem("isAdmin");
  const [offset, setOffset] = useState(0);
  // console.log(offset);
  const styleNav = {
    backgroundColor: "#e2bc73",
    fontWeight: 400,
    fontSize: "1.3em",
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "flex-end",
    height: "100px",
    position: "fixed",
    top: "0",
    zIndex: "10",
    borderBottom: "1px rgb(228, 228, 228) solid",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(6.1px)",
  };
  const styleNavScroll = {
    backgroundColor: "#212121",
    fontWeight: 400,
    fontSize: "1.3em",
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "flex-end",
    height: "100px",
    position: "fixed",
    top: "0",
    zIndex: "10",
    borderBottom: "1px rgb(228, 228, 228) solid",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(6.1px)",
  };
  const styleObjActive = {
    all: "unset",
    cursor: "pointer",
    color: "white",
    borderBottom: "3px white solid",
    wordSpacing: "5px",
  };
  const styleObjNotActive = { all: "unset", cursor: "pointer", color: "white" };
  const onScroll = () => setOffset(window.pageYOffset);
  useEffect(() => {
    // clean up code
    window.addEventListener("scroll", onScroll, { passive: true });
    // window.removeEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={offset > 300 ? styleNavScroll : styleNav}>
      <div className="public-nav-img-container">
        <img src="/assets/landing/logo.svg" alt="" />
      </div>
      <ul className="nav-links-public">
        <NavLink
          style={({ isActive }) => {
            return isActive ? styleObjActive : styleObjNotActive;
          }}
          to="/"
          className="public-nav-link-item"
        >
          Home
        </NavLink>

        <NavLink
          style={({ isActive }) => {
            return isActive ? styleObjActive : styleObjNotActive;
          }}
          to="/about"
        >
          About us
        </NavLink>

        <NavLink
          style={({ isActive }) => {
            return isActive ? styleObjActive : styleObjNotActive;
          }}
          to="/camps"
        >
          Camps
        </NavLink>
        {token && isUser === "true" ? (
          <>
            <NavLink
              style={({ isActive }) => {
                return isActive ? styleObjActive : styleObjNotActive;
              }}
              to="/my-events"
            >
              My Events
            </NavLink>
            <NavLink
              style={({ isActive }) => {
                return isActive ? styleObjActive : styleObjNotActive;
              }}
              to="/login"
              onClick={() => {
                localStorage.clear();
              }}
            >
              Logout
            </NavLink>
          </>
        ) : token && isAdmin === "true" ? (
          <>
            <NavLink
              style={({ isActive }) => {
                return isActive ? styleObjActive : styleObjNotActive;
              }}
              to="/admin"
            >
              Dashboard
            </NavLink>
            <NavLink
              style={({ isActive }) => {
                return isActive ? styleObjActive : styleObjNotActive;
              }}
              to="/login"
              onClick={() => {
                localStorage.clear();
              }}
            >
              Logout
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              style={({ isActive }) => {
                return isActive ? styleObjActive : styleObjNotActive;
              }}
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              style={({ isActive }) => {
                return isActive ? styleObjActive : styleObjNotActive;
              }}
              to="/register"
            >
              Register
            </NavLink>
          </>
        )}
      </ul>
    </div>
  );
}

export default PublicNavBar;
