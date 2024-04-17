// Registration.jsx
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./Registration.css";
import Lottie from "lottie-react";
import ani from "../assets/ani.json";
import Aos from "aos";
import "aos/dist/aos.css";
import ReCAPTCHA from "react-google-recaptcha";
const Registration = () => {
  const [inpval, setInpval] = useState({
    name: "",
    phone: "",
    email: "",
    user: "",
  });

  const addData = (e) => {
    e.preventDefault();
    let userData = JSON.parse(localStorage.getItem("userData"));
    if (!Array.isArray(userData)) {
      userData = [];
    }
    userData.push(inpval);
    localStorage.setItem("userData", JSON.stringify(userData));
    setInpval({
      name: "",
      phone: "",
      email: "",
      user: "",
    });
  };
  const style = {
    width: "700px",
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInpval((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="hero">
        <div data-aos="zoom-out">
          <Lottie animationData={ani} style={style} />
        </div>
        <div className="form">
          <form data-aos="zoom-in">
            <h1>Register</h1>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              value={inpval.name}
              placeholder="Enter Your Full Name"
              required
            />
            <input
              onChange={handleChange}
              name="phone"
              type="text"
              value={inpval.phone}
              placeholder="Phone Number"
              required
            />
            <input
              onChange={handleChange}
              name="email"
              type="email"
              value={inpval.email}
              placeholder="Enter Your Email Id"
              required
            />
            <input
              onChange={handleChange}
              name="user"
              type="text"
              value={inpval.user}
              placeholder="Create your user_name"
              required
            />
            <ReCAPTCHA sitekey="6Ld037spAAAAAGRwWNIHDNXK7kUu_m0Csjudx9zO" />
            <button type="submit" onClick={addData}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;