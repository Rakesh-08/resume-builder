import { createContext, useState, useContext } from "react";

let authContext = createContext(() => { });
let initialState = { one: "selected", two: "", three: "", four: "" }


export default function AuthContext({ children }) {
    let [showSignup, setShowSignup] = useState(false);
    let [selectedTemplate, setSelectedTemplate] = useState(initialState)
   
    let active= "one"

    Object.keys(selectedTemplate).map(i => {
        if (selectedTemplate[i] === "selected")
            active = i;
    })

    return (
        <authContext.Provider value={{ showSignup, setShowSignup, selectedTemplate, setSelectedTemplate, initialState ,active }}>
            {children}
        </authContext.Provider>


    )
}
let AuthContextValue = () => useContext(authContext);

export { AuthContextValue }
