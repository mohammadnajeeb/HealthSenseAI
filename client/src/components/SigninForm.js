import React from 'react';
import { useState, useContext } from 'react';
import axios from 'axios';
import { server, Context } from '../index';
import toast from 'react-hot-toast';
import { set } from 'mongoose';
import { Link, Navigate } from 'react-router-dom';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

function SigninForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {isAuthenticated, setisAuthenticated, loading, setLoading} = React.useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        `${server}/users/login`,
        {
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
      toast.error(error.response.data.message);
     console.log(error);
     setLoading(false);
     setisAuthenticated(false);
    }
  };

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

  if (isAuthenticated) return <Navigate to={'/'} />;

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://images.unsplash.com/photo-1619252584172-a83a949b6efd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)'}}>
      <style>{JSON.stringify(style)}</style>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Sign In</h2>
          <form onSubmit={submitHandler}>
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' name='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' name='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
          <MDBBtn disabled={loading} className='mb-4 w-100 gradient-custom-4' size='lg' type="submit">Sign In</MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default SigninForm;
