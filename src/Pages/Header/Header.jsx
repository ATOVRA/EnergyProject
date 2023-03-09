import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./HeaderStyle.css";
import LogoEnergy from "../Images/logo.jpg";
import { HiMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { Context } from "../../Context/Context";
import { Language } from "../../Lang/Lang";
export const Header = () => {
  const [menuDiv, setMenuDiv] = useState(!true);
  const { lang, setLang } = useContext(Context);
  const handleMenu = () => {
    setMenuDiv(!menuDiv);
  };

  const handleClick = (event) => {
    switch (event.target.id) {
      case "ru":
        {
          setLang("ru");
        }
        break;
      case "uz": {
        setLang("uz");
      }
    }
  };

  console.log(lang);
  useEffect(() => {
    window.localStorage.setItem('langs', lang)
  },[lang])
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
                {Language[lang].boshSahifa}
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
                {Language[lang].ishlarimiz}
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
                {Language[lang].bizHaqimizda}
              </Link>
            </li>
            <NavLink
              to={"/adminLogin"}
              style={{ textDecoration: "none" }}
              className="adminMenuLi"
            >
              <li>{Language[lang].admin}</li>
            </NavLink>
          </ul>
          <div className="siteLanguages">
            <div className="uzLanguage">
              <button onClick={handleClick} id="uz">
                Uz
              </button>
            </div>
            <div className="ruLanguage">
              <button onClick={handleClick} id="ru">
                Ru
              </button>
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
                  {Language[lang].boshSahifa}
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
                  {Language[lang].ishlarimiz}
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
                  {Language[lang].bizHaqimizda}
                </Link>
              </li>
              <NavLink to={"/adminLogin"} style={{ textDecoration: "none" }}>
                <li>{Language[lang].admin}</li>
              </NavLink>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
