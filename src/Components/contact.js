import React, { useState } from "react";
import "firebase/database";
import './Styles/contact.css'

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    experience: "",
    cover:"",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, address, experience,cover } = user;

    if((name && email && phone && address && experience && cover)){
      const res = await fetch(
        "https://job-hub-a765c-default-rtdb.firebaseio.com/job_hubform.json",
        {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            address,
            experience,
            cover,
          }),
        }
      );
      if(res){
        setUser({
          name: "",
          email: "",
          phone: "",
          address: "",
          experience: "",
          cover:"",
        }); 
        alert("Data Send")
      }
    }else{
      alert("Please Fill the Form")
    }

    
  };

  return (
    <>
      

      <div className="main-heading1 container  mt-4 mb-4 border border-gray-300 shadow hover:border-blue-500">
        <div>
          <h2 className="apply_text text-center mt-3 "> Apply Now</h2>
          <hr/>
          <form className="contact100-form" method="POST">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter Your Name"
                value={user.name}
                onChange={getUserData}
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
                value={user.email}
                onChange={getUserData}
                autoComplete="off"
                name="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone:
              </label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                placeholder="Enter Your Phone Number"
                value={user.phone}
                onChange={getUserData}
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="experience" className="form-label">
                Experience:
              </label>
              <input
                type="tel"
                className="form-control"
                name="experience"
                placeholder="How much you have Experience"
                value={user.experience}
                onChange={getUserData}
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address:
              </label>
              <input
                type="text"
                className="form-control"
                name="address"
                placeholder="Enter Your Address"
                value={user.address}
                onChange={getUserData}
                autoComplete="off"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Cover Letter:
              </label>
              <textarea
                className="form-control"
                name="cover"
                rows={5}
                defaultValue={""}
                placeholder="Write a cover letter"
                value={user.cover}
                onChange={getUserData}
                autoComplete="off"
                required
              />
            </div>
            <div className="d-grid gap-2 col-6 mx-auto mb-3">
              <button
                className="form_button btn btn-primary"
                onClick={postData}
                type="button"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </>
  );
};

export default Login;
