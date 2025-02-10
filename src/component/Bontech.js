import React from "react";
import ceo from './images/ceo.jpg';
const Bontech=()=>{
    return(
        <div className="Bontech">

        <div className="left">
            <div id="about">
                <h1>About Us</h1>
                <h2>
                BonTech is a non-governmental organization (NGO) dedicated to providing cutting-edge solutions
        in the field of software development, online cyberservices, and technology-related issues. 
        Our mission is to drive technological innovation and provide sustainable, efficient, and secure
        tech solutions to organizations, communities, and individuals across the globe. 
                </h2>
                
            </div> 
            <div id="mission">
                <h1>Our Misson</h1>
                <h2>To help businesses and individuals thrive by delivering tailored solutions that drive growth, enhance efficiency, and ensure digital security. We aim to transform ideas into impactful solutions through a personalized approach and seamless execution.</h2>
            </div>
        </div>

        <div className="right">
            <img src={ceo} alt="ceo"></img>
            <div id="origin">
                <h1>Founded by Prof Emmanuel Okumu, a proficient software Engineer and professional graphic design , BONTECH Technologies began as a passion project and has evolved into a trusted partner for clients across diverse industries. Our journey is defined by relentless innovation, a commitment to excellence, and a dedication to building meaningful relationships with our clients. </h1>
            </div>
        </div>
        </div>
    )
}

export default Bontech;