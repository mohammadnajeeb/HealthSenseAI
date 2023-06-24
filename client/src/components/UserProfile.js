import React, { useEffect, useState } from 'react';
import { Context } from '../index';
import Loader from './Loader';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { server } from '../index';
import { toast } from 'react-hot-toast';

function UserProfile() {
  const { existingUser } = React.useContext(Context);
  console.log(existingUser);

  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [tasks, setTasks] = React.useState([]);
  const [updateFlag, setUpdateFlag] = useState(false); // New state variable
  const [medicalHistory, setMedicalHistory] = useState('');
  const [familyHistory, setFamilyHistory] = useState('');
  const [lifestyle, setLifestyle] = useState('');
  const [vitalSigns, setVitalSigns] = useState('');
  const [allergies, setAllergies] = useState('');
  const [medication, setMedication] = useState('');
  const [immunizations, setImmunizations] = useState('');
  const [testResults, setTestResults] = useState('');
  const [emergencyContacts, setEmergencyContacts] = useState('');

  const handleMedicalHistoryChange = (e) => {
    setMedicalHistory(e.target.value);
  };

  const handleFamilyHistoryChange = (e) => {
    setFamilyHistory(e.target.value);
  };

  const handleLifestyleChange = (e) => {
    setLifestyle(e.target.value);
  };

  const handleVitalSignsChange = (e) => {
    setVitalSigns(e.target.value);
  };

  const handleAllergiesChange = (e) => {
    setAllergies(e.target.value);
  };

  const handleMedicationChange = (e) => {
    setMedication(e.target.value);
  };

  const handleImmunizationsChange = (e) => {
    setImmunizations(e.target.value);
  };

  const handleTestResultsChange = (e) => {
    setTestResults(e.target.value);
  };

  const handleEmergencyContactsChange = (e) => {
    setEmergencyContacts(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${server}/task/new`,
        {
          title,
          description,
          medicalHistory,
          familyHistory,
          lifestyle,
          vitalSigns,
          allergies,
          medication,
          immunizations,
          testResults,
          emergencyContacts,
        },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setTitle('');
      setDescription('');
      setMedicalHistory('');
      setFamilyHistory('');
      setLifestyle('');
      setVitalSigns('');
      setAllergies('');
      setMedication('');
      setImmunizations('');
      setTestResults('');
      setEmergencyContacts('');

      toast.success(data.message);
      setLoading(false);
      setUpdateFlag(true); // Trigger update
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${server}/task/my`, {
          withCredentials: true,
        });
        setTasks(res.data.tasks);
      } catch (e) {
        toast.error(e.response.data.message);
      }
    };

    fetchData();

    if (updateFlag) {
      setUpdateFlag(false); // Reset update flag
      fetchData(); // Fetch updated data
    }
  }, [updateFlag]); // Add updateFlag as a dependency

  const inputStyle = {
    marginBottom: '1rem', // Add a gap between input boxes
  };

  return (
    <div className='bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center'>
      <MDBContainer className='flex justify-center'>
        <MDBCard className='w-full max-w-lg m-5'>
          <MDBCardBody className='px-5'>
            <h2 className='text-3xl text-center font-bold mb-5'>Medical Health Details</h2>
            <form onSubmit={submitHandler}>
              <MDBInput
                label='Title'
                size='lg'
                name='title'
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                style={inputStyle} // Apply the input style
              />
              <MDBInput
                label='Description'
                size='lg'
                name='description'
                type='text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                style={inputStyle} // Apply the input style
              />

              <MDBRow>
                <MDBCol md='6'>
                  <MDBInput
                    label='Medical History'
                    size='lg'
                    name='medicalHistory'
                    type='text'
                    value={medicalHistory}
                    onChange={handleMedicalHistoryChange}
                    required
                    style={inputStyle} // Apply the input style
                  />
                </MDBCol>
                <MDBCol md='6'>
                  <MDBInput
                    label='Family History'
                    size='lg'
                    name='familyHistory'
                    type='text'
                    value={familyHistory}
                    onChange={handleFamilyHistoryChange}
                    required
                    style={inputStyle} // Apply the input style
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md='6'>
                  <MDBInput
                    label='Lifestyle'
                    size='lg'
                    name='lifestyle'
                    type='text'
                    value={lifestyle}
                    onChange={handleLifestyleChange}
                    required
                    style={inputStyle} // Apply the input style
                  />
                </MDBCol>
                <MDBCol md='6'>
                  <MDBInput
                    label='Vital Signs'
                    size='lg'
                    name='vitalSigns'
                    type='text'
                    value={vitalSigns}
                    onChange={handleVitalSignsChange}
                    required
                    style={inputStyle} // Apply the input style
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md='6'>
                  <MDBInput
                    label='Allergies'
                    size='lg'
                    name='allergies'
                    type='text'
                    value={allergies}
                    onChange={handleAllergiesChange}
                    required
                    style={inputStyle} // Apply the input style
                  />
                </MDBCol>
                <MDBCol md='6'>
                  <MDBInput
                    label='Medication'
                    size='lg'
                    name='medication'
                    type='text'
                    value={medication}
                    onChange={handleMedicationChange}
                    required
                    style={inputStyle} // Apply the input style
                  />
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol md='6'>
                  <MDBInput
                    label='Immunizations'
                    size='lg'
                    name='immunizations'
                    type='text'
                    value={immunizations}
                    onChange={handleImmunizationsChange}
                    required
                    style={inputStyle} // Apply the input style
                  />
                </MDBCol>
                <MDBCol md='6'>
                  <MDBInput
                    label='Test Results'
                    size='lg'
                    name='testResults'
                    type='text'
                    value={testResults}
                    onChange={handleTestResultsChange}
                    required
                    style={inputStyle} // Apply the input style
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                label='Emergency Contacts'
                size='lg'
                name='emergencyContacts'
                type='text'
                value={emergencyContacts}
                onChange={handleEmergencyContactsChange}
                required
                style={inputStyle} // Apply the input style
              />

              <MDBBtn
                disabled={loading}
                className='w-full mb-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600'
                size='lg'
                type='submit'
              >
                Add Details
              </MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>

      <MDBContainer className='flex justify-center'>
        <MDBCard className='w-full max-w-lg m-5'>
          <MDBCardBody className='px-5'>
            <h5 className='text-2xl text-center font-bold mb-5'>Medical Health Record You Have Created</h5>
            <section>
              <table className='w-full'>
                <thead>
                  <tr>
                    <th className='text-left'>Title</th>
                    <th className='text-left'>Description</th>
                    <th className='text-left'>Medical History</th>
                    <th className='text-left'>Family History</th>
                    <th className='text-left'>Lifestyle</th>
                    <th className='text-left'>Vital Signs</th>
                    <th className='text-left'>Allergies</th>
                    <th className='text-left'>Medication</th>
                    <th className='text-left'>Immunizations</th>
                    <th className='text-left'>Test Results</th>
                    <th className='text-left'>Emergency Contacts</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((i) => (
                    <tr key={i.title}>
                      <td className='border-t'>{i.title}</td>
                      <td className='border-t'>{i.description}</td>
                      <td className='border-t'>{i.medicalHistory}</td>
                      <td className='border-t'>{i.familyHistory}</td>
                      <td className='border-t'>{i.lifestyle}</td>
                      <td className='border-t'>{i.vitalSigns}</td>
                      <td className='border-t'>{i.allergies}</td>
                      <td className='border-t'>{i.medication}</td>
                      <td className='border-t'>{i.immunizations}</td>
                      <td className='border-t'>{i.testResults}</td>
                      <td className='border-t'>{i.emergencyContacts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>

      {loading && <Loader />}
    </div>
  );
}

export default UserProfile;
