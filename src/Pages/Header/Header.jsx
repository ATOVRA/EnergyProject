import React from "react";
import { NavLink } from "react-router-dom";
import "./HeaderStyle.css";
import LogoEnergy from "../Images/logo.jpg";

export const Header = () => {
  const ScrollTop = () => {
    window.scrollTo(0, 0);
  };
  const handleIshlarimiz = () => {
    window.scrollTo(0, 1000);
  }
  const handleHaqimizda = () => {
    window.scrollTo(0, 2500)
  }

  return (
    <header>
      <div className="container">
        <nav>
          <div className="headerLogo">
            <NavLink to={"/"}>
              <img src={LogoEnergy} alt="" className="navLogo" />
            </NavLink>
          </div>
          <ul className="menu-ul">
            <li onClick={ScrollTop}>Bosh sahifa</li>
            <li onClick={handleIshlarimiz}>Ishlarimiz</li>
            <li onClick={handleHaqimizda}>Biz haqimizda</li>
            <NavLink to={"/adminLogin"} style={{ textDecoration: "none" }}>
              <li>Admin</li>
            </NavLink>
          </ul>
          <div className="siteLanguages">
            <div className="uzLanguage">
              <button>Uz</button>
            </div>
            <div className="ruLanguage">
              <button>Ru</button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
