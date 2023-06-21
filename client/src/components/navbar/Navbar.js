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
        <div className="navbar d-flex justify-content-end ">
            <div>
                <button className="mx-4 border-0 bg-transparent text-white">Documentation</button>
            </div>
            <div className="border rounded-4 p-2" >
                <button onClick={signupRoute} className={`authBtn ${login ? "" : "active"}`}>sign Up</button>
                <button onClick={loginRoute} className={`authBtn ${login?"active":""}`}>Login</button>
           </div>
          
        </div>
    )
}