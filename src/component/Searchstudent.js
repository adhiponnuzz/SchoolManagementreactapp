import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Searchstudent = () => {
    const deleteapicall=(id)=>{
        const data={"_id":id}
        console.log(data)
        axios.post("http://localhost:7000/api/deletestudent",data).then((Response)=>{
            if(Response.data.status=="success")
            {
                alert("successfully deleted")
            }
            else{
                alert("error in deletion")
            }
        })
    }
    var [admno,setAdmno]=useState("")
    const [data,setData]=useState([{"rollno": "","name": "", "Class": "","parent": "","mobile": "","address": ""}])
    const subData=()=>{

        const data={"admno":admno}
        console.log(data)
        axios.post("http://localhost:7000/api/searchstudent",data).then((Response)=>{
            console.log(Response.data)
            setData(Response.data)
        })
       
    }
  return (
    <div>
        <Header/>

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
            {data.map((value,key)=>{
                return   <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">RollNO</label>
                    <input value={value.rollno} placeholder="Enter Rollno" type="text" className="form-control"/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Name</label>
                    <input value={value.name} placeholder="Enter Regno" type="text" className="form-control"/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Class</label>
                    <input value={value.Class} placeholder="Enter class" type="text" className="form-control"/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Parent</label>
                    <input value={value.parent} placeholder="Enter Parent" type="text" className="form-control"/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">MobileNo</label>
                    <input value={value.mobile} placeholder="Enter MobileNo" type="text" className="form-control"/>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Address</label>
                    <textarea value={value.address} placeholder="Enter Address" name="" id="" cols="30" rows="10" className="form-control"></textarea>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={()=>{deleteapicall(value._id)}} className="btn btn-danger">DELETE</button>

                </div>



                    </div>


            })}
        </div>
    </div>
</div>



    </div>
  )
}

export default Searchstudent