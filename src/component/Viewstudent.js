import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Viewstudent = () => {
    var [viewlist,setviewlist]=useState([])
    var [loadstatus,setloadstatus]=useState(true)

    axios.get("http://localhost:7000/api/viewstudent").then((Response)=>{
      console.log(Response.data)
      setviewlist(Response.data)
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
      <th scope="col">admno</th>
      <th scope="col">rollno</th>
      <th scope="col">name</th>
      <th scope="col">Class</th>
      <th scope="col">parent</th>
      <th scope="col">mobile</th>
      <th scope="col">address</th>
    </tr>
  </thead>
  {loadstatus ? <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div> :<tbody>
      {viewlist.map((value,key)=>{
          return <tr>
      
          <td>{value['admno']}</td>
          <td>{value.rollno}</td>
          <td>{value.name}</td>
          <td>{value.Class}</td>
          <td>{value.parent}</td>
          <td>{value.mobile}</td>
          <td>{value.address}</td>
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

export default Viewstudent