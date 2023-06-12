import React from 'react';
import { MDBRow, MDBCol, MDBContainer, MDBBtn } from 'mdb-react-ui-kit';

import heroImage from '../images/hero-image.jpg';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '70vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            color: '#fff',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            fontFamily: 'Calibri, sans-serif',

          }}
        >
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', fontFamily: 'Calibri, serif' }}>
            Welcome to HealthSense!
          </h1>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', fontFamily: 'Calibri, serif'  }}>
          Revolutionizing Healthcare with Advanced AI Technology
          </h2>
          <p style={{ fontSize: '1.3rem', lineHeight: '1.6rem', fontFamily: 'Calibri, serif'  }}>
            HealthSense - your go-to platform for advanced healthcare services. With our state-of-the-art technology and commitment to providing the best possible care, we're changing the game in the healthcare industry. From personalized medical records management to automated medical tests and live world medical insights, we've got you covered. Join us today and experience the future of healthcare.
          </p>
          {/* Buttons Section */}
      <section style={{ textAlign: 'center' }}>
      <a href='/Test'>
        <MDBBtn rounded color='primary' size='lg' className='m-3'>
          AI Health Diagnostic
        </MDBBtn>
        </a>
        <a href='/Signup'>
        <MDBBtn rounded color='secondary' size='lg' className='m-3'>
          Register Now
        </MDBBtn>
        </a>
      </section>
        </div>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        />
      </section>

      {/* Iframe Section */}
      &nbsp;
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', fontFamily: 'Calibri, serif'  }}>
          World Medical Insights
      </h2>
      <MDBContainer fluid>
        <MDBRow className='my-4'>
          <MDBCol>
            <iframe
              src='https://ourworldindata.org/grapher/total-cases-covid-19?tab=chart'
              title='Covid-19 Total Cases'
              width='100%'
              height='600px'
            />
          </MDBCol>
          <MDBCol>
            <iframe
              src='https://ourworldindata.org/grapher/total-cases-covid-19?tab=map&year=59&region=Asia'
              title='Covid-19 Cases in Asia'
              width='100%'
              height='600px'
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Home;
