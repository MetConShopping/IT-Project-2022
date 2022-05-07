import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Slider.css";


const AddCustomer = () => {

    const [loading, setLoading] = useState(false); //additional 
    const [isError, setIsError] = useState(false);


    const [newUser, setNewUser] = useState(
        {
            nic : '',
            name : '',
            age : '',
            gender : '',
            address: '',
            contactNo: '',
            email: '',
            photo: '',
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setIsError(false); //additional


        const formData = new FormData();
        formData.append('nic', newUser.nic);
        formData.append('name', newUser.name);
        formData.append('age', newUser.age);
        formData.append('gender', newUser.gender);
        formData.append('address', newUser.address);
        formData.append('contactNo', newUser.contactNo);
        formData.append('email', newUser.email);
        formData.append('photo', newUser.photo);

        axios.post('http://localhost:8070/customer/add', formData) //add customer data
             .then(res => {
                console.log(res);
                setLoading(false);
                toast("Success! Customer Added");
                setNewUser({nic :'' , name :'' , age : '' , gender : '' , address : '' , contactNo : '' , email : '',  photo : ''})
             })
             .catch(err => {
                console.log(err);
                setLoading(false);
                setIsError(true);
                toast(JSON.stringify(err));
                
             });
    }

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        setNewUser({...newUser, photo: e.target.files[0]});
    }
    
//header
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
              <Link className="nav-link active" to = "/add-customer" style={{color:"#008080"}}><i className="fa fa-user-circle" aria-hidden="true"></i> Add Customer</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/display-customer" style={{color:"#008080"}}><i className="fa fa-desktop" aria-hidden="true"></i> Display Customer</Link>
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


        <div className="customerImage"  style={{width:"100%"}}  ><br/><br/><br/>
        <h1 style={{ color: "white", marginLeft: "500px" }}><b>....Create Customer Profile....</b></h1><br />
            <form onSubmit={handleSubmit} encType='multipart/form-data' style={{width:"50%" , marginLeft:"auto" , marginRight:"auto" , display:"block" , background:"black" , padding:" 20px 120px 20px 120px" , opacity:"0.9"}}>
            <div className="cmb-3"><br/>
            <label for="nic" className="form-label">NIC <span className = "required">*</span></label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Enter the nic number"
                    name="nic"
                    value={newUser.nic}
                    onChange={handleChange} required pattern = "[0-9A-Za-z]{10,12}"
                /><br/>
                <label for="name" className="form-label">Name <span className = "required">*</span></label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Enter the name"
                    name="name"
                    value={newUser.name}
                    onChange={handleChange} required pattern = "[A-Za-z]+"
                /><br/>
                <label for="age" className="form-label">Age <span className = "required">*</span></label>
                <input 
                    type="text"
                    placeholder="Enter the age"
                    className="form-control"
                    name="age"
                    value={newUser.age}
                    onChange={handleChange} required  pattern="[0-9]{1,3}"
                /><br/>
                <label for="gender" className="form-label">Gender <span className = "required">*</span></label>
                <input 
                    type="text"
                    placeholder="Enter the gender"
                    className="form-control"
                    name="gender"
                    value={newUser.gender}
                    onChange={handleChange} required pattern = "[A-Za-z]+"
                /><br/> 
                <label for="address" className="form-label" >Address <span className = "required">*</span></label>
                <textarea 
                    rows = "1" cols = "10"
                    placeholder="Enter the address"
                    className="form-control"
                    name="address"
                    value={newUser.address}
                    onChange={handleChange} required
                /><br/>
                <label for="contactNo" className="form-label">Contact NO <span className = "required">*</span></label>  
                 <input 
                    type="text"
                    placeholder="Enter the contactNo"
                    className="form-control"
                    name="contactNo"
                    value={newUser.contactNo}
                    onChange={handleChange} required pattern = "[0-9]{10}"
                /><br/>
                <label for="email" className="form-label">Email <span className = "required">*</span></label>  
                 <input 
                    type="text"
                    placeholder="Enter the email"
                    className="form-control"
                    name="email"
                    value={newUser.email}
                    onChange={handleChange} required pattern = "[0-9a-zA-Z%&$@.]+@[a-zA-Z]+\.+[a-zA-Z]{2,3}"
                />   
            </div><br/>

            <h3 className="display-4" style={{color:"white", fontSize:"25px"}}>Upload a Photo of Customer</h3> <br/>
                <p className="lead" style={{color:"white", fontSize:"13px"}}>
                Please choose a valid relavant photo
               
                <i class="fa fa-folder-open" aria-hidden="true" style={{marginLeft:"10px"}}></i>
                <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={handlePhoto} required style={{color:"#000000"}}
                />
                </p>
           
            <div>
            {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}
                     {/*decision*/}
                     <button style={{marginLeft:"180px"}}
                        type="submit"
                        className="btn btn-success mt-3"
                        disabled={loading}
                        ><i class="fa fa-upload" aria-hidden="true" ></i> {loading ? 'Uploading...' : 'CREATE'}
                     </button>
                     <ToastContainer style = {{marginTop:"50px"}}/>
                    
            </div>
            <br/>
        </form>
        <br/><br/><br/>
        </div>
        </div>
        
    );
}

export default AddCustomer;