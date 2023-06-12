import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center text-white static-bottom' style={{ backgroundColor: '#f1f1f1'}}>
      <MDBContainer className='pt-1'>
        <section className='mb-1'>
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="sm"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="sm"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-twitter' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="sm"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-google' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="sm"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="sm"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-linkedin' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="sm"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center text-dark p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
      <font size='2.5'> © 2023 All Rights Reserved - HealthSense by Mohammad Najeeb |&nbsp;
        <a className='text-dark' href='/Privacy'>
          Privacy Policy |&nbsp;
        </a>
        <a className='text-dark' href='/Terms'>
            Terms of Use
        </a>
        </font>
      </div>
    </MDBFooter>
  );
}