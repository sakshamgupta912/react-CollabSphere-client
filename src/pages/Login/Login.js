import "./Login.css";
import axios from "../../api/axios";
import student_on_laptop from "../../Assets/CollabSphereLogin.svg";
import logo from "../../Assets/CollabSphereLogo.svg";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

const token = Cookies.get("token");
const uid = Cookies.get("uid");

// material design for bootstrap

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (token && uid) {
      navigate("/landingpage");
    } else {
      navigate("/");
    }
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loginAlert, setLoginAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginAlert(false);

    // Validate the form data here, e.g., check if email and password are not empty

    // If validation passes, you can submit the form or perform other actions
    // For now, let's just log the form data
    if (!checkEmail(formData.email)) {
      setLoginAlert(
        <Alert severity="error">Invalid Email Address Format</Alert>
      );
    } else if (!checkPassword(formData.password)) {
      setLoginAlert(<Alert severity="error">Password cannot be empty</Alert>);
    } else {
      try {
        const response = await axios.post(
          "/api/auth/login",
          JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
            validateStatus: () => true,
          }
        );
        if (response.status === 200) {
          setLoginAlert(false);
          Cookies.set("uid", `${response.data.user._id}`, { expires: 7 });
          Cookies.set("name", `${response.data.user.name}`, { expires: 7 });
          Cookies.set("email", `${response.data.user.email}`, { expires: 7 });
          Cookies.set("token", `${response.data.user.token}`, { expires: 7 });
          window.location.reload();
        } else if (response.status === 401) {
          setLoginAlert(
            <Alert severity="error">Invalid Email Address or Password</Alert>
          );
        } else if (response.status === 404) {
          setLoginAlert(
            <Alert severity="error">User Not Found. Please Register!</Alert>
          );
        } else {
          setLoginAlert(
            <Alert severity="error">Server error. Try Again!</Alert>
          );
        }
      } catch (error) {
        if (!error.response) {
          alert("Network error. Try again!");
        } else if (error.response.status === 404) {
          setLoginAlert(
            <Alert severity="error">User Not Found. Please Register!</Alert>
          );
        } else {
          setLoginAlert(
            <Alert severity="error">Server error. Try Again!</Alert>
          );
        }
      }
    }
  };

  function checkEmail(email) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
  }

  function checkPassword(password) {
    if (password.length === 0) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <MDBContainer
      className="p-4 text-center text-md-start d-flex flex-column justify-content-center"
      style={{ height: "100vh" }}
    >
      <MDBRow>
        <MDBCol md="6" className=" d-flex flex-column justify-content-center">
          <div className="container m-2">
            <img
              src={student_on_laptop}
              className="student_on_laptop"
              alt="Student on Laptop"
            />
          </div>
        </MDBCol>
        <MDBCol md="6" className="">
          <MDBCard className="my-5 card">
            <MDBCardBody className="p-4">
              <MDBRow>
                {loginAlert}
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
                  // type="email"
                  value={formData.email}
                  onChange={handleChange}
                  // required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  name="password"
                  id="password"
                  type="password"
                  // minLength={6}
                  maxLength={20}
                  value={formData.password}
                  onChange={handleChange}
                  // required
                />

                <MDBBtn
                  type="submit"
                  className="w-100 mb-2"
                  size="md"
                  style={{ background: "#FF5757" }}
                >
                  Login
                </MDBBtn>
              </form>
              <MDBBtn
                type="submit"
                className="w-100 "
                size="md"
                style={{ background: "grey" }}
                onClick={() => {
                  navigate("/Register");
                }}
              >
                Don't have an account? Register Now !
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
