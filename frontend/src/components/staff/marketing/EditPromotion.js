import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Slider.css"



const EditPromotion = () => {

  const [loading, setLoading] = useState(false); //additional 
  const [isError, setIsError] = useState(false);

  const { id } = useParams()


  const [newUser, setNewUser] = useState(
    {   
        item_name:'',
        quantity:'',
        description:'',
        discount_Rate:'',
        prior_price:'',
        present_price:'',
        photo: '',
    }
  );

  useEffect(() => {
    (async () => await fetch(`http://localhost:8070/promotion/get/${id}`).then((res) => res.json()).then(json => setNewUser(json)))()
    
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setIsError(false); //additional


    const formData = new FormData();
    formData.append('photo', newUser.photo);
    formData.append('item_name', newUser.item_name);
    formData.append('quantity', newUser.quantity);
    formData.append('description', newUser.description);
    formData.append('discount_Rate', newUser.discount_Rate);
    formData.append('prior_price', newUser.prior_price);
    formData.append('present_price', newUser.present_price);


    axios.put(`http://localhost:8070/promotion/update/${id}`, formData) //update Item data
      .then(res => {
        console.log(res);
        setLoading(false);
        toast("Success! Item Updated");
        setNewUser({ item_name :'' , quantity : '' , description : '' , discount_Rate : '' , prior_price : '',present_price:'', photo : '' })
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
                <Link className="nav-link " to = "/add-item" style={{color:"#008080"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Add Item</Link>
            </li> 
            <li className="nav-item">
                <Link className="nav-link" to = "/display-item" style={{color:"#008080"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Item</Link>
            </li>           
            <li className="nav-item">
                <Link className="nav-link active" to="#" style={{ color: "#008080" }}><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit Promotion</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="marketingImage" style={{ width: "100%" }}  ><br /><br /><br />
        <form onSubmit={handleSubmit} encType='multipart/form-data' style={{ width: "35%", marginLeft: "auto", marginRight: "auto", display: "block", background: "#ccffff", padding: " 10px 10px 10px 10px", opacity: "0.8" }}>
          <div className="cmb-3"><br />
            <label for="item_name" className="form-label" style={{color:"black"}}>Item Name <span class="required">*</span></label>
            <input
              style={{width:"70%"}}
              type="text"
              className="form-control"
              placeholder="Enter Item Name"
              name="item_name"
              value={newUser.item_name}
              onChange={handleChange} required pattern="[A-Za-z]+"
            /><br />
            <label for="quantity" className="form-label" style={{color:"black"}}>Quantity <span class="required">*</span></label>
            <input
             style={{width:"70%"}}
              type="text"
              placeholder="Enter the quantity"
              className="form-control"
              name="quantity"
              value={newUser.quantity}
              onChange={handleChange} required pattern="[0-9]{1,5}"
            /><br />
            <label for="description" className="form-label" style={{color:"black"}}>Description <span class="required">*</span></label>
            <input
             style={{width:"70%"}}
              type="text"
              placeholder="Enter the description"
              className="form-control"
              name="description"
              value={newUser.description}
              onChange={handleChange} required pattern="[A-Za-z]+"
            /><br />
            <label for="discount_Rate" className="form-label" >Discount Rate <span class = "required">*</span></label>
                <input 
                    type="text"
                    placeholder="Enter the rate"
                    className="form-control"
                    name="discount_Rate"
                    value={newUser.discount_Rate}
                    onChange={handleChange} required pattern = "[0-9]+"
                /><br/>
                <label for="prior_price" className="form-label">Prior Price <span class = "required">*</span></label>  
                 <input 
                    type="text"
                    placeholder="Enter the Prior Price"
                    className="form-control"
                    name="prior_price"
                    value={newUser.prior_price}
                    onChange={handleChange} required pattern = "[0-9]+"
                /><br/>
                <label for="present_price" className="form-label">Present Price <span class = "required">*</span></label>  
                 <input 
                    type="text"
                    placeholder="Enter the Price"
                    className="form-control"
                    name="present_price"
                    value={newUser.present_price}
                    onChange={handleChange} required pattern = "[0-9]+"
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

export default EditPromotion;