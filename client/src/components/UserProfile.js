import React, { useEffect } from 'react';
import { Context } from '../index';
import Loader from './Loader';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { server } from '../index';
import { toast } from 'react-hot-toast';
import { set } from 'mongoose';

function UserProfile() {
  const { existingUser } = React.useContext(Context);
  console.log(existingUser);

  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [tasks, setTasks] = React.useState([]);

  const submitHandler = async(e) => {
    e.preventDefault();
    try {

      setLoading(true);
      const {data}= await axios.post(
        `${server}/task/new`,
        {
        title,
        description,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
        }
        );

        setTitle("");
        setDescription("");
        toast.success(data.message);
        setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    axios.get(`${server}/task/my`, {
      withCredentials: true,
    }).then((res) => {
      setTasks(res.data.tasks);
    }).catch(e => {
      toast.error(e.response.data.message);
    })
  }, []);

  const style = {}; // Define the style variable here

  return (
    <div className='container'>
      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
        <style>{JSON.stringify(style)}</style>
        <div className='mask gradient-custom-3'></div>
        <MDBCard className='m-5' style={{maxWidth: '600px'}}>
          <MDBCardBody className='px-5'>
            <h2 className="text-uppercase text-center mb-5">Medical Health Details</h2>
            <form onSubmit={submitHandler}>
              <MDBInput wrapperClass='mb-4' label='Title' size='lg' name='title' type='text' value={title} onChange={(e) => setTitle(e.target.value)} required/>
              <MDBInput wrapperClass='mb-4' label='Description' size='lg' name='description' type='text' value={description} onChange={(e) => setDescription(e.target.value)} required/>
              <MDBBtn disabled={loading} className='mb-4 w-100 gradient-custom-4' size='lg' type="submit">Add Details</MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>

      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
        <style>{JSON.stringify(style)}</style>
        <div className='mask gradient-custom-3'></div>
        <MDBCard className='m-5' style={{maxWidth: '600px'}}>
          <MDBCardBody className='px-5'>
            <h2 className="text-uppercase text-center mb-5">Medical Health Details</h2>
            <section>
              {tasks.map((i) => (
                <div key={0}>
                <h3>{i.title}</h3>
                <p>{i.description}</p>
              </div>
              ))}
              
            </section>

          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default UserProfile;
