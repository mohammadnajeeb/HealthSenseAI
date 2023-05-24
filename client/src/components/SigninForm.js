import React from 'react';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

function SigninForm() {
  const style = {
    ".gradient-custom-3": {
      /* fallback for old browsers */
      background: "#84fab0",

      /* Chrome 10-25, Safari 5.1-6 */
      background: "-webkit-linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))",

      /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      background: "linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))"
    },
    ".gradient-custom-4": {
      /* fallback for old browsers */
      background: "#84fab0",

      /* Chrome 10-25, Safari 5.1-6 */
      background: "-webkit-linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1))",

      /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      background: "linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1))"
    }
  };

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <style>{JSON.stringify(style)}</style>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Sign In</h2>
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form2' type='password'/>
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='Remember Me' />
          </div>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Sign In</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default SigninForm;
