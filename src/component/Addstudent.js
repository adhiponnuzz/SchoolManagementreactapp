import React, { useState } from 'react'

const Addstudent = () => {
    var [admno,setAdmno]=useState("")
    var [rollno,setRollno]=useState("")
    var [name,setName]=useState("")
    var [Class,setClass]=useState("")
    var [parent,setParent]=useState("")
    var [mobile,setMobile]=useState("")
    var [address,setAddress]=useState("")

    const subData=()=>{
        const data={"Admno":admno,"Rollno":rollno,"Name":name,"Class":Class,"Parent":parent,"Mobile":mobile,"Address":address}
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
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Roll No</label>
                    <input onChange={(e)=>{setRollno(e.target.value)}} placeholder="Enter Roll No" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">class</label>
                    <input onChange={(e)=>{setClass(e.target.value)}} placeholder="Enter className" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Parent Name</label>
                    <input onChange={(e)=>{setParent(e.target.value)}} placeholder="Enter Parent Name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Mobile No</label>
                    <input onChange={(e)=>{setMobile(e.target.value)}} placeholder="Enter Mobile No" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Address</label>
                    <textarea onChange={(e)=>{setAddress(e.target.value)}} placeholder="Enter Address" name="" id="" cols="30" rows="10" className="form-control"></textarea>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-danger">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>








    </div>
  )
}

export default Addstudent