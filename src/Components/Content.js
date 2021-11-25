import React from 'react'
import './CSS/Content.css'

const Content = () => {
    return (
        <div className="bgc">
        <div className="container" id="total">
        <div className="container mt-5">
      <h1>Bootstrap Responsive Pricing Table <br/> 
          Snippet</h1>
          <h4>Pricing Table with Custom Hover Effects and Buttons</h4>      
        </div>
       
       <div>
       <div className="card" style={{width: "18rem"}} id="img">
       <div>    
     <img className="card-img-top" src="https://fallbacks.carbonads.com/nosvn/fallbacks/5bd59fd117c76cf5eda6ba13af644c8a.jpg" 
     alt="Card"
     height="100px"
     weight="100px"
     />
     </div>
  <div className="card-body">
    <p className="card-text">Premium Bootstrap themes, templates, and UI kits by Creative Tim.
   <br/>
ads via Carbon</p>
    
  </div>
</div>
       </div>
       </div>
     </div>
    )
}

export default Content
