import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
        "nameTitle": "{{name}}",
        "userMessagesUnread": "Hello <1>{{name}}</1>, you have {{count}} unread message. <5>Go to message</5>.",
        "userMessagesUnread_plural": "Hello2 <1>{{name}}</1>, you have {{count}} unread messages.  <5>Go to messages</5>.",
    }
  },
  fr: {
    translation: {
        "nameTitle": "{{name}}",
        "userMessagesUnread": "Hello <1>{{name}}</1>, you have {{count}} unread message. <5>Go to message</5>.",
        "userMessagesUnread_plural": "你好 <1>{{name}}</1>, you have {{count}} unread messages.  Go to messages.",
    }
  },
  cn: {
    translation: {
        "userMessagesUnread_plural": "作业论文是从固定问题发展而来的，这些问题让学生有一段时间研究一个主题，并参考他们的信息来源得出答案。虽然使用作业论文作为评估工具有一些缺点，但这种做法有良好的教育目的。本文探讨了作业论文对学生学习有益的原因，并考虑了这种评估方法的一些问题。",
        "cn_lang":"中文",
        "bm_lang":"马来文"
    }
  },
  bm: {
    translation: {
        "userMessagesUnread_plural": "Esei tugasan dikembangkan dari soalan set yang memberi pelajar jangka masa untuk meneliti sesuatu topik dan menghasilkan jawapan mereka dengan merujuk kepada sumber maklumat mereka. Walaupun terdapat beberapa kelemahan menggunakan karangan tugasan sebagai alat penilaian, terdapat tujuan pendidikan yang kukuh yang menyokong amalan ini. Esei ini mengkaji sebab-sebab mengapa karangan tugasan bermanfaat untuk pembelajaran pelajar dan mempertimbangkan beberapa masalah dengan kaedah penilaian ini.",
        "cn_lang":"Chinese",
        "bm_lang":"Malay"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "bm", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;