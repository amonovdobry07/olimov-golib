import "./Sarlavxa.css";
import img from "../../assets/pictures/image2.png";
import { useTranslation } from "react-i18next";

const Sarlavxa = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="Sarlavxa" id="Sarlavxa">
      <div className="sarlavha-container">
        <div className="about-sarlavxa">
          <img src={img} alt="" />
        </div>

        <div className="sarlavxa-proces">
          <h1>{t(`ganch`)}</h1> <br />
          <p>{t(`p1`)}</p>
          <br />
          <p>{t(`p2`)}</p>
          <br />
          <p>
           {t(`p3`)}
          </p>
          <br />
          <p className="pp">
            {t(`p4`)}
          </p>
          <br />
          <p className="pp">
            {t(`p5`)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sarlavxa;
