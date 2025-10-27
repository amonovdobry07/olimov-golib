import "./Header.css";
import { IoMdCall } from "react-icons/io";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import Sarlavxa from "./Sarlavxa";

const Header = () => {
  const [showheader, setShowHEader] = useState(false);
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
                Home
              </a>
            </li>

            <li>
              <a href="#About" onClick={() => setShowHEader(false)}>
                Works
              </a>
            </li>

            {/* <li>
              <a href="#Work" onClick={() => setShowHEader(false)}>
                Work situation
              </a>
            </li> */}

            <li>
              <a href="#Contact" onClick={() => setShowHEader(false)}>
                Contact
              </a>
            </li>

            <select className="header-button">
              <option value="uz" class="flag-uz">🇺🇿 Uzbek</option>
              <option value="ru" class="flag-ru">🇷🇺 Russian</option>
              <option value="en" class="flag-en">🇬🇧 English</option>
            </select>
          </ul>

          <select className="header-contact">
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
