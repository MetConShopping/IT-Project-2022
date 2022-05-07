import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Slider.css"


const AddItem = () => {

    const [loading, setLoading] = useState(false); //additional 
    const [isError, setIsError] = useState(false);


    const [newUser, setNewUser] = useState(
        {
            item_name: '',
            item_Id : '',
            description : '',
            discount_Rate : '',
            price: '',
            photo: '',
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);
        setIsError(false); //additional


        const formData = new FormData();
        formData.append('photo', newUser.photo);
        formData.append('item_name', newUser.item_name);
        formData.append('item_Id', newUser.item_Id);
        formData.append('description', newUser.description);
        formData.append('discount_Rate', newUser.discount_Rate);
        formData.append('price', newUser.price);

        axios.post('http://localhost:8070/item/add', formData) //add inventory data
             .then(res => {
                console.log(res);
                setLoading(false);
                toast("Success! Item Added");
                setNewUser({item_name :'' , item_Id : '' , description : '' , discount_Rate : '' , price : '', photo : ''})
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
                <Link className="nav-link active" to = "/add-item" style={{color:"#008080"}}><i class="fa fa-user-circle" aria-hidden="true"></i> Add Item</Link>
            </li> 
            <li className="nav-item">
                <Link className="nav-link" to = "/display-item" style={{color:"#008080"}}><i class="fa fa-desktop" aria-hidden="true"></i> Display Item</Link>
            </li> 
          </ul>
          </div>
        </div>
      </nav>
        <div className="marketingImage"  style={{width:"100%"}}  ><br/><br/><br/>
            <form onSubmit={handleSubmit} encType='multipart/form-data' style={{width:"50%" , marginLeft:"auto" , marginRight:"auto" , display:"block" , background:"black" , padding:" 10px 10px 10px 10px" , opacity:"0.8"}}>
            <div className="cmb-3"><br/>
                <label for="item_name" className="form-label">Item Name <span class = "required">*</span></label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Enter the name"
                    name="item_name"
                    value={newUser.item_name}
                    onChange={handleChange} required pattern = "[A-Za-z]+"
                /><br/>
                <label for="item_Id" className="form-label">Item Id <span class = "required">*</span></label>
                <input 
                    type="text"
                    placeholder="Enter the id"
                    className="form-control"
                    name="item_Id"
                    value={newUser.item_Id}
                    onChange={handleChange} required  pattern="[A-Za-z]{0-9}"
                /><br/>
                <label for="description" className="form-label">Description <span class = "required">*</span></label>
                <input 
                    type="text"
                    placeholder="Enter the description"
                    className="form-control"
                    name="description"
                    value={newUser.description}
                    onChange={handleChange} required pattern = "[A-Za-z]+"
                /><br/> 
                <label for="discount_Rate" className="form-label" >Discount Rate <span class = "required">*</span></label>
                <input 
                    type="text"
                    placeholder="Enter the stockIn"
                    className="form-control"
                    name="discount_Rate"
                    value={newUser.discount_Rate}
                    onChange={handleChange} required pattern = "[0-9]+"
                /><br/>
                <label for="price" className="form-label">Price <span class = "required">*</span></label>  
                 <input 
                    type="text"
                    placeholder="Enter the Price"
                    className="form-control"
                    name="price"
                    value={newUser.price}
                    onChange={handleChange} required pattern = "[0-9]+"
                />   
            </div><br/>
            
                <h3 className="display-4" style={{color:"white", fontSize:"40px"}}>Upload a Photo of Item</h3> <br/>
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

export default AddItem;
