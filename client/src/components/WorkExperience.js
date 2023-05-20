
import react, { useState } from "react";

export default function WorkExperience({ jobInfo, setJobInfo, company, index }) {

    // update the state with user input
    const handleAddCompany = () => {
        let lastObject = jobInfo[jobInfo.length - 1]
        if (lastObject.companyName == "" || lastObject.position == "") {
            return alert("please enter valid input")
        }

        if (jobInfo.length === 4) {
            setJobInfo([...jobInfo]);
            console.log(jobInfo)
            return;
        }


        setJobInfo([...jobInfo, { companyName: '', position: "" }])
    }


    // remove a selected item from the list
    const handleRemoveCompany = (index) => {
        const list = [...jobInfo];
        list.splice(index, 1);
        setJobInfo(list)
    }

    // update an item within the list
    const handleUpdateCompany = (e, index) => {
        const { name, value } = e.target;
        const list = [...jobInfo];
        list[index][name] = value;


        setJobInfo(list)
    }
    return (
        <div className='nestedContainer '>
            <div className='work-exp'>
                <div className='companies'>
                    <label htmlFor='companyName'>Company Name</label>

                    <input type='text' name='companyName' value={jobInfo[index].companyName} onChange={(e) => handleUpdateCompany(e, index)} />
                </div>

                <div className='companies'>
                    <label htmlFor='position'>Position held</label>

                    <input type='text' name='position' value={jobInfo[index].position} onChange={(e) => handleUpdateCompany(e, index)} />
                </div>
            </div>

            <div className='btn_group'>
                {jobInfo.length - 1 === index && jobInfo.length <= 4 && (
                    <button className="exp" id='addBtn' onClick={handleAddCompany}>
                        Add
                    </button>
                )}
                {jobInfo.length > 1 && (jobInfo.length - 1 !== index || jobInfo.length == 4) && (
                    <button className="exp" id='deleteBtn' onClick={() => handleRemoveCompany(index)}>
                        delete
                    </button>
                )}

            </div>


        </div>

    )
}







