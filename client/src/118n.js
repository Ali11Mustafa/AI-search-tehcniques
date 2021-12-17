import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from "./Locals/en.json"
import kr from './Locals/ku.json'

const resources = {
  en: {
    translation: en,
  },

  kr: {
    translation: kr,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'kr',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  })
export default i18n;