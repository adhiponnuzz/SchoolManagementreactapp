import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>


<nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
      <Link to="/" class="navbar-brand" >HOME</Link>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
            <Link to="/" class="nav-link active">Addstudent</Link>
          
        </li>
        <li class="nav-item">
            <Link to="/search" class="nav-link">Searchstudent</Link>
         
        </li>
        <li class="nav-item">
            <Link to="/faculty" class="nav-link">Addfaculty</Link>
         
        </li>
        
      </ul>
    </div>
  </div>
</nav>





    </div>
  )
}

export default Header