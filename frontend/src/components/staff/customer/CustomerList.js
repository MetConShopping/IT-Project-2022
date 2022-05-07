import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import TableRowCustomer from './TableRowCustomer';
import {Link} from "react-router-dom";
import Header from './Header';
export default class CustomerList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8070/customer')
      .then(res => {
        this.setState({
          students: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.students.map((res, i) => {
      return <TableRowCustomer obj={res} key={i} />;
    });
  }


  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" >
      <div className="container-fluid">
  <a className="navbar-brand" href="#" style={{color:"#CD5C5C" , fontSize:"25px"}}><b>CUSTOMER MANAGEMENT SYSTEM</b></a>
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
        <Link className="nav-link active" to = "/display-customer" style={{color:"#008080"}}><i className="fa fa-desktop" aria-hidden="true"></i> Display Customer</Link>
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
        <div className=" customerImage">
          <br/>
        <Link to = "/customerreport">
        <div >
          <button className = "info__button" onClick={this.generatePDF} type = "primary" style={{float:"right", marginBottom:"50px",width:"200px",marginRight:"20px"}}><i class="fa fa-cogs" aria-hidden="true"></i> Genarate PDF</button>
        </div>
        </Link>

     
          <div className="table-wrapper container ">
              <Table striped bordered hover style={{background:"#000000" , padding:"20px 20px 20px 20px" , opacity:"0.9"}}>
                  <thead>
                      <tr>
                          <th style={{color:"white"}}>NIC</th>
                          <th style={{color:"white"}}>Name</th>
                          <th style={{color:"white"}}>Age</th>
                          <th style={{color:"white"}}>Gender</th>
                          <th style={{color:"white"}}>Address</th>
                          <th style={{color:"white"}}>Contact NO</th>
                          <th style={{color:"white"}}>Email</th>
                          <th style={{color:"white"}}>Photo</th>
                      </tr>
                  </thead>
                  <tbody>
                      {this.DataTable()}
                  </tbody>
              </Table>
          </div>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
    </div>
    
    );
  }
}