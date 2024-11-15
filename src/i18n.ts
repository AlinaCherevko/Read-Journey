import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LngDetector from "i18next-browser-languagedetector";
import translationEN from "./en/translation.json";
import translationUK from "./uk/translation.json";

i18next
  .use(initReactI18next)
  .use(LngDetector)
  .init({
    lng: "en",
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },

    debug: true,
    resources: {
      en: {
        translation: translationEN,
      },

      uk: {
        translation: translationUK,
      },
    },
    // if you see an error like: "Argument of type 'DefaultTFuncReturn' is not assignable to parameter of type xyz"
    // set returnNull to false (and also in the i18next.d.ts options)
    // returnNull: false,
  });

//
//
//
//
//
//
//
// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import LngDetector from "i18next-browser-languagedetector";

// const resources = {
//   en: {
//     translation: {
//       hello: "Hello",
//       world: "World",
//     },
//   },
//   uk: {
//     translation: {
//       hello: "Привіт",
//       world: "Світ",
//     },
//   },
// };

// i18n
//   .use(initReactI18next)
//   .use(LngDetector)
//   .init({
//     fallbackLng: "en",
//     supportedLngs: ["en", "uk"],
//     resources,
//     detection: {
//       order: ["localStorage", "navigator"],
//       caches: ["localStorage"],
//     },
//     interpolation: {
//       escapeValue: false,
//     },
//   });

// export default i18n;
