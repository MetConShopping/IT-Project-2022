import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";


export default function DisplayInventory() {
  const [Inventories, setInventories] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      'http://localhost:8070/inventory'
    );

    setInventories(response.data);
   
  };

  return (
   <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#" style={{color:"#CD5C5C"}}><b>Stock Management System</b></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to = "/staff-stock" style={{color:"#008080"}}><i class="fa fa-fw fa-home"></i>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/add-stock" style={{color:"#008080"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Add Assistant</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/display-stock" style={{color:"#008080"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Assistant</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to = "/addInven-stock" style={{color:"#008080"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Add Inventory</Link>
            </li> 
            <li className="nav-item">
                <Link className="nav-link active" to = "/displayInven-stock" style={{color:"#008080"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Inventory</Link>
            </li> 
          </ul>
      </div>
    </div>
  </nav>
    <div className="App stockImage2">
      <h1 style ={{color:"white"}}>All Item</h1>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData} style={{color:"white"}}>
        <i class="fa fa-file-archive-o" aria-hidden="true"></i> Fetch Item
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="students" style = {{width: "80%", marginLeft: "170px"}}>
        {Inventories &&
          Inventories.map((Inventorie, index) => {
            return (
              <div className="student" style={{background:"#DCDCDC"}} key={index}>
                <h3 className="badge bg-success">Item {index + 1}</h3>

                <div className="details">
                  <div>
                    <div style={{float:"right"}}>
                      <img src ={"images/" + Inventorie.photo} style={{width:"200px" , height:"200px"}}
                      className = "border border-danger rounded-circle"
                      />
                    </div>
                    <p ><b style={{color:"red"}}>Item Id   : </b>{Inventorie.itemId}</p>
                    <p ><b style={{color:"green"}}>Item Name   : </b>{Inventorie.itemName}</p>
                    <p ><b style={{color:"blue"}}>Stock   : </b>{Inventorie.stock}</p>
                    <p ><b style={{color:"orange"}}>Stock In    : </b>{Inventorie.stockIn}</p>
                    <p ><b style={{color:"red"}}>Stock Out   : </b>{Inventorie.stockOut}</p>
                    <p ><b style={{color:"green"}}>Unit Price   : </b>{Inventorie.unitPrice}</p>
                  </div>
                
                  <a href="/editInven-stock"><button className="btn btn-secondary">Edit</button></a>
                  
    
                </div>
              </div>
            );
          })}
      </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
   </div>
  );
}