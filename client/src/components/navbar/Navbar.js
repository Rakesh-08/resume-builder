import {useState} from "react";
import {useNavigate} from "react-router-dom"
import "./Navbar.css"
import { AuthContextValue } from "../authContext/AuthContext"

export default function Navbar() {
    const navigateTo = useNavigate();
    const [login, setLogin] = useState(true);
    let { setShowSignup }= AuthContextValue()
    

    let loginRoute = () => {

        if (login === true) {
            setShowSignup(false)
            navigateTo("/auth/login")
            return
        }
        setLogin(true)
        

    }

    let signupRoute = () => {
        setLogin(false)

        if (login == false) {
            setShowSignup(true)
            navigateTo("/auth/login")
        }
        
    }

    return (

        <div className="d-flex  justify-content-between align-items-center p-2">
            <div className="mx-2 px-3 "   >
                <img style={{ height: "4em",marginBottom:"1em" }} src="https://www.conovercompany.com/wp-content/uploads/2019/06/wr-resumes-logo.png" alt="logo"/>
            </div>
            <div className="d-flex   justify-content-end ">
                <div className="d-flex    mx-2">
   <button className="m-2 border-0 bg-transparent "> <a
                        style={{textDecoration:"none",color:"white"}} href="https://github.com/Rakesh-08/resume-builder" target="_blank">Documentation</a></button>
            
            <div className="border rounded-4 p-2" >
                <button onClick={signupRoute} className={`authBtn ${login ? "" : "active"}`}>sign Up</button>
                <button onClick={loginRoute} className={`authBtn ${login?"active":""}`}>Login</button>
           </div>
                </div>
        
                 
          
        </div>

        </div>
      
    )
}
