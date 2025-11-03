import "./Sarlavxa.css";
import { useTranslation } from "react-i18next";
import CircularText from "./CircularText.jsx";

const Sarlavxa = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="Sarlavxa" id="Sarlavxa">
      <div className="sarlavha-container">
        <div className="flex items-center justify-center min-h-screen w-full">
          <CircularText
            className="header-text-animate"
            key={t(i18n.language)}
            text={[t(`gachuyma`)]}
            typingSpeed={75}
            pauseDuration={500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>
      </div>
    </div>
  );
};

export default Sarlavxa;
