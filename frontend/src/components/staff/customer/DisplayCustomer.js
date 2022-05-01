import React from 'react';
import { Link } from "react-router-dom";

export default class DisplayCustomer extends React.Component {
  state = {
    query: "",
    data: [],
    filteredData: []
  };

  handleInputChange = event => {
    const query = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.nic.toLowerCase().includes(query.toLowerCase());
      });

      return {
        query,
        filteredData
      };
    });
  };

  getData = () => {
    fetch('http://localhost:8070/customer')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const { query } = this.state;
        const filteredData = data.filter(element => {
          return (
            element.nic.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.name.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.age.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.gender.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.address.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.contactNo.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.email.toLowerCase().includes(query.toLowerCase()) >= 0 ||
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

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{ color: "#CD5C5C" }}><b>Customer Management System</b></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/staff-customer" style={{ color: "#008080" }}><i class="fa fa-fw fa-home"></i>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-customer" style={{ color: "#008080" }}><i class="fa fa-user-circle" aria-hidden="true"></i> Create Profile</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/display-customer" style={{ color: "#008080" }}><i class="fa fa-desktop" aria-hidden="true"></i> Display Customer</Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link" to="/" style={{ color: "#008080" }}><i class="fa fa-desktop" aria-hidden="true"></i> Complaints </Link>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: "60%", marginLeft: "30px", marginTop: "4px" }}
                  value={this.state.query}
                  onChange={this.handleInputChange} />
                <button className="btn btn-outline-success" type="submit" style={{ fontSize: "12px" }}><i class=" 12-12 12-search"></i>Search</button>
              </form>
            </div>
          </div>
        </nav>
        <div className="App stockImage2" >
          <br />
          <h1 style={{ color: "white", marginLeft: "500px" }}>All Customer</h1><br />

          {/* Display data from API */}
          <div className="students" style={{marginLeft: "200px" }}>
            {this.state.filteredData.length === 0 ? (<div className="alert alert-danger" style={{ marginLeft: "300px", width: "20%"}}>
              <center>Data is not found<br /><br />
                <img src="notfound.jpg" style={{ width: "70%" }} /></center> <br />
            </div>
            ) : (this.state.filteredData.map(i =>{
              return(
                <p style={{display:"inline-table",marginLeft:"30px"}}>
                <div className="student" style={{ background: "#DCDCDC", width: "350px",height:"310px" ,marginRight: "40px",marginTop:"30px"}}>
                  <div className="details">
                    <div>

                    <div style={{ float: "right" }}>
                        <img src={"images/" + i.photo} style={{ width: "180px", height: "180px" }}
                          className="border border-danger rounded-circle"
                        />
                      </div>
                     
                      <p >📳 <b style={{ color: "green" }}>NIC   : </b>{i.nic}</p>
                      <p >👨 <b style={{ color: "red" }}>Name   : </b>{i.name}</p>
                      <p >🏃 <b style={{ color: "green" }}>Age   : </b>{i.age} years old</p>
                      <p >👫 <b style={{ color: "blue" }}>Gender   : </b>{i.gender}</p>
                      <p >🏡 <b style={{ color: "red" }}>Address   : </b>{i.address}</p>
                      <p >🏡 <b style={{ color: "red" }}>Contact No   : </b>{i.contactNo}</p>
                      <p >💌 <b style={{ color: "blue" }}>Email   : </b>{i.email}</p>
                    </div>

                    <a href="/edit-customer"><button className="btn btn-secondary">VIEW</button></a>
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