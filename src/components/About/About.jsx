import "./About.css";
import gips1 from "../../assets/pictures/gips1.jpg";
import gips2 from "../../assets/pictures/gips2.jpg";
import gips3 from "../../assets/pictures/gips3.jpg";
import gips4 from "../../assets/pictures/gips4.jpg";
import gips5 from "../../assets/pictures/gips5.jpg";
import gips6 from "../../assets/pictures/gips6.jpg";
import gips7 from "../../assets/pictures/gips7.jpg";
import gips8 from "../../assets/pictures/gips8.jpg";
import gips9 from "../../assets/pictures/gips9.jpg";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();

  const [openCards, setOpenCards] = useState([]);
  const [visible, setVisible] = useState(3);

  const toggleCard = (id) => {
    if (openCards.includes(id)) {
      setOpenCards(openCards.filter((cardId) => cardId !== id));
    } else {
      setOpenCards([...openCards, id]);
    }
  };

  const ishlar = [
    {
      id: 1,
      rasm: gips1,
      price: "1 200 000"+" "+t(`sum`),
      workabout: t(`ishlar1`),
      duration: "2" + " " + t(`day`),
    },
    {
      id: 2,
      rasm: gips2,
      price: "1 700 000"+" "+t(`sum`),
      workabout: t(`ishlar2`),
      duration: "3" + " " + t(`day`),
    },
    {
      id: 3,
      rasm: gips3,
      price: "1 900 000"+" "+t(`sum`),
      workabout: t(`ishlar3`),
      duration: "1" + " " + t(`day`),
    },
    {
      id: 4,
      rasm: gips4,
      price: "2 100 000"+" "+t(`sum`),
      workabout: t(`ishlar4`),
      duration: "4" + " " + t(`day`),
    },
    {
      id: 5,
      rasm: gips5,
      price: "1 200 000"+" "+t(`sum`),
      workabout: t(`ishlar5`),
      duration: "2" + " " + t(`day`),
    },
    {
      id: 6,
      rasm: gips6,
      price: "1 200 000"+" "+t(`sum`),
      workabout: t(`ishlar6`),
      duration: "3" + " " + t(`day`),
    },
    {
      id: 7,
      rasm: gips7,
      price: "1 200 000"+" "+t(`sum`),
      workabout: t(`ishlar7`),
      duration: "6" + " " + t(`day`),
    },
    {
      id: 8,
      rasm: gips8,
      price: "1 200 000"+" "+t(`sum`),
      workabout: t(`ishlar8`),
      duration: "2" + " " + t(`day`),
    },
    {
      id: 9,
      rasm: gips9,
      price: "1 200 000"+" "+t(`sum`),
      workabout: t(`ishlar9`),
      duration: "1" + " " + t(`day`),
    },
  ];

  const handleShowMore = () => {
    if (visible < ishlar.length) {
      setVisible((prev) => Math.min(prev + 3, ishlar.length));
    }
  };

  const handleBack = () => {
    setVisible(3);
  };

  return (
    <div id="About">
      <div className="about-back">
        <div className="about-container">
          <div className="about-word">
            <h1>{t(`bizning_ishlar`)}</h1>
          </div>

          <div className="cards-box">
            {ishlar.slice(0, visible).map((card) => {
              const isOpen = openCards.includes(card.id);
              return (
                <div className="cards" key={card.id}>
                  <div
                    className="cards-img"
                    style={{ backgroundImage: `url(${card.rasm})` }}
                  ></div>

                  <h1>{card.workabout}</h1>
                  <h3>{card.duration}</h3>
                  <p>{card.price}</p>

                  <button
                    className="about-btn"
                    onClick={() => toggleCard(card.id)}
                  >
                    {t(`toliqMalumot`)}
                  </button>

                  <div className={isOpen ? "cars-text add-text" : "cars-text"}>
                    ra dolorum maxime. Aliquam, perferendis placeat? Reiciendis
                    deleniti assumenda quis consequuntur. Explicabo nemo rem
                    nisi temporibus voluptates ipsam dolore corporis tenetur
                    odit velit illo quam officia ea possimus doloremque, sequi
                    soluta.
                    <br />
                    <button onClick={() => toggleCard(card.id)}>
                      {t(`Back`)}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {visible >= ishlar.length ? (
          <button className="show-btn" onClick={handleBack}>
            {t(`Back`)}
          </button>
        ) : (
          <button className="show-btn" onClick={handleShowMore}>
            {t(`showMore`)}
          </button>
        )}
      </div>
    </div>
  );
};

export default About;
