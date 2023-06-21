import Default from "./default"
import LeftFaced from "./leftFaced"
import CenterFaced from "./centerFaced"
import Mixed from "./Mixed"
import ErrorPage from "../ErrorPage";
import { AuthContextValue } from "../authContext/AuthContext"

export default function Resume({ result }) {

    let { selectedTemplate } = AuthContextValue()

    let token = localStorage.getItem("resumeToken")

    let key = "one";

    Object.keys(selectedTemplate).map(i => {
        if (selectedTemplate[i] == "selected")
            key = i;
    })

    if (key !== "one" && !token) {
        alert("please sign up first to check these templates")
        return;
    }


    if (JSON.stringify(result) === "{}") {
        return <ErrorPage />
    }

    return (
        <div>
            <Default result={result} />
            {token && <CenterFaced result={result} />}
            {token && <LeftFaced result={result} />}
            {token && <Mixed result={result} />}

        </div>
    )
}