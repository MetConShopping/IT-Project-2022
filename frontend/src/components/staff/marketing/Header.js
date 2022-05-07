import React from "react";
import {Link} from "react-router-dom";


function HeaderMarketing(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" >
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{color:"#CD5C5C"}}><b>Marketing Management System</b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to = "/staff-marketing" style={{color:"#008080"}}><i class="fa fa-fw fa-home"></i>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/add-promotion" style={{color:"#008080"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Add Promotion</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/display-promtion" style={{color:"#008080"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Promotion</Link>
            </li> 
            <li className="nav-item">
                <Link className="nav-link" to = "/add-item" style={{color:"#008080"}}><i class="fa fa-desktop" aria-hidden="true"></i> Add Item</Link>
            </li> 
            <li className="nav-item">
                <Link className="nav-link" to = "/display-item" style={{color:"#008080"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Item</Link>
            </li> 
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default HeaderMarketing;