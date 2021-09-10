import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import i18n from './i18n.js';
import { withNamespaces } from 'react-i18next';
import { AiFillFacebook } from "react-icons/ai";


// change language function
const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
}


const myLang = [
  {"n": "中文","v": "cn"},
  {"n": "English","v": "en"},
  {"n": "Bahasa Melayu","v": "bm"}
]

function InputValidate(){
  let [usrnameActive,setusrnameActive] = useState('');
  let [pswordActive,setpswordActive] = useState('');

  console.log(usrnameActive)

  return(
    <>
    <input type="text" className={`input-form login-input ${usrnameActive.length > 0 ? 'hasLength': ''}`} placeholder="Phone number, username or email address" onKeyUp={(e) => setusrnameActive(usrnameActive = e.target.value)}/>
    <input type="password" className={`input-form login-input ${pswordActive.length > 0 ? 'hasLength': ''}`} placeholder="Password"  onKeyUp={(e) => setpswordActive(pswordActive = e.target.value)}/>
    </>
  )

}

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
      <select onChange={e => langList(changeLanguage(e.target.value))}>
        {listLang}
      </select>

  )
}

function Connectdb(){
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const payload ={
    email: "eve.holt@reqres.in",
    password: "cityslicka"
  }
  const requestOptions = {
    method: 'POST',
    headers: { 'Accept': 'application/json','Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  };

  useEffect(() => {
    fetch('https://reqres.in/api/login',requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setIsLoaded(true);
          setItems(result);
        },
        // 注意：需要在此处处理错误
        // 而不是使用 catch() 去捕获错误
        // 因为使用 catch 去捕获异常会掩盖掉组件本身可能产生的 bug
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if(error){
    return <div>Error : {error.message}</div>
  }else if(!isLoaded){
    return <div>Loading...</div>
  }else{return <div>yaya</div>}

}

export default class App extends React.Component{
  
  render() {
    return(

    <main>
      <nav>
        <div class="topnav">
          <div class="topnav_left">...</div>
          <div class="topnav_center"><LanguageList /></div>
        </div>
      </nav>
      <div className="logo-title">
        <h1>Instragram</h1>
      </div>
      <form className="login-form">
        <button className="input-form"><span className="icon-fb"><AiFillFacebook size={20}/></span><span>Continue Using your mother</span></button>
        <div className="container-or">
          <div className="line-or"></div>
          <div className="text-or">OR</div>
          <div className="line-or"></div>
        </div>
        <InputValidate />
        <div className="input-form">
          <a>Forgot password?</a>
        </div>
        <button className="input-form">Log In</button>
        <Connectdb />
      </form>
    </main>
    )
  }
}