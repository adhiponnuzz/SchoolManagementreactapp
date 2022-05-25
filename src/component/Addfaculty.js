import React, { useState } from 'react'
import Header from './Header'

const Addfaculty = () => {
    var [name,setName]=useState("")
    var [education,setEducation]=useState("")
    var [mobile,setMobile]=useState("")
    var [address,setAddress]=useState("")
    var [pincode,setPincode]=useState("")
    var [district,setDistrict]=useState("")

    const subData=()=>{

        const data={"Name":name,"Education":education,"Mobile":mobile,"Address":address,"Pincode":pincode,"District":district}
        console.log(data)
    }


  return (
    <div>
        <Header/>


<div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name" type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Education</label>
                    <input onChange={(e)=>{setEducation(e.target.value)}} placeholder="Enter Education" type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Moblie</label>
                    <input onChange={(e)=>{setMobile(e.target.value)}} placeholder="Enter Mobile" type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Address</label>
                    <textarea onChange={(e)=>{setAddress(e.target.value)}} placeholder="Enter Address" name="" id="" cols="30" rows="10" class="form-control"></textarea>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Pincode</label>
                    <input onChange={(e)=>{setPincode(e.target.value)}} placeholder="Enter Pincode" type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">District</label>
                    <input onChange={(e)=>{setDistrict(e.target.value)}} placeholder="Enter District" type="text" class="form-control"/>
                </div>
                
                
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} class="btn btn-danger">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>






    </div>
  )
}

export default Addfaculty