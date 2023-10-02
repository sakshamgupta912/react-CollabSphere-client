import logo from '../../Assets/CollabSphereLogoLinear.svg';
import './NavBar.css';
import React, { useState } from "react";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";

function NavBar({ currentTab, onTabChange }) {
  const [showBasic, setShowBasic] = useState(false);

  // Function to handle tab click and update the currentTab state
  const handleTabClick = (tab) => {
    onTabChange(tab); // Call the onTabChange prop to update the currentTab state
    setShowBasic(false); // Close the navbar after a tab is clicked
  };


  return (
    <MDBNavbar expand="lg" light bgColor="light" className='p-0'>
    <img src={logo} style={{position:'absolute',height:'50px',top:'1',left:'5px'}}/>
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">
          <img
           
            height='32'
            alt=''
          />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="justify-content-center next mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink
                active={currentTab === 'home'} // Set active based on currentTab
                onClick={() => handleTabClick('home')}
              >
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                active={currentTab === 'assignment'} // Set active based on currentTab
                onClick={() => handleTabClick('assignment')}
              >
                Assignment
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                active={currentTab === 'chat'} // Set active based on currentTab
                onClick={() => handleTabClick('chat')}
              >
                Chat
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className="d-flex input-group w-auto"></form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default NavBar;
  