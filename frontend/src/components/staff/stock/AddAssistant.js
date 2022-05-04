import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Slider.css"



const AddAssistant = () => {

    const [loading, setLoading] = useState(false); //additional 
    const [isError, setIsError] = useState(false);


    const [newUser, setNewUser] = useState(
        {
            name: '',
            age : '',
            gender : '',
            phone : '',
            address: '',
            email: '',
            photo: '',
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setIsError(false); //additional


        const formData = new FormData();
        formData.append('photo', newUser.photo);
        formData.append('phone', newUser.phone);
        formData.append('name', newUser.name);
        formData.append('age', newUser.age);
        formData.append('gender', newUser.gender);
        formData.append('address', newUser.address);
        formData.append('email', newUser.email);

        axios.post('http://localhost:8070/assistant/add', formData) //add assistant data
             .then(res => {
                console.log(res);
                setLoading(false);
                toast("Success! Assistant Added");
                setNewUser({name :'' , age : '' , gender : '' , phone : '' , addreass : '' , email : '' , photo : ''})
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


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" >
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
              <Link className="nav-link active" to = "/add-stock" style={{color:"#008080"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Add Assistant</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/display-stock" style={{color:"#008080"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Assistants</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to = "/addInven-stock" style={{color:"#008080"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Add Inventory</Link>
            </li> 
            <li className="nav-item">
                <Link className="nav-link" to = "/displayInven-stock" style={{color:"#008080"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Inventories</Link>
            </li> 
          </ul>
          </div>
        </div>
      </nav>
        <div className="stockImage"  style={{width:"100%"}}  ><br/><br/><br/>
            <form onSubmit={handleSubmit} encType='multipart/form-data' style={{width:"40%" , marginLeft:"auto" , marginRight:"auto" , display:"block" , background:"#ccffff" , padding:" 10px 10px 10px 10px" , opacity:"0.8"}}>
            <div className="cmb-3"><br/>
                <label for="name" className="form-label" style={{color:"black", marginLeft:"25px"}}>Name <span class = "required">*</span></label>
                <input 
                    style={{width:"80%", marginLeft:"25px"}}
                    type="text"
                    className="form-control"
                    placeholder="Enter the name"
                    name="name"
                    value={newUser.name}
                    onChange={handleChange} required pattern = "[A-Za-z]+"
                /><br/>
                <label for="age" className="form-label" style={{color:"black", marginLeft:"25px"}}>Age <span class = "required">*</span></label>
                <input 
                    style={{width:"80%", marginLeft:"25px"}}
                    type="text"
                    placeholder="Enter the age"
                    className="form-control"
                    name="age"
                    value={newUser.age}
                    onChange={handleChange} required  pattern="[0-9]{1,3}"
                /><br/>
                <label for="gender" className="form-label" style={{color:"black", marginLeft:"25px"}}>Gender <span class = "required">*</span></label>
                <input 
                    style={{width:"80%", marginLeft:"25px"}}
                    type="text"
                    placeholder="Enter the gender"
                    className="form-control"
                    name="gender"
                    value={newUser.gender}
                    onChange={handleChange} required pattern = "[A-Za-z]+"
                /><br/> 
                <label for="address" className="form-label" style={{color:"black", marginLeft:"25px"}}>Address <span class = "required">*</span></label>
                <textarea 
                    style={{width:"80%", marginLeft:"25px"}}
                    rows = "5" cols = "50"
                    placeholder="Enter the address"
                    className="form-control"
                    name="address"
                    value={newUser.address}
                    onChange={handleChange} required
                /><br/>
                <label for="phone" className="form-label" style={{color:"black", marginLeft:"25px"}}>Phone <span class = "required">*</span></label>  
                 <input 
                    style={{width:"80%", marginLeft:"25px"}}
                    type="text"
                    placeholder="Enter the phone"
                    className="form-control"
                    name="phone"
                    value={newUser.phone}
                    onChange={handleChange} required pattern = "[0-9]{10}"
                /><br/>
                <label for="email" className="form-label" style={{color:"black", marginLeft:"25px"}}>Email <span class = "required">*</span></label>  
                 <input 
                    style={{width:"80%", marginLeft:"25px"}}
                    type="text"
                    placeholder="Enter the email"
                    className="form-control"
                    name="email"
                    value={newUser.email}
                    onChange={handleChange} required pattern = "[0-9a-zA-Z%&$@.]+@[a-zA-Z]+\.+[a-zA-Z]{2,3}"
                />   
            </div><br/>
            
                <h3 className="display-4" style={{color:"black", fontSize:"40px"}}>Upload a Photo of Assistant</h3> <br/>
                <p className="lead" style={{color:"black", fontSize:"13px"}}>
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
                     <button style={{marginLeft:"200px"}}
                        type="submit"
                        className="btn btn-primary mt-3"
                        disabled={loading}
                        ><i class="fa fa-upload" aria-hidden="true" ></i> {loading ? 'Uploading...' : 'Upload'}
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

export default AddAssistant;