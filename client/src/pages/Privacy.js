import React from 'react';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBTypography,
  MDBCheckbox,
  MDBTextArea,
  MDBAccordion,
  MDBAccordionItem
}
from 'mdb-react-ui-kit';

export default function Privacy() {
    return (
      <div>
        
        <MDBContainer fluid>
        <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
        <MDBTypography className='lead mb-0'>
          <font size="3" face='sans-serif'>
            <p><MDBTypography tag='div' className='display-6'>About Us</MDBTypography></p>
            <p>
              Welcome to our website! We are a team of passionate individuals committed to revolutionizing the healthcare industry. Our objective is to provide easy access to automated tests and resources, with personalized care at your fingertips.
              Our website is built using the latest technologies including React + Tailwind CSS, Express, and either MongoDB or PostgreSQL for the database. It's easy to navigate and simple to use, with a beautiful design that captures the essence of modern healthcare.</p>
            <p>
              On the home page, you'll find a stunning carousel of images that showcases our commitment to innovation and excellence. From there, you can easily access our sign-up page where you can create your account and start exploring our features.
              Once you log in, you'll be greeted by a sleek sidebar that gives you access to all the tools you need. You can update your details, take automated tests, access resources, view your test history, and even see doctor remarks if you're an admin. Our platform is intuitive and user-friendly, making it easy to navigate and use, no matter your experience with technology.
              We are dedicated to your care and ensuring that you receive the best possible treatment. Our team of experts has worked tirelessly to build a platform that is both easy to use and comprehensive in its offerings. We are committed to keeping up with the latest advancements in healthcare and providing the most innovative solutions to our users.
            </p>
            <p>
              Our footer is filled with useful links and details, making it easy for you to find what you need. And for admin purposes, we have an easy-to-use login page where you can access the dashboard and manage your account.
              We hope you enjoy using our platform and welcome you to our community of health and wellness.
            </p>
          </font>
      </MDBTypography>

      <MDBAccordion initialActive={1}>
      <MDBAccordionItem collapseId={1} headerTitle='Accordion Item #1'>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
        plugin adds the appropriate classes that we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
        within the <code>.accordion-body</code>, though the transition does limit overflow.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={2} headerTitle='Accordion Item #2'>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
        plugin adds the appropriate classes that we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
        within the <code>.accordion-body</code>, though the transition does limit overflow.
      </MDBAccordionItem>
      <MDBAccordionItem collapseId={3} headerTitle='Accordion Item #3'>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
        plugin adds the appropriate classes that we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
        custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
        within the <code>.accordion-body</code>, though the transition does limit overflow.
      </MDBAccordionItem>
    </MDBAccordion>

      </MDBCardBody>
      </MDBCard>
      </MDBContainer>
      </div>
    );
}
