import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import TableRow from './ItemTableRow';
import {Link} from "react-router-dom";


export default class ItemList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8070/item')
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
      return <TableRow obj={res} key={i} />;
    });
  }


  render() {
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
        <div className=" marketingImage">
          <br/>
        <Link to = "/irepot">
        <div>
          <button className = "info__button" onClick={this.generatePDF} type = "primary" style={{float:"right", marginBottom:"50px",width:"200px",marginRight:"20px"}}><i class="fa fa-cogs" aria-hidden="true"></i> Genarate PDF</button>
        </div>
        </Link>
        
        <br/><br/>
            <div className="table-wrapper container">
                <Table striped bordered hover style={{background:"#000000" , padding:"20px 20px 20px 20px" , opacity:"0.9"}}>
                    <thead>
                        <tr>
                            <th style={{color:"white"}}>Item Id</th>
                            <th style={{color:"white"}}>Item Name</th>
                            <th style={{color:"white"}}>Description</th>
                            <th style={{color:"white"}}>Discount Rate</th>
                            <th style={{color:"white"}}>Price</th>
                            <th style={{color:"white"}}>Photo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.DataTable()}
                    </tbody>
                </Table>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
    </div>
    );
  }
}