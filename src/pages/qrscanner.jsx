import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../css/qrscanner.css";

export default function QRScanner() {
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

        <div
          className={
            location.pathname === "/qrscanner" ? "active-item" : "item"
          }
          onClick={() => navigate("/qrscanner")}
        >
          <img src="/images/icon (1).png" className="icon2" alt="icon" />
          QR Scanner
        </div>

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
      <div className="container2"></div>
    </div>
  );
}
