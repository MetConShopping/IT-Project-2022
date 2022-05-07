import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class AllComplaints extends React.Component {
  state = {
    query: "",
    data: [],
    filteredData: []
  };

  handleInputChange = event => {
    const query = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.complaintID.toLowerCase().includes(query.toLowerCase());
      });

      return {
        query,
        filteredData
      };
    });
  };

  

  getData = () => {
    fetch('http://localhost:8070/complaint/')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const { query } = this.state;
        const filteredData = data.filter(element => {
          return (
            element.complaintID.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.cusName.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.date.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.email.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.description.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.photo.toLowerCase().includes(query.toLowerCase()) >= 0
            
          )
        });

        this.setState({
          data,
          filteredData
        });
      });
  };
  componentWillMount() {
    this.getData();
  }

  deleteComplaint(complaintID) {
    axios.delete(`http://localhost:8070/complaint/delete/${complaintID}` )
        .then((res) => {
            toast("Success! Complaint Deleted");
            window.location="/AllComplaints";
        }).catch((error) => {
            console.log(error)
        })
  
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{color:"#CD5C5C" , fontSize:"20px"}}><b>CUSTOMER MANAGEMENT SYSTEM</b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to = "/staff-customer" style={{color:"#008080"}}><i className="fa fa-fw fa-home"></i>Home</Link>
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
                <Link className="nav-link active" to = "/Complaints" style={{color:"#008080"}}><i className="fa fa-desktop" aria-hidden="true"></i> Complaints</Link>
            </li> 
           
          </ul>
        </div>
       
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: "60%", marginLeft: "30px", marginTop: "4px" }}
                  value={this.state.query}
                  onChange={this.handleInputChange} />
                <button className="btn btn-outline-success" type="submit" style={{ fontSize: "12px" }}><i className=" 12-12 12-search"></i>Search</button>
              </form>
            </div>
            <Link to="/"><button className="btn btn-primary">LogOut</button></Link> 
        </nav>
        <div className="App customerImage5" >
          <br />
          <h1 style={{ color: "white", marginLeft: "500px" }}><b>....All Complaints....</b></h1><br />

          {/* Display data from API */}
          <div className="complaints" style={{marginLeft: "200px" }}>
            {this.state.filteredData.length === 0 ? (<div className="alert alert-danger" style={{ marginLeft: "300px", width: "20%"}}>
              <center>Data is not found<br /><br />
                <img src="notfound.png" style={{ width: "70%" }} /></center> <br />
            </div>
            ) : (this.state.filteredData.map(i =>{
              return(
                <p style={{display:"inline-table",marginLeft:"30px"}}>
                <div className="complaints" style={{ background: "#808080", width: "320px",height:"310px" ,marginRight: "40px", paddingLeft: "10px", marginTop:"30px"}}>
                  <div className="details">
                    <div>

                    <div style={{ float: "right" }}>
                        <img src={"images/" + i.photo} style={{ width: "80px", height: "80px", marginTop:"210px" , marginRight:"20px"}}
                          className="border border-danger rounded-circle"
                        />
                      </div>
                       <h4 style={{ color: "blue"}}><center><i><u>Complaint**</u></i></center></h4><br/>
                      <p ><b style={{ color: "black" }}>Complaint ID    : </b>{i.complaintID}</p>
                      <p ><b style={{ color: "black" }}>Customer Name   : </b>{i.cusName}</p>
                      <p ><b style={{ color: "black" }}>Date            : </b>{i.date} </p>
                      <p ><b style={{ color: "black" }}>Email           : </b>{i.email}</p>
                      <p ><b style={{ color: "black" }}>Description     : </b>{i.description}</p>

                     
                      <button className="btn btn-danger" onClick={() => this.deleteComplaint(i.complaintID)}>DELETE</button> 
                    </div>
 
                   
                  </div>
                </div>
              </p>
              )
            }
              
            ))}
          </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      </div>
    );
  }
}