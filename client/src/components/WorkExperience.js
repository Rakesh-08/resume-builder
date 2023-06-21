
import react, { useState } from "react";

export default function WorkExperience({ jobInfo, setJobInfo, company, index }) {

   

    let addExperienceInputField = (e) => {
        e.preventDefault()
        let temp = [...jobInfo]
        if (temp.length == 4) {
            return
        }


        if (temp[0] == "") {
            temp.length = 0
        } else {
           
            let element = temp[temp.length - 1]
            console.log(element)
            if (!(element.companyName && element.position)) {
              
                alert("please fill previous experience field first")
                return
            }
        }
        temp.push({ companyName: "", position: "" })
        setJobInfo(temp)
    }
    


    // remove a selected item from the list

    let removeExperience = (e) => {
        e.preventDefault()

        let temp = [...jobInfo]
        temp.splice(index, 1)
        if (temp.length == 0) {
            temp.push("")
        }
        setJobInfo(temp)

    }


    // update an item within the list
    let updateExperience = (e) => {
        let temp = [...jobInfo]
        temp[index][e.target.name] = e.target.value
        setJobInfo(temp)
    }
    return (
        <div>
            {jobInfo[0].companyName!==undefined &&
                <div className='nestedContainer '>
                    <div className='work-exp'>
                        <div className='companies'>
                            <label htmlFor='companyName'>Company Name</label>

                            <input required type='text' name='companyName' value={company.companyName} onChange={updateExperience} />
                        </div>

                        <div className='companies'>
                            <label htmlFor='position'>Position held</label>

                            <input required type='text' name='position' value={company.position} onChange={updateExperience} />
                        </div>

                    </div>


                    <div className='btn_group'>
                        <button onClick={(e) => removeExperience(e, company.companyName)} style={{ backgroundColor: "red" }} className="p-1 mx-3 rounded-2 border-0" >delete</button>
                    </div>

                </div>}
           
            <div>
                {jobInfo.length-1== index && index<3 &&<button onClick={addExperienceInputField} style={{ backgroundColor: "green" }} className="p-1 mx-4 rounded-2 border-0" >Add</button>

                }

            </div>

        </div>

    )
}







