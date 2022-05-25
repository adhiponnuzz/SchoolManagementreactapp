import React, { useState } from 'react'

const Searchstudent = () => {
    var [admno,setAdmno]=useState("")
    const subData=()=>{

        const data={"Admno":admno}
        console.log(data)
    }
  return (
    <div>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Admission No</label>
                    <input onChange={(e)=>{setAdmno(e.target.value)}} placeholder="Enter Admission No" type="text" className="form-control"/>

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-danger">SEARCH</button>

                </div>
            </div>
        </div>
    </div>
</div>



    </div>
  )
}

export default Searchstudent