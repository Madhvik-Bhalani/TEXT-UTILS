import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TextUtil from './components/TextUtil'
import './App.css'
import Alert from './components/Alert'
// import Foot from './components/Foot'
export default function App() {
  
const data = {
  title: "Madhvik's Tech",
  home: "Home Page",
  url: 'https://placekitten.com/g/64/64'
}
// const footerdata = "Madhvik Bhalani's React App"


// alert
const [alert, setalert] = useState(false) //null
const showalert=(msg,type)=>{
  setalert({
    msg:msg,
    type:type
  })
  setTimeout(() => {
    setalert(false) //null
  }, 1500);
}

// darkmode
const [mode, setmode] = useState('light')
const [btn, setbtn] = useState("DarkBlue")
const tooglemode=()=>{
  if(mode==="light")
  {
    setmode("dark")
    setbtn("LightMode")
    document.body.style.backgroundColor="rgb(32 15 106)"
    showalert("DarkMode Enabled","success");
  }
  else{
    setmode("light")
    setbtn("DarkBlue")
    document.body.style.backgroundColor="white"
    showalert("LightMode Enabled","success");
  }
}




  return (
    <div>
            <Navbar title={data.title} home={data.home} mode= {mode} toggle={tooglemode} btn={btn} />
            <Alert alert={alert}/>
            <TextUtil head={"Text Analyzer"} mode={mode} showalert={showalert}/>
            {/* <Foot foot={footerdata} date={new Date().toDateString()} mode={mode} /> */}

    </div>
  )
  }
