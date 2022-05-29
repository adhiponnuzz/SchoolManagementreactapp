import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Viewfaculty = () => {

 

    var [facultylist,setfacultylist]=useState([])
    var [loadstatus,setloadstatus]=useState(true)

    axios.get("http://localhost:7000/api/viewfaculty").then((Response)=>{
      console.log(Response.data)
      setfacultylist(Response.data)
      setloadstatus(false)
    })
  return (
    <div>
        <Header/>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table table-primary table-striped">
  <thead>
    
    <tr>
      <th scope="col">name</th>
      <th scope="col">education</th>
      <th scope="col">mobile</th>
      <th scope="col">address</th>
      <th scope="col">pincode</th>
      <th scope="col">district</th>
      
    </tr>
  </thead>
  {loadstatus ?<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>:<tbody>
      {facultylist.map((value,key)=>{
          return <tr>
      
          <td>{value['name']}</td>
          <td>{value.education}</td>
          <td>{value.mobile}</td>
          <td>{value.address}</td>
          <td>{value.pincode}</td>
          <td>{value.district}</td>
          
          
        </tr>



      })}
    
    
  </tbody>}
</table>




                        </div>

                    </div>


                </div>




            </div>



        </div>



    </div>
  )
}

export default Viewfaculty