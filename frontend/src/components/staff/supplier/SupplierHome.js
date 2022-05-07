import React from "react";
import "./Slider.css"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    'back12.jpg',
    'back4.jpg',
    'back01.jpg'
  ];

export default function SupplierHome(){
    return(
     <div> 
        
        <div>
            <Slide easing="ease">
            <div className="each-slidestock">
                <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                <h1 style={{color:"white" , fontSize:"50px" , backgroundColor:"black" , opacity:"0.6" , padding: "20px 20px" }}>☸️❤️ Welcome to the Supplier Management System ❤️✝️</h1>
                </div>
            </div>
            <div className="each-slidestock">
                <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                <h1 style={{color:"white" , fontSize:"50px" , backgroundColor:"black" , opacity:"0.6" , padding: "20px 20px" }}>"If you count all your assets you always show a profit." </h1>
                </div>
            </div>
            <div className="each-slidestock">
                <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                <h1 style={{color:"white" , fontSize:"50px" , backgroundColor:"black" , opacity:"0.8" , padding: "20px 20px",  top: "50px" }}>“Too much of a good thing can be wonderful.”</h1>
                </div>
            </div>
            </Slide>
        </div>   
    </div>
       
       
    )
}