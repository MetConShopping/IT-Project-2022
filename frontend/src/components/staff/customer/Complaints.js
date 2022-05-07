import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Slider.css";

const Complaints = () => {

    const [loading, setLoading] = useState(false); //additional 
    const [isError, setIsError] = useState(false);


    const [newUser, setNewUser] = useState(
        {
          complaintID : '',
          cusName : '',
          date : '',
          email : '',
          description: '',
          photo: '',
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setIsError(false); //additional


        const formData = new FormData();
        formData.append('complaintID', newUser.complaintID);
        formData.append('cusName', newUser.cusName);
        formData.append('date', newUser.date);
        formData.append('email', newUser.email);
        formData.append('description', newUser.description);
        formData.append('photo', newUser.photo);

        axios.post('http://localhost:8070/complaint/add', formData) //add complaint data
             .then(res => {
                //console.log(res);
                setLoading(false);
                toast("Success! Complaint Added");
                setNewUser({complaintID :'' , cusName :'' , date : '' , email : '' , description : '' ,  photo : ''})
             })
             .catch(err => {
                //console.log(err);
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
              <Link className="nav-link" to = "/display-customer" style={{color:"#008080"}}><i className="fa fa-desktop" aria-hidden="true"></i> Display Customer</Link>
            </li> 
            
            <li className="nav-item">
                <Link className="nav-link active" to = "/Complaints" style={{color:"#008080"}}><i className="fa fa-desktop" aria-hidden="true"></i> Complaints</Link>
            </li> 
             
          </ul>
        </div>
        </div>
        <Link to="/"><button className="btn btn-primary">LogOut</button></Link> 
      </nav>
        <div className="customerImage4"  style={{width:"100%"}}  ><br/>
        <h1 style={{ color: "white", marginLeft: "500px" }}><b>....Add Customer Complaints....</b></h1>
        <Link to="/AllComplaints"><button  style={{marginLeft:"1250px" }} className="btn btn-secondary">VIEW</button></Link> 
            <form onSubmit={handleSubmit} encType='multipart/form-data' style={{width:"50%" , marginLeft:"auto" , marginRight:"auto" , display:"block" , background:"black" , padding:" 10px 120px 10px 120px" , opacity:"0.8"}}>
            <div className="cmb-3"><br/>
            <label for="nic" className="form-label">Complaint ID <span className = "required">*</span></label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Enter the complaint ID"
                    name="complaintID"
                    value={newUser.complaintID}
                    onChange={handleChange} required pattern = "[0-9A-Za-z]{4,6}"
                /><br/>
                <label for="name" className="form-label">Customer Name <span className = "required">*</span></label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Enter the customer name"
                    name="cusName"
                    value={newUser.cusName}
                    
                    onChange={handleChange} required pattern = "[A-Za-z]+"
                /><br/>
                <label for="age" className="form-label">Date <span className = "required">*</span></label>
                <input 
                    type="date"
                    placeholder="Enter the date"
                    className="form-control"
                    name="date"
                    value={newUser.date}
                    onChange={handleChange} required  
                /><br/>
                <label for="gender" className="form-label">Email <span className = "required">*</span></label>
                <input 
                    type="text"
                    placeholder="Enter the email"
                    className="form-control"
                    name="email"
                    value={newUser.email}
                    onChange={handleChange} required pattern = "[0-9a-zA-Z%&$@.]+@[a-zA-Z]+\.+[a-zA-Z]{2,3}"
                /><br/> 
               <label for="description" className="form-label" >Description <span className = "required">*</span></label>
                <textarea 
                    rows = "3" cols = "50"
                    placeholder="Enter the description"
                    className="form-control"
                    name="description"
                    value={newUser.description}
                    onChange={handleChange} required
                />   
            </div><br/>

            <h3 className="display-4" style={{color:"white", fontSize:"25px"}}>Upload a Imoji</h3> <br/>
                <p className="lead" style={{color:"white", fontSize:"13px"}}>
                Please choose a valid relavant imoji
               
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
                        ><i class="fa fa-upload" aria-hidden="true" ></i> {loading ? 'Uploading...' : 'CREATE'}
                     </button>
                     <ToastContainer style = {{marginTop:"50px"}}/>
                     <br/>
            </div>
        </form>
        <br/>
        </div>
        </div>
        
    );
}

export default Complaints;