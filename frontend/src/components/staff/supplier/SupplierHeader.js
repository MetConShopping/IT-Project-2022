import React from "react";
import {Link} from "react-router-dom";


function SupplierHeader(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" >
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{color:"#CD5C5C"}}><b>Supplier Management System</b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to = "/staff-supplier" style={{color:"#008080"}}><i class="fa fa-fw fa-home"></i>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/add-supplier" style={{color:"#008080"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Create Supplier</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/display-supplier" style={{color:"#008080"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Supplier</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to = "/update-supplier" style={{color:"#008080"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Edit Profile</Link>
            </li> 
            
          </ul>
        </div>
      </div>
      <Link to="/"><button className="btn btn-primary">LogOut</button></Link>
    </nav>
    )
}

export default SupplierHeader;