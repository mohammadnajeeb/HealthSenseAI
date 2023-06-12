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

export default function Terms() {
    return (
      <div>
        
        <MDBContainer fluid>
        <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
        <MDBTypography className='lead mb-0'>
          <font size="3" face='sans-serif'>
            <p><MDBTypography tag='div' className='display-6'>Terms of Use</MDBTypography>
                </p>
                <p>
                  Welcome to HealthSense! These Terms of Use govern your use of our website and services. By accessing or using HealthSense, you agree to be bound by these Terms of Use. Please read them carefully before using our website.
                </p>
                <p>
                  1. Acceptance of Terms: By accessing or using HealthSense, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree to these terms, you may not use our website and services.
                </p>
                <p>
                  2. User Responsibilities: You are responsible for maintaining the confidentiality of your account information, including your username and password. You are also responsible for any activity that occurs under your account.
                </p>
                <p>
                  3. Prohibited Activities: You agree not to engage in any of the following prohibited activities while using HealthSense:
                  - Violating any applicable laws or regulations
                  - Impersonating any person or entity
                  - Posting or transmitting any content that is unlawful, harmful, defamatory, obscene, or otherwise objectionable
                  - Interfering with or disrupting the operation of HealthSense
                  - Collecting or storing personal data about other users without their consent
                </p>
                <p>
                  4. Intellectual Property: The content and materials available on HealthSense, including text, graphics, images, logos, and software, are protected by intellectual property rights. You may not copy, distribute, or create derivative works from any content on HealthSense without our prior written consent.
                </p>
                <p>
                  5. Privacy: We collect and handle personal information in accordance with our Privacy Policy. By using HealthSense, you consent to the collection, use, and disclosure of your personal information as described in our Privacy Policy.
                </p>
                <p>
                  6. Disclaimer: HealthSense is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                </p>
                <p>
                  7. Limitation of Liability: We disclaim any liability for any damages or injuries arising out of your use of HealthSense. In no event shall we be liable for any direct, indirect, incidental, consequential, or special damages.
                </p>
                <p>
                  8. Governing Law: These Terms of Use shall be governed by and construed in accordance with the laws of [your jurisdiction].
                </p>
                <p>
                  9. Changes to Terms: We may revise these Terms of Use at any time without prior notice. By continuing to use HealthSense after any changes, you agree to be bound by the revised Terms of Use.
                </p>
                <p>
                  If you have any questions about these Terms of Use, please contact us at [contact email].
                </p>
              </font>
            </MDBTypography>

      </MDBCardBody>
      </MDBCard>
      </MDBContainer>
      </div>
    );
}
