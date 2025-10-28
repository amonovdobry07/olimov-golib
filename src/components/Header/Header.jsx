import "./Header.css";
import { IoMdCall } from "react-icons/io";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import Sarlavxa from "./Sarlavxa";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [showheader, setShowHEader] = useState(false);

  const { t, i18n } = useTranslation()
  return (
    <header>
      <div className="header-back">
        <div className="header-overlay"></div>
        <div className="container header-container">
          <div className="header-logo">
            <h1>Olimov Golib</h1>
          </div>
          <div
            className="header-bars"
            onClick={() => setShowHEader(!showheader)}
          >
            {showheader ? <IoCloseSharp /> : <HiBars3CenterLeft />}
          </div>
          <ul className={showheader ? "active" : " "}>
            <div className="xx" onClick={() => setShowHEader(false)}>
              <IoCloseSharp />
            </div>
            <li>
              <a href="#Sarlavxa" onClick={() => setShowHEader(false)}>
                {t(`home`)}
              </a>
            </li>

            <li>
              <a href="#About" onClick={() => setShowHEader(false)}>
                {t(`works`)}
              </a>
            </li>

            {/* <li>
              <a href="#Work" onClick={() => setShowHEader(false)}>
                Work situation
              </a>
            </li> */}

            <li>
              <a href="#Contact" onClick={() => setShowHEader(false)}>
                {t(`contact`)}
              </a>
            </li>

            <select className="header-button" id="select"
              onChange={(e) => { i18n.changeLanguage(e.target.value) }}
              defaultValue="uz"
            >
              <option value="uz" class="flag-uz">🇺🇿 Uzbek</option>
              <option value="ru" class="flag-ru">🇷🇺 Russian</option>
              <option value="en" class="flag-en">🇬🇧 English</option>
            </select>
          </ul>

          <select className="header-contact"
            id="select"
            onChange={(e) => { i18n.changeLanguage(e.target.value) }}
            defaultValue="uz"
          >
            <option value="uz" class="flag-uz">🇺🇿 Uzbek</option>
            <option value="ru" class="flag-ru">🇷🇺 Russian</option>
            <option value="en" class="flag-en">🇬🇧 English</option>
          </select>
        </div>
        {/* Sarlavha */}
        <Sarlavxa />
      </div>
    </header>
  );
};

export default Header;
