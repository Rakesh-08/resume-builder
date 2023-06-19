import "./templates.css";



export default function Templates() {

    return (
        <div className="tempContainer">
           <h4 className='text-center mb-2 '>Templates</h4>
          
            <div className=" m-2 p-1">

                <div className="m-1">
                    <h6>default</h6>
                    <div className="template-1 bg-info">
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
                    <h6>default</h6>
                    <div className="template-1 d-flex bg-dark">
                        <div className=" p-3">
                            
                            <div className="img " style={{ backgroundColor: "white" }}> </div>
                            <div className="  my-2 bg-danger" style={{height:"3em",width:"2em"}}>
                              
                            </div>

                        </div>
                        <div style={{width:"1px",backgroundColor:"whitesmoke"}}>
 
                        </div>

                        <div className="">
                            <div className=" line h-25 m-3 bg-info">

                            </div>
                            
                                <div className='line bg-success h-25  m-3'>

                                </div>
                            <div className='line bg-danger h-25 m-3'></div>
                            <div className="   mx-2 bg-light" style={{width:"110px",height:"1em"}}>

                            </div>
                            
                        </div>
                       
                    </div>
                </div>
                <div className="m-1">
                    <h6>default</h6>
                    <div className="template-1 bg-danger">
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
                        <div style={{ height: "0.5em" }} className=" bg-success m-2"></div>
                    </div>
                </div>
                <div className="m-1">
                    <h6>default</h6>
                    <div className="template-1 bg-success">
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
                        <div style={{ height: "0.5em" }} className=" bg-success m-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


