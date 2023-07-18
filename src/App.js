
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState} from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  const[mode , setMode] = useState('light');
  const[alert , setAlert] = useState(null)
  const showAlert = (message,type) =>
  {
    setAlert({
      msg:message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggle = () =>
  {
    if(mode == 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert(":Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert(":Light mode has been enabled","success");
    }
  }
  return (
    <>
    <Router>
 <Navbar mode ={mode} toggle = {toggle}/>
 <Alert alert ={alert}/>
 <Routes>
  <Route exact path = "/" element = {<div className = "container"><TextForm mode = {mode} showAlert = {showAlert}/></div>}/>
 
  <Route exact path = "/about" element = {<About mode={mode}/>}/>
   
 </Routes>

 </Router>
 </>
  );
}

export default App;
