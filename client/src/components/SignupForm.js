import React, { useState, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import axios from 'axios';
import { server, Context } from '../index';
import toast from 'react-hot-toast';
import { set } from 'mongoose';

function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {isAuthenticated, setisAuthenticated, loading, setLoading} = React.useContext(Context);

  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${server}/users/new`,
        {
          name,
          email,
          password
        },
        {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true,
        }
      );
  
      toast.success(data.message);
      setisAuthenticated(true);
      setLoading(false);
    }
    catch (error) {
      toast.error("Some Error");
     console.log(error);
     setisAuthenticated(false);
     setLoading(false);
    }
  };

if (isAuthenticated) return <Navigate to={'/'} />;

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an Account</h2>
          <form onSubmit={submitHandler}>
            <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' name='name' type='text' value={name} onChange={(e) => setName(e.target.value)} required/>
            <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' name='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <MDBInput wrapperClass='mb-4' label='Password' size='lg' name='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' type='submit'>Register</MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignupForm;
