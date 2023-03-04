import React, { useState } from "react";
import { Link } from "react-scroll";
import "./HeaderStyle.css";
import LogoEnergy from "../Images/logo.jpg";
import { HiMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [menuDiv, setMenuDiv] = useState(!true);

  const handleMenu = () => {
    setMenuDiv(!menuDiv);
  };

  return (
    <header>
      <div className="container">
        <nav>
          <div className="headerLogo">
            <Link
              to="bosh sahifa"
              offset={-150}
              duration={500}
              smooth={true}
              spy={true}
            >
              <img src={LogoEnergy} alt="" className="navLogo" />
            </Link>
          </div>
          <ul className="menu-ul">
            <li>
              <Link
                to="bosh sahifa"
                offset={-150}
                duration={500}
                smooth={true}
                spy={true}
              >
                Bosh sahifa
              </Link>
            </li>
            <li>
              <Link
                to="ishlarimiz"
                offset={-130}
                duration={500}
                smooth={true}
                spy={true}
              >
                Ishlarimiz
              </Link>
            </li>
            <li>
              <Link
                to="haqimizda"
                offset={-130}
                duration={500}
                smooth={true}
                spy={true}
              >
                Biz haqimizda
              </Link>
            </li>
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
          <div
            className="menuHoverDiv"
            style={{ height: menuDiv ? "200px" : "0" }}
          >
            <ul>
              <li>
                <Link
                  to="bosh sahifa"
                  offset={-100}
                  duration={500}
                  smooth={true}
                  spy={true}
                >
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link
                  to="ishlarimiz"
                  offset={-100}
                  duration={500}
                  smooth={true}
                  spy={true}
                >
                  Ishlarimiz
                </Link>
              </li>
              <li>
                <Link
                  to="haqimizda"
                  offset={-100}
                  duration={500}
                  smooth={true}
                  spy={true}
                >
                  Biz haqimizda
                </Link>
              </li>
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
