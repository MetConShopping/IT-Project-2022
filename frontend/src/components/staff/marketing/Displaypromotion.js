import React from 'react';
import { Link } from "react-router-dom";

export default class DisplayPromotion extends React.Component {
  state = {
    query: "",
    data: [],
    filteredData: []
  };

  handleInputChange = event => {
    const query = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.item_name.toLowerCase().includes(query.toLowerCase());
      });

      return {
        query,
        filteredData
      };
    });
  };

  getData = () => {
    fetch('http://localhost:8070/promotion/')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const { query } = this.state;
        const filteredData = data.filter(element => {
          return (
            element.item_name.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.quantity.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.discription.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.discount_Rate.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.prior_price.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.present_price.toLowerCase().includes(query.toLowerCase()) >= 0 ||
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
            <a className="navbar-brand" href="#" style={{ color: "#CD5C5C" }}><b>Marketing Management System</b></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/staff-marketing" style={{ color: "#008080" }}><i class="fa fa-fw fa-home"></i>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-promotion" style={{ color: "#008080" }}><i class="fa fa-user-circle" aria-hidden="true"></i>  Add Promotion</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/display-promtion" style={{ color: "#008080" }}><i class="fa fa-desktop" aria-hidden="true"></i> Display Promotion</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-item" style={{ color: "#008080" }}><i class="fa fa-user-circle" aria-hidden="true"></i> Add Item</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/display-item" style={{ color: "#008080" }}><i class="fa fa-desktop" aria-hidden="true"></i> Display Item</Link>
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
        <div className="App marketingImage2" >
          <br />
          <h1 style={{ color: "white", marginLeft: "500px" }}>All Promotions</h1><br />

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
                      <p > <b style={{ color: "red" }}>Item name  : </b>{i.item_name}</p>
                      <p > <b style={{ color: "green" }}>Quantity   : </b>{i.quantity}</p>
                      <p > <b style={{ color: "blue" }}>Description   : </b>{i.description}</p>
                      <p > <b style={{ color: "red" }}>Discount Rate   : </b>{i.discount_Rate}</p>
                      <p > <b style={{ color: "green" }}>Prior price   : </b>{i.prior_price}</p>
                      <p > <b style={{ color: "blue" }}>Present price   : </b>{i.present_price}</p>
                    </div>

                    <a href="/edit-promotion"><button className="btn btn-secondary">Edit</button></a>
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