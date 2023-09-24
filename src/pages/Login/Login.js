import "./Login.css";
import student_on_laptop from "./assests/CollabSphereLogin.svg";
import logo from './assests/CollabSphereLogo.svg';
import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";

function Login() {
  return (
    <MDBContainer
      className="p-4 text-center text-md-start d-flex flex-column justify-content-center"
      style={{ height: "100vh" }}
    >
      <MDBRow>
        <MDBCol md="6" className=" d-flex flex-column justify-content-center">
          <div className="container">
            <img src={student_on_laptop} className="student_on_laptop"></img>
          </div>
        </MDBCol>

        <MDBCol md="6" className="" >
          <MDBCard className="my-5 card">
            <MDBCardBody className="p-5" >
              <MDBRow>
                {/* <MDBCol col='6'>
                 
                </MDBCol> */}
                <div className="d-flex justify-content-center mb-4">
                    <div class='container p-3'>
                    <img src={logo} alt='CollabSphere'></img>
                    </div>
                </div>
              </MDBRow>

              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form1"
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form1"
                type="password"
              />

              <MDBBtn className="w-100 mb-4" size="md" style={{background:'#FF5757'}} >
                Login
              </MDBBtn>

              {/* <div className="text-center">
                <p>or sign up with:</p>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
              </div> */}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
