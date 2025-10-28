import { initReactI18next } from "react-i18next"
import "./App.css"
import About from "./components/About/About"
import Header from "./components/Header/Header"
import Work from "./components/Work/Work"
import Workers from "./components/Workers/Workers"
import i18n from "i18next"
import translationsUz from "./Locales/translationsUz"
import translationsRu from "./Locales/translationsRu"
import translationsEn from "./Locales/translationsEn"



i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: translationsUz },
    ru: { translation: translationsRu },
    en: { translation: translationsEn }
  },
  lng: "uz",
  fallbackLng: "uz"
})

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Workers />
    </div>
  )
}

export default App