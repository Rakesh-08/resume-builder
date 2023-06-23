import Default from "./default"
import LeftFaced from "./leftFaced"
import CenterFaced from "./centerFaced"
import Mixed from "./Mixed"
import ErrorPage from "../ErrorPage";
import { AuthContextValue } from "../authContext/AuthContext"

export default function Resume({ result }) {

    const { active } = AuthContextValue()

    let token = localStorage.getItem("resumeToken")


    if (JSON.stringify(result) === "{}") {
        return <ErrorPage />
    }

    return (
        <div>
            {active === "one" && <Default result={result} />}
            {active === "two" && token && <CenterFaced result={result} />}
            {active === "three" && token && <LeftFaced result={result} />}
            {active === "four" && token && <Mixed result={result} />}

        </div>
    )
}