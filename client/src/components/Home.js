import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import WorkExperience from "./WorkExperience";
import Templates from "./cvTemplates/templates";
import Navbar from "../components/navbar/Navbar"
import ErrorPage from "./ErrorPage";
import { AuthContextValue } from "./authContext/AuthContext"


export default function Home({ setResult }) {
    const [fullName, setFullName] = useState('');
    const [currentPosition, setCurrentPosition] = useState("");
    const [currentTechnologies, setCurrentTechnologies] = useState('')
    const [currentLength, setCurrentLength] = useState(1);
    const [headshot, setHeadshot] = useState(null);
    const [loading, setLoading] = useState(false);
    const [jobInfo, setJobInfo] = useState([""])
    const navigate = useNavigate();
    let { active } = AuthContextValue();



    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (active !== "one" && !localStorage.getItem("resumeToken")) {
            alert("Please login first to explore these templates")
            return
        }


        setLoading(true)
        const formData = new FormData();
        formData.append("headshotImage", headshot, headshot.name);
        formData.append("fullName", fullName);
        formData.append("currentPosition", currentPosition);
        formData.append("currentLength", currentLength);
        formData.append("currentTechnologies", currentTechnologies);
        formData.append("workHistory", JSON.stringify(jobInfo));

        let baseUrl = process.env.NODE_ENV == "production" ? "https ://resume-building-app.onrender.com" : "http://localhost:8080"

        console.log(baseUrl)

        await axios
            .post(` ${baseUrl}/resume/create  `, formData, {})
            .then((res) => {
                if (res.data.message) {
                    setResult(res.data.data)
                    navigate("/resume")
                }
            })
            .catch((err) => {
                console.log(err)
                alert("sorry! some error occurred")
            });
setLoading(false)
       

    }
    if (loading) {
        return <Loading />
    }
    return (
        <div className="homeContainer">
            <Navbar />

            <div className='resumeContainer app px-4'>
                <div className="leftContainer">
                    <Templates />
                </div>
                <div className="d-flex  justify-content-center mx-4 p-3 rounded-2 " style={{border:"1px solid grey"}}>
                    <div className="rightContainer ">
                        <h1 className="text-center fs-3 ">Resume Builder</h1>
                        <p > Generate a resume with AI in few seconds</p>
                        <div className="px-4 ">
                            <form
                                onSubmit={handleFormSubmit}
                                method='POST'
                                encType='multipart/form-data'
                            >
                                <div className='d-flex flex-column w-75'>

                                <label htmlFor='fullName'>Enter your full Name</label>

                                    <input type='text' required name='fullName' id='fullName' value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                </div>

                                <div className='nestedContainer'>
                                    <div >
                                        <label htmlFor='currentPosition'>current Position</label>

                                        <input type='text' required name='currentPosition' className='currentInput' value={currentPosition} onChange={(e) => setCurrentPosition(e.target.value)} />

                                    </div>
                                    <div >
                                        <label htmlFor='currentLength'>For How long? (year)</label>

                                        <input type='number' required name='currentLength' min="0" className='currentInput' value={currentLength} onChange={(e) => setCurrentLength(e.target.value)} />

                                    </div>
                                    <div >
                                        <label htmlFor='currentTechnologies'>Technologies used</label>

                                        <input type='text' required name='currentTechnologies' className='currentInput' value={currentTechnologies} onChange={(e) => setCurrentTechnologies(e.target.value)} />
                                    </div>

                                </div>
                                <div className='d-flex flex-column'>
                                    <label htmlFor='photo' >upload your passport size photo</label>

                                    <input type='file' required name='photo' id='photo' onChange={(e) => setHeadshot(e.target.files[0])} accept='image/x-png,image/jpeg' />
                                </div>
                                <div>

                                <h3>Companies you've worked at (max 4)</h3>

                                {jobInfo.map((company, index) => {
                                    return <WorkExperience key={index} company={company} jobInfo={jobInfo} setJobInfo={setJobInfo} index={index} />
                                })}
                                </div>
                                <div style={{height:"1px",backgroundColor:"grey" ,margin:"10px"}}></div>
                                <div className='submit my-2'>
                                    <button> Create {"     "} Resume </button>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vh-100 my-2">

                <div className="d-flex flex-column align-items-center m-5 p-4 ">
                    <div className="my-5" style={{ height: "0.2em", width: "60%", backgroundColor: "red", }}>

                </div>
                
                    <div className=" w-100 d-flex justify-content-around   ">

                        <div className=" position-relative  quote w-25 rounded-5 px-5">
                            <h4 style={{position:"absolute", top:"40%"}}> Lets work together to get you Hired !</h4>

                        </div>
                        <img style={{ height: "20em", borderRadius: "40% 40% 5%", opacity: "0.9" }} src="https://media.istockphoto.com/id/812807718/vector/businesspeople-handshaking-after-negotiation-or-interview-at-office-productive-partnership.jpg?s=612x612&w=0&k=20&c=-s_zttzycCcdo1NO3wNqEwux1ImSWSx3M2a7shjgnM8=" alt="handShake logo" />
                        
                       
                    </div>

                  
                    
                </div>
                <div className="footer" >
                    <div className ="d-flex justify-content-around">
                    <div className=" f-note  w-25 p-4">
                        <h6>Terms and conditions </h6>
                        <h6>About us </h6>
                        <h6>contact details </h6>
                        <h6>Pricing  </h6>
                    </div>
                    <div className=" f-note  w-25 p-4">
                        <h6>Terms and conditions </h6>
                        <h6>Terms and conditions </h6>
                        <h6>Terms and conditions </h6>
                        <h6>Terms and conditions </h6>
                        <h6>Terms and conditions </h6>
                    </div>
                    <div className=" f-note w-25 p-4">
                        <h6>Terms and conditions </h6>
                        <h6>Terms and conditions </h6>
                        <h6>Terms and conditions </h6>
                        <h6>Terms and conditions </h6>
                        </div>
                    </div>
                    <h4 className="text-end text-dark mx-4   fs-6">copyrights Reserved @2023</h4>
                </div>

            </div>
        </div>
    )

}















