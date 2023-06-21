import "./templates.css";
import { useState } from "react";
import { AuthContextValue } from "../authContext/AuthContext";

export default function Templates() {
    let { selectedTemplate, setSelectedTemplate, initialState } = AuthContextValue();
   
    
    let setActiveClass = (value) => {
        if (!value) {
            setSelectedTemplate(initialState)
            return
        }

        setSelectedTemplate({...initialState,[value]:"selected"})
       
    }
    return (
        <div className="tempContainer">
           <h4 className='text-center mb-2 '>Templates</h4>
          
            <div className=" m-2 p-1">

                <div className="m-1">
                    <h6>default</h6>
                    <div onClick={()=>setActiveClass("one")}  className={`template bg-info ${selectedTemplate.one}`}>
                        <div className="d-flex justify-content-between p-3">
                            <div >
                                <div className='line bg-success h-25 my-3'>

                                </div>
                                <div className='line bg-danger h-25'></div>
                            </div>
                            <div className="img " style={{ backgroundColor: "yellow" }}> </div>
                            
                        </div>
                       
                        <div className="  h-25 mx-2 bg-danger">

                        </div>
                        <div style={{height:"0.5em"}} className=" bg-success m-2"></div>
                    </div>
                </div>
                <div className="m-1">
                    <h6>Left-faced</h6>
                    <div onClick={() => setActiveClass("two")}  className={`template bg-dark d-flex ${selectedTemplate.two}`} >
                        <div className=" p-3">
                            
                            <div className="img " style={{ backgroundColor: "white" }}> </div>
                            <div className="  my-2 bg-danger" style={{height:"3em",width:"2em"}}>
                              
                            </div>

                        </div>
                        <div className="m-2" style={{ width: "1px", backgroundColor: "whitesmoke" }}>
 
                        </div>

                        <div className="">
                            <div className=" line h-25 m-3 bg-info">

                            </div>
                            
                                <div className='line bg-success h-25  m-3'>

                                </div>
                            <div className='line bg-danger h-25 m-3'></div>
                            <div className="m-1 bg-light" style={{width:"90px",height:"1em"}}>

                            </div>
                            
                        </div>
                       
                    </div>
                </div>
                <div className="m-1">
                    <h6>Centered-focus</h6>
                    <div onClick={()=>setActiveClass("three")} className={`template bg-danger ${selectedTemplate.three}`}>
                        <div className="d-flex justify-content-center align-items-center flex-column p-2">
                           
                            <div  style={{ backgroundColor: "blue",width:"1.5em",height:"1.4em" }}> </div>
                            <div style={{ backgroundColor: "yellow", height: "0.3em", width: "5em", margin: "4px" }}></div>
                            <div style={{ backgroundColor: "purple", height: "0.3em", width: "8em", margin: "1px" }}></div>
                            <div></div>
                            
                        </div>

                        <div className="  h-25 mx-2 bg-light">

                        </div>
                        <div style={{ height: "0.5em" }} className=" bg-success m-3"></div>
                       
                    </div>
                </div>
                <div className="m-1">
                    
                    <h6>Mixed</h6>
                    <div onClick={() => setActiveClass("four")}  className={`template bg-success ${selectedTemplate.four}`}>
                        <div className="d-flex  justify-content-around p-3">
                            
                            <div className="img " style={{ backgroundColor: "orange" }}> </div>
                            <div className="m-2 " style={{ backgroundColor: "orange ",width:"6em",height:"0.4em" }}> </div>
                          
                        </div>

                        <div className="  h-25 mx-2 bg-primary">

                        </div>
                        <div style={{ height: "0.5em" ,backgroundColor:"aqua"}} className="  m-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


