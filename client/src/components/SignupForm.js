import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and send the data to the server
    if (formData.name && formData.email && formData.password && formData.confirmPassword && formData.agreeTerms) {
      // Send the form data to the server for user registration
      console.log('Form submitted:', formData);
      // You can make an API request to the server here using a library like Axios or Fetch
    } else {
      console.log('Please fill in all the required fields');
    }
  };

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' name='name' type='text' value={formData.name} onChange={handleChange} />
            <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' name='email' type='email' value={formData.email} onChange={handleChange} />
            <MDBInput wrapperClass='mb-4' label='Password' size='lg' name='password' type='password' value={formData.password} onChange={handleChange} />
            <MDBInput wrapperClass='mb-4' label='Repeat Your Password' size='lg' name='confirmPassword' type='password' value={formData.confirmPassword} onChange={handleChange} />
            <div className='d-flex flex-row justify-content-center mb-4'>
              <MDBCheckbox name='agreeTerms' id='agreeTerms' label='I agree to the Terms of Service' checked={formData.agreeTerms} onChange={handleCheckboxChange} />
            </div>
            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' type='submit'>Register</MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignupForm;
