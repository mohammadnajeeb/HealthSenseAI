import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBBtn,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdb-react-ui-kit';

import mainLogo from './images/LOGOAPP.png';

export default function App() {
    const [showNavRight, setShowNavRight] = useState(false);

  return (
    <MDBNavbar expand='lg' light style={{ backgroundColor: '#469c99' }} className='shadow-lg-bottom'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'><img
              src={mainLogo}
              height='auto'
              width='15%'
              alt=''
              loading='lazy'
            /></MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/'>
                    <MDBBtn rounded className='text-light' color='tertiary' rippleColor='link'>
                        Home
                    </MDBBtn>
                </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
                <MDBNavbarLink href='/Test'>
                    <MDBBtn rounded className='text-light' color='tertiary' rippleColor='link'>
                        Automated_Test
                    </MDBBtn>
                </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
                <MDBNavbarLink href='/About'>
                    <MDBBtn rounded className='text-light' color='tertiary' rippleColor='link'>
                        About
                    </MDBBtn>
                </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
                <MDBNavbarLink href='/Contact'>
                    <MDBBtn rounded className='text-light' color='tertiary' rippleColor='link'>
                        Contact
                    </MDBBtn>
                </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='/Signin'>
                <MDBBtn rounded className='text-light' style={{ backgroundColor: '#d79f6c' }}>
                    Login
                </MDBBtn>
                </MDBNavbarLink>
            </MDBNavbarItem>

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}