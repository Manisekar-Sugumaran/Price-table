import React from 'react'
import './CSS/Navbar.css'

const Navbar = () => {
    return (
        
        <div className="container mt-3" >
     <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <img src="https://startbootstrap.com/assets/img/sb-logo.svg" alt="logo" 
    height="50px"
    weight="50px" 
    /> <h5>  Start Bootstrap </h5>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#anavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto"> 
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#a" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Themes
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#a"> Browse All Themes</a>
          <a className="dropdown-item" href="#a">Pro Bootstrap Themes</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#a">Admin & Dashboard</a>
          <a className="dropdown-item" href="#a">Landing Pages</a>
          <a className="dropdown-item" href="#a">Business & Corporate</a>
          <a className="dropdown-item" href="#a">Portfolio & Resume</a>
          <a className="dropdown-item" href="#a">Blog</a>
        </div>
      </li>
     
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#a" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Templates
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#a">Browse All Templates</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#a">Admin & Dashboard</a>
          <a className="dropdown-item" href="#a">Landing Pages & Headers</a>
          <a className="dropdown-item" href="#a">General Page Layouts</a>
          <a className="dropdown-item" href="#a">Navigation Layouts</a>
          <a className="dropdown-item" href="#a">Ecommerce</a>
          <a className="dropdown-item" href="#a">Blog</a>
        </div>
      </li>
      
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#a" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Bundles
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#a"> Pro Bootstrap HTML Bundle</a>
          <a className="dropdown-item" href="#a">Pro Angular Bundle</a>
        </div>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="#a">Forms</a>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#a" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Resources
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#a">    Snippets</a>
          <a className="dropdown-item" href="#a">Knowledge Base</a>
          <a className="dropdown-item" href="#a">Bootstrap Resources List</a>
          <a className="dropdown-item" href="#a">Guides</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#a">SB Angular Inspector</a>
          <a className="dropdown-item" href="#a">SB Form Builder</a>
        </div>
      </li>
    </ul>

     <ul className="navbar-nav m-auto" id="r-btn">   
    <li className="nav-item"> 
    <a className="nav-link" href="#a">Blog</a>
    </li>
     <li>
      <button className="btn-danger  my-2 my-sm-0" type="submit">Log In</button>
      </li>
    </ul>
  </div>
</nav>       
        </div>
    )
}

export default Navbar
