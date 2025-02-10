import React,{useState}from 'react';

const Connect =()=>{

    const [contactData,setcontactData]=useState({
        fullname:"",
        email:"",
        address:"",
        phone:"",
        request:"",
    });

    const[errors,setErrors]=useState({});

    const handleChange=(e)=>{
        setcontactData({...contactData,[e.target.name]:e.target.value});
    };

    const ValidateForm=()=>{
        let newErrors = {};

        if (!contactData.fullname.trim()) {
            newErrors.fullname = "Full name is required";
        }

        if (!contactData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!contactData.address.trim()) {
            newErrors.address = "Address is required";
        }

        if (!contactData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{10,15}$/.test(contactData.phone)) {
            newErrors.phone = "Phone number must be between 10-15 digits";
        }

        if (!contactData.request.trim()) {
            newErrors.request = "Request details are required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(!ValidateForm()){
            return;
        }

        const whtz="254713855011";

        const msg=`Hello Bontech Technologies, my name is *${contactData.fullname}*'.Below are my details and Service Request:\n\n`
        + `*Email:* ${contactData.email}\n`
        + `*Address:* ${contactData.address}\n`
        + `*Phone:* ${contactData.phone}\n`
        + `*Request:* ${contactData.request}\n\n`;

        const encodedMessage = encodeURIComponent(msg);
        
        const whtzURL=`https://wa.me/${whtz}?text=${encodedMessage}`;

        setcontactData({
    
                fullname: "",
                email: "",
                address: "",
                phone: "",
                request: "",
        })


        window.open(whtzURL,"_blank");
    }

    return(
        <div className='connect'>
            <div id='form'>
            <h1>Contact BonTech</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="fullname" 
                    placeholder="Enter Your Full Name eg Emmanuel Okumu" 
                    value={contactData.fullname}
                    onChange={handleChange}
                    required
                />
                 {errors.fullname && <p className="error">{errors.fullname}</p>}


                <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter Your Valid Email eg (otienogeorge9851@gmail.com)" 
                    value={contactData.email}
                    onChange={handleChange}
                    required 
                />
                {errors.email && <p className="error">{errors.email}</p>}


                <input 
                    type="text" 
                    name="address" 
                    placeholder="Enter Your Current Address eg. P.O Box 90129 - 210" 
                    value={contactData.address}
                    onChange={handleChange}
                    required 
                />
                {errors.phone && <p className="error">{errors.phone}</p>}


                <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Enter your Phone Number" 
                    value={contactData.phone}
                    onChange={handleChange}
                    required 
                />
                <textarea 
                    name="request" 
                    rows="4" 
                    placeholder="Enter Your Request eg. (I need a website, poster etc)" 
                    value={contactData.request}
                    onChange={handleChange}
                    required 
                />
                {errors.request && <p className="error">{errors.request}</p>}


                <button type="submit">Submit</button>
            </form>
            </div>
            <div className='social-media'></div>
        </div>
    )
}

export default Connect;