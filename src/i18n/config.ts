import i18n from "i18next";                      
import { initReactI18next } from "react-i18next";
import t from './translation.json';

type Locales = 'en'|'ru';

function extract(translation: typeof t, locale: Locales) {
  const t: {[key: string]: string} = {};
  Object.entries(translation).forEach(entry => t[entry[0]] = entry[1][locale]);
  return t;
};

i18n
  .use(initReactI18next)
  .init({
    lng: "ru",
    fallbackLng: "ru",
    debug: true,
    interpolation: {
      escapeValue: false, // done by React
    },
    resources: {
      en: {
        translation: extract(t, 'en'),
      },
      ru: {
        translation: extract(t, 'ru'),
      },
    },
  });

export default i18n;