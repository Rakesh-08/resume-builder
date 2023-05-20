import react, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import WorkExperience from "./WorkExperience";

export default function Home({setResult}) {
    const [fullName, setFullName] = useState('');
    const [currentPosition, setCurrentPosition] = useState("");
    const [currentTechnologies, setCurrentTechnologies] = useState('')
    const [currentLength, setCurrentLength] = useState(1);
    const [headshot, setHeadshot] = useState(null);
    const [loading, setLoading] = useState(false);
    const [jobInfo, setJobInfo] = useState([{ companyName: "", position: "" }])
    const navigate = useNavigate();



    const handleFormSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("headshotImage", headshot, headshot.name);
        formData.append("fullName", fullName);
        formData.append("currentPosition", currentPosition);
        formData.append("currentLength", currentLength);
        formData.append("currentTechnologies", currentTechnologies);
        formData.append("workHistory", JSON.stringify(jobInfo));

        
        axios
            .post("http://localhost:8080/resume/create", formData, {})
            .then((res) => {
                if (res.data.message) {
                    setResult(res.data.data)
                    navigate("/resume")
                }
            })
            .catch((err) => console.log(err));


        setLoading(!loading)

    }
    if (loading) {
        return <Loading />
    }
    return (
        <div className='app'>
            <h1>Resume Builder</h1>
            <p> Generate a resume with AI in few seconds</p>
            <form
                onSubmit={handleFormSubmit}
                method='POST'
                encType='multipart/form-data'
            >

                <label htmlFor='fullName'>Enter your full Name</label>

                <input type='text' required name='fullName' id='fullName' value={fullName} onChange={(e) => setFullName(e.target.value)} />

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
                <label htmlFor='photo' >upload your passport size photo</label>

                <input type='file' required name='photo' id='photo' onChange={(e) => setHeadshot(e.target.files[0])} accept='image/x-png,image/jpeg' />

                <h3>Companies you've worked at (max 4)</h3>

                {jobInfo.map((company, index) => {
                    return <WorkExperience key={index} company={company} jobInfo={jobInfo} setJobInfo={setJobInfo} index={index} />
                })}


                <button className='submit'> Create {"     "} Resume </button>
            </form>
        </div>
    )

}















