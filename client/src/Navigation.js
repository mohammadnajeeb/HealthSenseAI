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
import { Context, server } from './index';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function App() {
    const [showNavRight, setShowNavRight] = useState(false);
  
  const {isAuthenticated, setisAuthenticated, loading, setLoading} = React.useContext(Context);

  const logoutHandler = async (e) => {
    setLoading(true);
    try {
      await axios.get(
        `${server}/users/logout`,
        {
          withCredentials: true,
        }
      );
  
      toast.success("Logged out successfully");
      setisAuthenticated(false);
      setLoading(false);
    }
    catch (error) {
      toast.error(error.response.data.message);
      setisAuthenticated(true);
      setLoading(false);
    }
  };

  console.log(isAuthenticated);
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
                <MDBNavbarLink href='/Test2'>
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

            {isAuthenticated ? (
              <><MDBNavbarItem>
                <MDBNavbarLink href='/Profile'>
                  <MDBBtn rounded className='text-light' color='tertiary' rippleColor='link'>
                    Profile
                  </MDBBtn>
                </MDBNavbarLink>
              </MDBNavbarItem><MDBNavbarItem>
                  <MDBNavbarLink href='#'>
                    <MDBBtn rounded disabled={loading} onClick={logoutHandler} className='text-light' style={{ backgroundColor: '#d79f6c' }}>
                      Logout
                    </MDBBtn>
                  </MDBNavbarLink>
                </MDBNavbarItem></>
            ) : (
              <MDBNavbarItem>
              <MDBNavbarLink href='/Signin'>
                <MDBBtn rounded className='text-light' style={{ backgroundColor: '#d79f6c' }}>
                    Login
                </MDBBtn>
                </MDBNavbarLink>
            </MDBNavbarItem>)
            }

          </MDBNavbarNav>
        </MDBCollapse> 
        
      </MDBContainer>
    </MDBNavbar>
  );
}