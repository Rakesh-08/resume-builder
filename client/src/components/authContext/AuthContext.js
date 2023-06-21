import { createContext, useState, useContext } from "react";

let authContext = createContext(() => { });
let initialState = { one: "", two: "", three: "", four: "" }


export default function AuthContext({ children }) {
    let [showSignup, setShowSignup] = useState(false);
    let [selectedTemplate, setSelectedTemplate] = useState(initialState)

    return (
        <authContext.Provider value={{ showSignup, setShowSignup, selectedTemplate, setSelectedTemplate, initialState }}>
            {children}
        </authContext.Provider>


    )
}
let AuthContextValue = () => useContext(authContext);

export { AuthContextValue }