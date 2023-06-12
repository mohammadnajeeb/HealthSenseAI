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
              <font size='3' face='sans-serif'>
                <p>
                  <MDBTypography tag='div' className='display-6'>Privacy Policy</MDBTypography>
                </p>
                <p>
                  Welcome to HealthSense, the ultimate e-healthcare website where we strive to provide the best possible experience to our users. Our platform offers a comprehensive range of healthcare services, including automated medical tests powered by state-of-the-art AI technology, live world medical insights, and personalized medical records management.
                </p>
                <p>
                  At HealthSense, we understand the importance of efficient and convenient healthcare services, which is why we have developed a user-friendly platform that enables individuals to access healthcare services with ease. Our website features a simple and intuitive interface that allows users to create profiles and manage their health records effortlessly.
                </p>
                <p>
                  HealthSense is an e-healthcare website that provides a platform for individuals to create and manage their health profiles. One of our core features is our profile management system, which allows users to easily store and manage their medical records. With HealthSense, users can access their medical history and track their progress over time, making it easier to manage their health effectively.
                </p>
                <p>
                  Our automated medical tests are another key feature of HealthSense. We use advanced AI technology to provide users with accurate and reliable medical test results. Our tests are simple to use, and users can upload images of their medical conditions to receive results quickly and easily. This feature saves users time and effort, enabling them to manage their health more efficiently.
                </p>
                <p>
                  HealthSense provides live world medical insights on our home page. This feature allows users to stay up-to-date with the latest medical news, trends, and research findings from around the world. We believe that access to up-to-date medical information is essential to making informed decisions about health and well-being. Our platform is designed to provide users with a comprehensive source of medical information that they can rely on.
                </p>
                <p>
                  Our doctor integration feature is a valuable asset for registered users on HealthSense. This feature allows doctors to access patient profiles and medical records, enabling them to provide faster and more efficient healthcare services. Our platform is designed to provide a seamless healthcare experience for users, and our doctor integration feature is an essential part of this. We are committed to making healthcare more accessible and efficient for everyone, and our doctor integration feature is just one way we achieve this.
                </p>
                <p>
                  Your privacy is important to us. When you use HealthSense, we may collect certain personal information for the purpose of providing and improving our services. We handle your personal information in accordance with our Privacy Policy, which outlines how we collect, use, disclose, and protect your information. By using HealthSense, you agree to our Privacy Policy.
                </p>
                <p>
                  For more details about our privacy practices, please read our full Privacy Policy.
                </p>
              </font>
            </MDBTypography>

      </MDBCardBody>
      </MDBCard>
      </MDBContainer>
      </div>
    );
}
