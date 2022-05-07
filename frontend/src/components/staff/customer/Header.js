import React from "react";
import {Link} from "react-router-dom";


function HeaderCustomer(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" >
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{color:"#CD5C5C" , fontSize:"25px"}}><b>CUSTOMER MANAGEMENT SYSTEM</b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to = "/staff-customer" style={{color:"#008080"}}><i className="fa fa-fw fa-home"></i>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/add-customer" style={{color:"#008080"}}><i className="fa fa-user-circle" aria-hidden="true"></i> Add Customer</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/display-customer" style={{color:"#008080"}}><i className="fa fa-desktop" aria-hidden="true"></i> Display Customer</Link>
            </li> 
            <li className="nav-item">
              <Link className="nav-link " to = "/EditCustomer" style={{color:"#008080"}}><i className="fa fa-user-circle" aria-hidden="true"></i> Edit Profile </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to = "/Complaints" style={{color:"#008080"}}><i className="fa fa-desktop" aria-hidden="true"></i> Complaints</Link>
            </li> 
            
          </ul>
        </div>
      </div>
      <Link to="/"><button className="btn btn-primary">LogOut</button></Link> 
    </nav>
    )
}

export default HeaderCustomer;