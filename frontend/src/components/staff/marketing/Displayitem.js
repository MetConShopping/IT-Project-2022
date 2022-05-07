import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import "./hover.css";


export default function DisplayItem() {
  const [Items, setItem] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      'http://localhost:8070/item'
    );

    setItem(response.data);
   
  };

  return (
   <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#" style={{color:"#CD5C5C"}}><b>Marketing Management System</b></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to = "/staff-marketing" style={{color:"#008080"}}><i class="fa fa-fw fa-home"></i>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/add-promotion" style={{color:"#008080"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Add Promotion</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/display-promtion" style={{color:"#008080"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Promotion</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to = "/add-item" style={{color:"#008080"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Add Item</Link>
            </li> 
            <li className="nav-item">
                <Link className="nav-link active" to = "/display-item" style={{color:"#008080"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Item</Link>
            </li> 
          </ul>
      </div>
    </div>
  </nav>
    <div className="App marketingImage2">
      <br/>
      <center>
      <h1 style ={{color:"white", fontSize:"30px"}}>All Item</h1>
      </center>
      {/* Fetch data from API */}
      <div> <center>
        <button className="fetch-button button" onClick={fetchData}>
        <i class="fa fa-file-archive-o" aria-hidden="true"></i> Fetch Item
        </button>
        <br />
        </center>
      </div>
      <br />
      {/* Display data from API */}
      <div className="students" style = {{ marginLeft: "170px"}}>
        {Items &&
          Items.map((i, index) => {
            return (
              <p style={{display:"inline-block",marginLeft:"60px"}}>
              <div className="student" style={{background:"#DCDCDC",marginRight:"50px",width:"350px",height:"320px",marginTop:"30px"}} key={index}>
                <h3 className="badge bg-success">Item {index + 1}</h3>

                <div className="details">
                  <div>
                    <div style={{float:"right"}}>
                      <img src ={"images/" + i.photo} style={{width:"180px" , height:"180px"}}
                      className = "border border-danger rounded-circle"
                      />
                    </div>
                    <p ><b style={{color:"red"}}>Item Id   : </b>{i.item_Id}</p>
                    <p ><b style={{color:"green"}}>Item Name   : </b>{i.item_name}</p>
                    <p ><b style={{color:"blue"}}>Description   : </b>{i.description}</p>
                    <p ><b style={{color:"orange"}}>Discount Rate    : </b>{i.discount_Rate}</p>
                    <p ><b style={{color:"red"}}>Price   : </b>{i.price}</p>
                  </div>
                
                  <Link to="/view"><button className="btn btn-secondary">View</button></Link>
                  
    
                </div>
              </div>
              </p>
            );
          })}
      </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
   </div>
  );
}