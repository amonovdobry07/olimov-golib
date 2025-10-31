import "./Header.css";
import { IoMdCall } from "react-icons/io";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import Sarlavxa from "./Sarlavxa";
import logo from "../../assets/pictures/logo.png";
import video1 from "../../assets/pictures/video1.mp4";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [showheader, setShowHEader] = useState(false);
  const [backwhite, setBackWhite] = useState(false);
  const [animateHeader, setAnimateHeader] = useState(false); // 🔥 faqat header-container uchun animatsiya

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBackWhite(true);
      } else {
        setBackWhite(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // sahifa yuklanganda animatsiyani yoqamiz
    setTimeout(() => {
      setAnimateHeader(true);
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { t, i18n } = useTranslation();

  return (
    <header>
      <div className="header-back">
        <video
          src={video1}
          className="header-video"
          autoPlay
          muted
          preload="metadata"
          loop
        ></video>

        <div className="header-overlay"></div>

        <div
          className={
            backwhite
              ? `container header-container white ${animateHeader ? "fade-in" : ""}`
              : `container header-container ${animateHeader ? "fade-in" : ""}`
          }
        >
          <div className="header-logo">
            <img src={logo} alt="logo" />
          </div>

          <div
            className="header-bars"
            onClick={() => setShowHEader(!showheader)}
          >
            {showheader ? <IoCloseSharp className="rotate" /> : <HiBars3CenterLeft />}
          </div>

          <ul className={showheader ? "active" : ""}>
            <div className="xx" onClick={() => setShowHEader(false)}>
              <IoCloseSharp />
            </div>
            <li>
              <a href="#Sarlavxa" onClick={() => setShowHEader(false)}>
                {t("home")}
              </a>
            </li>
            <li>
              <a href="#About" onClick={() => setShowHEader(false)}>
                {t("works")}
              </a>
            </li>
            <li>
              <a href="#Contact" onClick={() => setShowHEader(false)}>
                {t("contact")}
              </a>
            </li>

            <select
              className="header-button"
              id="select"
              onChange={(e) => {
                i18n.changeLanguage(e.target.value);
              }}
              defaultValue="uz"
            >
              <option value="uz" className="flag-uz">
                🇺🇿 Uzbek
              </option>
              <option value="ru" className="flag-ru">
                🇷🇺 Russian
              </option>
              <option value="en" className="flag-en">
                🇬🇧 English
              </option>
            </select>
          </ul>

          <select
            className="header-contact"
            id="select"
            onChange={(e) => {
              i18n.changeLanguage(e.target.value);
            }}
            defaultValue="uz"
          >
            <option value="uz" className="flag-uz">
              🇺🇿 Uzbek
            </option>
            <option value="ru" className="flag-ru">
              🇷🇺 Russian
            </option>
            <option value="en" className="flag-en">
              🇬🇧 English
            </option>
          </select>
        </div>

        {/* Sarlavha qismi */}
        <Sarlavxa />
      </div>
    </header>
  );
};

export default Header;
