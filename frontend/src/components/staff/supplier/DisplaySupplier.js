import React from 'react';
import { Link } from "react-router-dom";

export default class DisplaySupplier extends React.Component {
  state = {
    query: "",
    data: [],
    filteredData: []
  };

  handleInputChange = event => {
    const query = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.name.toLowerCase().includes(query.toLowerCase());
      });

      return {
        query,
        filteredData
      };
    });
  };

  getData = () => {
    fetch('http://localhost:8070/supplier')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const { query } = this.state;
        const filteredData = data.filter(element => {
          return (
            element.supid.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.fullname.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.address.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.experience.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.itempurchesed.toLowerCase().includes(query.toLowerCase()) >= 0 ||
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
            <a className="navbar-brand" href="#" style={{ color: "#CD5C5C" }}><b>Supplier Management System</b></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/staff-supplier" style={{ color: "#008080" }}><i class="fa fa-fw fa-home"></i>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-supplier" style={{ color: "#008080" }}><i class="fa fa-user-circle" aria-hidden="true"></i> Add Supplier</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/display-supplier" style={{ color: "#008080" }}><i class="fa fa-desktop" aria-hidden="true"></i> Display Supplier</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/edit-supplier" style={{ color: "#008080" }}><i class="fa fa-user-circle" aria-hidden="true"></i> Edit Supplier</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/return-supplier" style={{ color: "#008080" }}><i class="fa fa-desktop" aria-hidden="true"></i> Returns</Link>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: "60%", marginLeft: "30px", marginTop: "4px" }}
                  value={this.state.query}
                  onChange={this.handleInputChange} />
                <button className="btn btn-outline-success" type="submit" style={{ fontSize: "12px" }}><i class="fa fa-fw fa-search"></i>Search</button>
              </form>
            </div>
          </div>
        </nav>
        <div className="App stockImage2" >
          <br />
          <h1 style={{ color: "white", marginLeft: "500px" }}>All Supplier</h1><br />

          {/* Display data from API */}
          <div className="students" style={{marginLeft: "200px" }}>
            {this.state.filteredData.length === 0 ? (<div className="alert alert-danger" style={{ marginLeft: "300px", width: "20%"}}>
              <center>Data is not found<br /><br />
                <img src="notfound.jpg" style={{ width: "70%" }} /></center> <br />
            </div>
            ) : (this.state.filteredData.map(i =>{
              return(
                <p style={{display:"inline-table",marginLeft:"30px"}}>
                <div className="student" style={{ background: "#99A3A4", width: "350px",height:"310px" ,marginRight: "40px",marginTop:"30px"}}>
                  <div className="details">
                    <div>
                      <div style={{ float: "right" }}>
                        <img src={"images/" + i.photo} style={{ width: "180px", height: "180px" }}
                          className="border border-danger rounded-circle"
                        />
                      </div>
                      <p >👨 <b style={{ color: "red" }}>Supplier ID   : </b>{i.supid}</p>
                      <p >🏃 <b style={{ color: "blue" }}>Full Name   : </b>{i.fullname}</p>
                      <p >🏡 <b style={{ color: "blue" }}>Address   : </b>{i.address}</p>
                      <p >📳 <b style={{ color: "blue" }}>Experience   : </b>{i.experience}</p>
                      <p >💌 <b style={{ color: "blue" }}>Item Purchased  : </b>{i.itempurchesed}</p>
                    </div>

                    <a href="/edit-supplier"><button className="btn btn-secondary">Edit</button></a>
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