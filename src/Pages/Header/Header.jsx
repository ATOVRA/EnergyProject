import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./HeaderStyle.css";
import LogoEnergy from "../Images/logo.jpg";
import { HiMenu } from "react-icons/hi";

export const Header = () => {
  const [menuDiv, setMenuDiv] = useState(!true);
  const ScrollTop = () => {
    window.scrollTo(0, 0);
  };
  const handleIshlarimiz = () => {
    window.scrollTo(0, 1000);
  };
  const handleHaqimizda = () => {
    window.scrollTo(0, 2500);
  };

  const handleMenu = () => {
    setMenuDiv(!menuDiv);
  };

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
            <NavLink
              to={"/adminLogin"}
              style={{ textDecoration: "none" }}
              className="adminMenuLi"
            >
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
          <HiMenu className="menuIcon" onClick={handleMenu} />
          <div className="menuHoverDiv" style={{height: menuDiv ? '200px' : '0'}}>
            <ul>
              <li onClick={ScrollTop}>Bosh sahifa</li>
              <li onClick={handleIshlarimiz}>Ishlarimiz</li>
              <li onClick={handleHaqimizda}>Biz haqimizda</li>
              <NavLink to={"/adminLogin"} style={{ textDecoration: "none" }}>
                <li>Admin</li>
              </NavLink>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
