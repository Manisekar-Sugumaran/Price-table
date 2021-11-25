import React from 'react'
import './CSS/Footer.css'

const Footer = () => {
    return (
        <div>

<div className="container mt-3 mb-3 "  >
        <nav className="navbar-light bg-primary p-3" id="img">
            <div>
         <p>Want more Bootstrap themes, templates, and UI tools?</p>
         <p>Subscribe to get updated when new Bootstrap related products arrive!</p>  
         <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Email address..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div class="input-group-append">
    <span class="input-group-text" id="basic-addon2">subscribe!</span>
  </div>
      </div>
         <small>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</small> 
         </div>
        <img src="https://startbootstrap.com/assets/img/freepik/wall-post-pana.svg" alt="" 
        height="500px"
        weight="500px"
        />
        </nav>
        </div>
       
       

      <div className="container mb-3 d-md-flex "  id="foot">

       <div>
      <p>Start Bootstrap</p>
        <p>Free & premium UI tools to help you <br/> 
            build better websites</p>
            <a class="btn btn-light btn-social mr-2" href="#a"><i class="fab fa-twitter"></i></a>
                <a class="btn btn-light btn-social mr-2" href="#a"><i class="fab fa-github"></i></a>
                <a class="btn btn-light btn-social mr-2" href="#a"><i class="fab fa-facebook-f"></i></a>
       </div>
       
       
       
       
       
       <div >
        <p style={{marginLeft:"60px"}}>PRODUCTS</p>   
        <ul style={{listStyle:"none",textAlign:"left"}}>
       <li> <a className="dropdown-item" href="#a">Themes</a></li>
       <li> <a className="dropdown-item" href="#a">Templates</a></li>
       <li> <a className="dropdown-item" href="#a">Snippets</a> </li>
       <li> <a className="dropdown-item" href="#a"> Guides</a> </li>
       </ul>
       </div>
       
       
       <div >
        <p style={{marginLeft:"60px"}}>RESOURCES</p>   
        <ul style={{listStyle:"none",textAlign:"left"}}>
       <li> <a className="dropdown-item" href="#a">Blog</a></li>
       <li> <a className="dropdown-item" href="#a">Bootstrap Resources</a></li>
       <li> <a className="dropdown-item" href="#a">SB Angular Inspector</a></li>
     
       </ul>
       </div>
       
       
       <div >
        <p style={{marginLeft:"60px"}}>SUPPORT</p>   
        <ul style={{listStyle:"none",textAlign:"left"}}>
        <li> <a className="dropdown-item" href="#a">Knowledge Base</a></li>
       <li> <a className="dropdown-item" href="#a">Custom Development</a></li>
       </ul>
       </div>
       
       <div >
        <p style={{marginLeft:"60px"}}>COMPANY</p>   
        <ul style={{listStyle:"none",textAlign:"left"}}>
        <li> <a className="dropdown-item" href="#a">About Us</a></li>
       <li> <a className="dropdown-item" href="#a">Privacy Policy</a></li>
       <li> <a className="dropdown-item" href="#a">Terms and Conditions</a></li>
       <li> <a className="dropdown-item" href="#a">Licenses</a></li>
       </ul>
       </div>
       </div>

        <div className="container"style={{textAlign:"center"}}>   
       <hr/>
       <p class="m-0">copyrights &copy; <a class="text-dark font-weight-bold" href="https://fd-portfolio.netlify.app/" target="blank">Noob DC</a>. All Rights Reserved. Designed by <a class="text-dark font-weight-bold" href="https://fd-portfolio.netlify.app/" target="blank">Noob DC</a>
            </p>
        
        <p>Website built with SB UI Kit Pro and SB Admin Pro with Illustrations by Stories by Freepik.</p>
       </div>
      









       
        </div>
    )
}

export default Footer
