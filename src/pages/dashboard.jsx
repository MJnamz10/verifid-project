import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <img src="/images/logo.png" alt="logo" className="logo" />
      <h1 className="school">
        University of Science and Technology of Southern Philippines
      </h1>
      <div className="container1">
        <div
          className={location.pathname === "/" ? "active-item" : "item"}
          onClick={() => navigate("/")}
        >
          <img src="/images/icon.png" className="icon1" alt="icon" />
          Dashboard
        </div>

        {/*<div
          className={
            location.pathname === "/qrscanner" ? "active-item" : "item"
          }
          onClick={() => navigate("/qrscanner")}
        >
          <img src="/images/icon (1).png" className="icon2" alt="icon" />
          QR Scanner
        </div>*/}

        <div
          className={
            location.pathname === "/accesslogs" ? "active-item" : "item"
          }
          onClick={() => navigate("/accesslogs")}
        >
          <img src="/images/icon (2).png" className="icon3" alt="icon" />
          Access Logs
        </div>
      </div>
      <div className="dash-containers">
        <div className="dash-item">
          <img src="/images/Dashboard.png" className="icons" alt="image"></img>
          <p className="title">Total Students</p>
        </div>

        <div className="dash-item">
          <img
            src="/images/Dashboard (1).png"
            className="icons"
            alt="image"
          ></img>
          <p className="title">Access Granted Today</p>
        </div>

        <div className="dash-item">
          <img
            src="/images/Dashboard (2).png"
            className="icons"
            alt="image"
          ></img>
          <p className="title">Access Denied Today</p>
        </div>

        <div className="dash-item">
          <img
            src="/images/Dashboard (3).png"
            className="icons"
            alt="image"
          ></img>
          <p className="title">Today's Traffic</p>
        </div>
      </div>

      <div className="dash-containers2">
        <div className="dash-item2" style={{ backgroundColor: "#F0FDF4" }}>
          <p className="title2">Granted</p>
        </div>
        <div className="dash-item2" style={{ backgroundColor: "#FEF2F2" }}>
          <p className="title2">Denied</p>
        </div>
      </div>
      <div className="txt1">
        <img src="/images/grant.png" alt="icon" className="icon4" />
        <p>Access Status Overview</p>
      </div>
      <div className="txt2">
        <img src="/images/denied.png" alt="icon" className="icon5" />
        <p>Today's verification results at Main Gate</p>
      </div>

      <div className="container6"></div>
    </div>
  );
}
