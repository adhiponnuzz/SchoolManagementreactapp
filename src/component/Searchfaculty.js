import React, { useState } from 'react'
import Header from './Header'

const Searchfaculty = () => {
    var [name,setName]=useState("")
    const subData=()=>{
        const data={"Name":name}
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
                <label for="" className="form-label">Name</label>
                <input onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name" type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} class="btn btn-success">SEARCH</button>
                </div>
            </div>
        </div>
    </div>
</div>





    </div>
  )
}

export default Searchfaculty