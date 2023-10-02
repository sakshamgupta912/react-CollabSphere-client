import "./Login.css";
import student_on_laptop from "../../Assets/CollabSphereLogin.svg";
import logo from '../../Assets/CollabSphereLogo.svg';
import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { useNavigate } from 'react-router-dom';



function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data here, e.g., check if email and password are not empty

    // If validation passes, you can submit the form or perform other actions
    // For now, let's just log the form data
    if(formData.email && formData.password)
    {
      console.log("Form data submitted:", formData);
      navigate('/landingpage');;
    }
    else{
      console.error('Wrong input')
    }
   
    
    
  };

  return (
    <MDBContainer
      className="p-4 text-center text-md-start d-flex flex-column justify-content-center"
      style={{ height: "100vh" }}
    >
      <MDBRow>
        <MDBCol md="6" className=" d-flex flex-column justify-content-center">
          <div className="container m-2">
            <img src={student_on_laptop} className="student_on_laptop" alt="Student on Laptop" />
          </div>
        </MDBCol>

        <MDBCol md="6" className="">
          <MDBCard className="my-5 card">
            <MDBCardBody className="p-4">
              <MDBRow>
                <div className="d-flex justify-content-center mb-4">
                  <div className="container p-3">
                    <img src={logo} alt="CollabSphere" />
                  </div>
                </div>
              </MDBRow>

              <form onSubmit={handleSubmit}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  name="email"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  name="password"
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                <MDBBtn
                  type="submit"
                  className="w-100 mb-4"
                  size="md"
                  style={{ background: "#FF5757" }}
                >
                  Login
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;