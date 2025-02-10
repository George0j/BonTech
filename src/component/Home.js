import React, { useEffect, useState } from "react";
const Home=()=>{

    const [greeting,setGreeting]=useState("");
    useEffect(()=>{
        const hours=new Date().getHours();
        let message="Good Morning";

        if(hours<12){
            message="Good Morning";
        }
        else if(hours<18){
            message = "Good Afternoon";
        }

        setGreeting(`${message}, Welcome to Bontech Technologies, your Tech Partner 4G`);
    }, []);

    const offers=[
        "web design",
        "web development",
        "Software Development",
        "Fullstack development"
    ];

    const[currentOffer,setCurrentOffer]=useState(0);

    useEffect(()=>{
        const interval=setInterval(()=>{
            setCurrentOffer((prevOffer)=>
                (prevOffer + 1)%offers.length);
        },2000);

        return()=> clearInterval(interval);
    },[offers.length]);

return(
    <div className="home">
        <div className="left">
            <h1>{greeting}</h1>
        <h4>BonTech Offers :</h4>
        <div className="display">
            {offers[currentOffer]}
        </div>
        <h3>We focus on understanding and meeting our clients' needs, delivering a seamless experience while consistently exceeding expectations at every stage.</h3>
        <h6>ALL SOFTWARE SOLUTIONS OFFERED HERE</h6>
        <div className="contact">
    <div className="email-section">
        <p>Email:</p>
        <h1 ><a href="mailto:otienogeorge9851@gmail.com">otienogeorge9851@gmail.com</a></h1>
    </div>
    <div className="contact-section">
        <p>Contact:</p>
        <h1>+254113597231</h1>
    </div>
</div>
        </div>  
        <div className="right"><h1>Bontech</h1>
        <h4>Technologies</h4></div>
    </div>
)
}

export default Home;