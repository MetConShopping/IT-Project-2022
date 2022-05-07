import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Slider.css"



const AddSupplier = () => {

    const [loading, setLoading] = useState(false); //additional 
    const [isError, setIsError] = useState(false);


    const [newUser, setNewUser] = useState(
        {
            supid: '',
            fullname : '',
            address : '',
            experience : '',
            itempurchesed: '',
            photo: '',
            
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setIsError(false); //additional


        const formData = new FormData();
        formData.append('supid', newUser.supid);
        formData.append('fullname', newUser.fullname);
        formData.append('address', newUser.address);
        formData.append('experience', newUser.experience);
        formData.append('itempurchesed', newUser.itempurchesed);
        formData.append('photo', newUser.photo);
        
        axios.post('http://localhost:8070/supplier/add', formData) //add supplier data
             .then(res => {
                console.log(res);
                setLoading(false);
                toast("Success! Supplier Added");
                setNewUser({supid :'' , fullname : '' , address : '' , experience : '' , itempurchesed : '', photo : ''})
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
          <a className="navbar-brand" href="#" style={{color:"#CD5C5C"}}><b>Supplier Management System</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to = "/staff-supplier" style={{color:"#008080"}}><i class="fa fa-fw fa-home"></i>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to = "/add-supplier" style={{color:"#008080"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Create Supplier</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to = "/display-supplier" style={{color:"#008080"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Supplier</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to = "/update-supplier" style={{color:"#008080"}}><i class="fa fa-user-circle" aria-hidden="true"></i>Edit Profile</Link>
            </li> 
             
          </ul>
          </div>
        </div>
      </nav>
        <div className="stockImage"  style={{width:"100%"}}  ><br/><br/><br/>
            <form onSubmit={handleSubmit} encType='multipart/form-data' style={{width:"50%" , marginLeft:"auto" , marginRight:"auto" , display:"block" , background:"black" , padding:" 10px 10px 10px 10px" , opacity:"0.8"}}>
            <div className="cmb-3"><br/>
                <label for="supid" className="form-label">Supplier ID <span class = "required">*</span></label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Enter the supid"
                    name="supid"
                    value={newUser.supid}
                    onChange={handleChange} required pattern = "[0-9]{1,3}"
                /><br/>
                <label for="fullname" className="form-label"> Name <span class = "required">*</span></label>
                <input 
                    type="text"
                    placeholder="Enter the fullname"
                    className="form-control"
                    name="fullname"
                    value={newUser.fullname}
                    onChange={handleChange} required  pattern="[A-Za-z]+"
                /><br/> 
                <label for="address" className="form-label" >Address <span class = "required">*</span></label>
                <textarea 
                    rows = "5" cols = "50"
                    placeholder="Enter the address"
                    className="form-control"
                    name="address"
                    value={newUser.address}
                    onChange={handleChange} required
                /><br/>
                <label for="experience" className="form-label">Prior Experience <span class = "required">*</span></label>  
                 <input 
                    type="text"
                    placeholder="Enter the experience"
                    className="form-control"
                    name="experience"
                    value={newUser.experience}
                    onChange={handleChange} required pattern = "[0-9]{2}"
                /><br/>
                <label for="itempurchesed" className="form-label">Item Purchased <span class = "required">*</span></label>  
                 <input 
                    type="text"
                    placeholder="Enter the itempurchesed"
                    className="form-control"
                    name="itempurchesed"
                    value={newUser.itempurchesed}
                    onChange={handleChange} required 
                />   
            </div><br/>
            
                <h3 className="display-4" style={{color:"white", fontSize:"40px"}}>Upload a Photo of Supplier</h3> <br/>
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
                     <button style={{marginLeft:"230px"}}
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

export default AddSupplier;