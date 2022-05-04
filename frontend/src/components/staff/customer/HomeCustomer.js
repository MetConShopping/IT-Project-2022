import React from "react";
import "./Slider.css"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    'customer1.jpg',
    'customer2.jpg',
    'customer3.jpg'
  ];

export default function HomeCustomer(){
    return(
     <div> 
        
        <div>
            <Slide easing="ease">
            <div className="each-slidestock">
                <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                <h1 style={{color:"white" , fontSize:"50px" , backgroundColor:"black" , opacity:"0.6" , padding: "20px 20px" }}>☸️❤️ Welcome to Customer Management System ❤️✝️</h1>
                </div>
            </div>
            <div className="each-slidestock">
                <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                <h1 style={{color:"white" , fontSize:"50px" , backgroundColor:"black" , opacity:"0.6" , padding: "20px 20px" }}>.....You can get quick & best service from us..... </h1>
                </div>
            </div>
            <div className="each-slidestock">
                <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                <h1 style={{color:"white" , fontSize:"50px" , backgroundColor:"black" , opacity:"0.8" , padding: "20px 20px",  top: "50px" }}>!....Too much of a good thing can be wonderful....!</h1>
                </div>
            </div>
            </Slide>
        </div>   
    </div>
       
       
    )
}