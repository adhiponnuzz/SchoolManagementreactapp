import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Searchfaculty = () => {

    const deleteapicall=(id)=>{
        const data={"_id":id}
        console.log(data)
        axios.post("http://localhost:7000/api/deletefaculty",data).then((Response)=>{
            if(Response.data.status=="success")
            {
                alert("successfully deleted")
            }
            else{
                alert("error in deletion")
            }
        })
    }

    var [name,setName]=useState("")
    const [data,setData]=useState([{"education": "", "mobile": "","address": "","pincode": "","district": ""}])
    const subData=()=>{
        const data={"name":name}
        console.log(data)
        axios.post("http://localhost:7000/api/searchfaculty",data).then((Response)=>{
            console.log(Response.data)
            setData(Response.data)
        })
        



    }
  return (
    <div>
        <Header/>

<div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">Name</label>
                <input onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name" type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} class="btn btn-success">SEARCH</button>
                </div>
            </div>

            {data.map((value,key)=>{
                return <div class="row g-3">
             <div class="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
             <label for="" className="form-label">Education</label>
                <input value={value.education}  placeholder="Enter Name" type="text" class="form-control"/>


                 </div>
                 <div class="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
             <label for="" className="form-label">Mobile</label>
                <input value={value.mobile}  placeholder="Enter Name" type="text" class="form-control"/>


                 </div>
                 <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Address</label>
                    <textarea value={value.address} placeholder="Enter Address" name="" id="" cols="30" rows="10" class="form-control"></textarea>
                </div>
                 <div class="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
             <label for="" className="form-label">Pincode</label>
                <input value={value.pincode}  placeholder="Enter Name" type="text" class="form-control"/>


                 </div>
                 <div class="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
             <label for="" className="form-label">District</label>
                <input value={value.district}  placeholder="Enter Name" type="text" class="form-control"/>


                 </div>
                 <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={()=>{deleteapicall(value._id)}} class="btn btn-danger">DELETE</button>
                </div>


                    </div>
            })}
        </div>
    </div>
</div>





    </div>
  )
}

export default Searchfaculty