import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
// import About from './components/About';
import React , {useState} from 'react'
// import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [mode,setmode]=useState('Light');
  const togglemode=()=>{
    if(mode==='Light') {
      setmode('Dark');
      document.body.style.background='#042743';
    }
    else{
      setmode("Light");
      document.body.style.background='white';
    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
      <div>
          <Navbar title="Textutils" abouttext="About Us" toggle={togglemode} modes={mode}/>
          <Textform modes={mode}/>
          {/* <Routes> */}
            {/* <Route exact path="/About" element={<About modes={mode}/>}> */}
            {/* </Route> */}
            {/* <Route exact path="/" element={<Textform modes={mode}/>}> */}
            {/* </Route> */}
          {/* </Routes> */}
      {/* </BrowserRouter> */}
      </div>
    </>
  );
}


export default App;
