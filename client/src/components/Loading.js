import react from "react";

export default function Loading(){
    return (
        <div className='vh-100 d-flex flex-column justify-content-center align-items-center'>
            <div className="spinner-border h-50 w-50 text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <h1>...Loading . Please wait</h1>
        </div>
    )
}