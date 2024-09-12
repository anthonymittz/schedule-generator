import i18n from "i18next";                      
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "ru",
    debug: true,
    interpolation: {
      escapeValue: false, // done by React
    },
    resources: {
      en: {
        translation: {
          hello_world: "Hello, World!",
        },
      },
      ru: {
        translation: {
          hello_world: "Привет, Мир!",
        },
      },
    },
  });

export default i18n;