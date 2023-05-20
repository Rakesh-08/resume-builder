import react from "react";
import { Link } from "react-router-dom";


export default function ErrorPage() {
    return (
        <div className="app">
            <h3>
                You have not provided your details. kindly head back to the {"  "} <Link to="/"> homePage</Link>
            </h3>

        </div>
    )
}







