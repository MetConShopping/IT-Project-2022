import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Slider.css"



const EditInventory = () => {

  const [loading, setLoading] = useState(false); //additional 
  const [isError, setIsError] = useState(false);

  const { id } = useParams()


  const [newUser, setNewUser] = useState(
    {
      itemName: '',
      itemId: '',
      stock: '',
      stockIn: '',
      stockOut: '',
      unitPrice: '',
      photo: '',
    }
  );

  useEffect(() => {
    (async () => await fetch(`http://localhost:8070/inventory/get/${id}`).then((res) => res.json()).then(json => setNewUser(json)))()
    
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setIsError(false); //additional


    const formData = new FormData();
    formData.append('photo', newUser.photo);
    formData.append('itemName', newUser.itemName);
    formData.append('itemId', newUser.itemId);
    formData.append('stock', newUser.stock);
    formData.append('stockIn', newUser.stockIn);
    formData.append('stockOut', newUser.stockOut);
    formData.append('unitPrice', newUser.unitPrice);

    axios.put(`http://localhost:8070/inventory/update/${id}`, formData) //update Inventory data
      .then(res => {
        console.log(res);
        setLoading(false);
        toast("Success! inventory Updated");
        setNewUser({ itemName: '', itemId: '', stock: '', stockIn: '', stockOut: '', unitPrice: '', photo: '' })
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
        setIsError(true);
        toast(JSON.stringify(err));

      });
  }

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  }

  const handlePhoto = (e) => {
    setNewUser({ ...newUser, photo: e.target.files[0] });
  }


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "#CD5C5C" }}><b>Stock Management System</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/staff-stock" style={{ color: "#008080" }}><i class="fa fa-fw fa-home"></i>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add-stock" style={{ color: "#008080" }}><i class="fa fa-user-circle" aria-hidden="true"></i> Add Assistant</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/display-stock" style={{ color: "#008080" }}><i class="fa fa-desktop" aria-hidden="true"></i> Display Assistants</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/addInven-stock" style={{ color: "#008080" }}><i class="fa fa-user-circle" aria-hidden="true"></i> Add Inventory</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/displayInven-stock" style={{ color: "#008080" }}><i class="fa fa-desktop" aria-hidden="true"></i> Display Inventories</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="#" style={{ color: "#008080" }}><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Inventory</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="editBackground" style={{ width: "100%" }}  ><br /><br /><br />
        <form onSubmit={handleSubmit} encType='multipart/form-data' style={{ width: "35%", marginLeft: "auto", marginRight: "auto", display: "block", background: "#ccffff", padding: " 10px 10px 10px 10px", opacity: "0.8" }}>
          <div className="cmb-3"><br />
            <label for="itemName" className="form-label" style={{color:"black"}}>Item Name <span class="required">*</span></label>
            <input
              style={{width:"70%"}}
              type="text"
              className="form-control"
              placeholder="Enter Item Name"
              name="itemName"
              value={newUser.itemName}
              onChange={handleChange} required pattern="[A-Za-z-]+"
            /><br />
            <label for="itemId" className="form-label" style={{color:"black"}}>Item Id <span class="required">*</span></label>
            <input
             style={{width:"70%"}}
              type="text"
              placeholder="Enter the ItemId"
              className="form-control"
              name="itemId"
              value={newUser.itemId}
              onChange={handleChange} required pattern="[A-Za-z]{0-9}+"
            /><br />
            <label for="stock" className="form-label" style={{color:"black"}}>Stock <span class="required">*</span></label>
            <input
             style={{width:"70%"}}
              type="text"
              placeholder="Enter the stock"
              className="form-control"
              name="stock"
              value={newUser.stock}
              onChange={handleChange} required pattern="[0-9]+"
            /><br />
            <label for="stockIn" className="form-label" style={{color:"black"}}>Stock In <span class="required">*</span></label>
            <input
             style={{width:"70%"}}
              type="text"
              placeholder="Enter the stockIn"
              className="form-control"
              name="stockIn"
              value={newUser.stockIn}
              onChange={handleChange} required pattern="[0-9]+"
            /><br />
            <label for="stockOut" className="form-label" style={{color:"black"}}>Stock Out <span class="required">*</span></label>
            <input
             style={{width:"70%"}}
              type="text"
              placeholder="Enter the stock Out"
              className="form-control"
              name="stockOut"
              value={newUser.stockOut}
              onChange={handleChange} required pattern="[0-9]+"
            /><br />
            <label for="unitPrice" className="form-label" style={{color:"black"}}>Unit Price <span class="required">*</span></label>
            <input
             style={{width:"70%"}}
              type="text"
              placeholder="Enter the Unit Price"
              className="form-control"
              name="unitPrice"
              value={newUser.unitPrice}
              onChange={handleChange} required pattern="[0-9.]+"
            />
          </div><br />

          <h3 className="display-4" style={{ color: "black", fontSize: "40px" }}>Upload a Photo of Item</h3> <br />
          <p className="lead" style={{ color: "black", fontSize: "13px" }}>
            Please choose a valid relavant photo

            <i class="fa fa-folder-open" aria-hidden="true" style={{ marginLeft: "10px" }}></i>
            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              name="photo"
              onChange={handlePhoto} required style={{ color: "#000000" }}
            />
          </p>
          <img src={"/images/" + newUser.photo} style={{width:"200px"}} />

          <div>
            {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}
            {/*decision*/}
            <button style={{ marginLeft: "200px" }}
              type="submit"
              className="btn btn-primary mt-3"
              disabled={loading}
            ><i class="fa fa-upload" aria-hidden="true" ></i> {loading ? 'Uploading...' : 'Upload'}
            </button>
            <ToastContainer style={{ marginTop: "50px" }} />

          </div>
          <br />
        </form>
        <br /><br /><br />
      </div>
    </div>

  );
}

export default EditInventory;