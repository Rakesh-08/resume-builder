import react, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Resume from "./components/Resumes/Resume"
import LoginComponent from "./components/loginPage/loginComponent";
import "./index.css"

function App() {

  const [result,setResult]= useState({})
  return (
  
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home setResult={setResult} />}></Route>
          <Route path="/resume" element={<Resume result={result} />}> </Route>
          <Route path="/auth/login" element={<LoginComponent/>}></Route>
        </Routes>
      </BrowserRouter>

  )
    
}

export default App;
