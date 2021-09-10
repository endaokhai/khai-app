import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './i18n';
import i18n from './i18n.js';
import reportWebVitals from './reportWebVitals';
// the hoc
import { withTranslation } from 'react-i18next';
import { Trans, useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

// function MyComponent() {
//   const { t } = useTranslation('myNamespace');

//   return <Trans t={t}>Welcome to React</Trans>;
// }


// 成功案例
// function MyComponent({ person, messages }) {
//   const name = person;
//   // console.log(name)
//   const count = messages.length;
//   const { t } = useTranslation();

//   return (
//     <Trans i18nKey="userMessagesUnread_plural" count={count}>
//       Hello <strong title={t('nameTitle')}>{{name}}</strong>, you have {{count}} unread message.
//     </Trans>
    
//   );
// }

function MyComponent() {
  const essay = "Assignment essays are developed from set questions that give students a period of time to research a topic and produce their answer with references to their sources of information. While there are some disadvantages with using assignment essays as an assessment tool, there are sound educational purposes underpinning this practice. This essay examines the reasons why assignment essays are beneficial for student learning and considers some of the problems with this method of assessment.";
  const { t } = useTranslation();

  return (
    <Trans i18nKey="userMessagesUnread_plural">
     {{essay}}
    </Trans>
    
  );
}

// function LanguageList(props){
//   const myLang = props.country;
//   const listLang = myLang.map((myLang) => <option key={myLang}>{myLang}</option>)
//   return(
//     <select>
//       {listLang}
//     </select>
//   )
// }

// change language function
const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
}


const myLang = [
  {"n": "中文","v": "cn"},
  {"n": "English","v": "en"},
  {"n": "Bahasa Melayu","v": "bm"}
]

function LanguageList() {
  const [lang,langList] = useState({n:'cn'})
  const listLang = myLang.map((myLang) => <option key={myLang.v} value={myLang.v}>{myLang.n}</option>)

  const submitValue = () => {
    const frmdetails = {
        'language' : lang,
    }
    console.log(frmdetails);
  }
  return(
    // <form>
    //   <input type="text" value={lang.n} onChange={e => langList}/>
    //   <input type="text"/>
    //   <div>your lang is {lang.n}</div>
    // </form>
    <div>
      <select onChange={e => langList(changeLanguage(e.target.value))}>
        {listLang}
      </select>
      {/* <button onClick={submitValue}>submit</button> */}
    </div>

  )
}



ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
