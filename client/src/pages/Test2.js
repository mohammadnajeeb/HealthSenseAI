import React, { useState } from 'react';
import {
  MDBCol,
  MDBListGroup,
  MDBContainer, 
  MDBListGroupItem,
  MDBRow,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
  MDBTypography,
} from 'mdb-react-ui-kit';

export default function Test2() {
  const [basicActive, setBasicActive] = useState('home');

  const handleBasicClick = (value) => {
    if (value === basicActive) return;

    setBasicActive(value);
  };

  return (
    <section className='text-center my-5'>
    <MDBContainer fluid>
    <MDBRow>
      <MDBCol size={4}>
        <MDBListGroup light small>
          <MDBTabs>
            <MDBListGroupItem action active={basicActive === 'home'} noBorders className='px-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick('home')}>Chest X-Ray Anomaly Detection</MDBTabsLink>
              </MDBTabsItem>
            </MDBListGroupItem>
            <MDBListGroupItem action active={basicActive === 'profile'} noBorders className='px-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick('profile')}>Brain Stroke Prediction</MDBTabsLink>
              </MDBTabsItem>
            </MDBListGroupItem>
            <MDBListGroupItem action active={basicActive === 'messages'} noBorders className='px-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick('messages')}>Skin Cancer Detection</MDBTabsLink>
              </MDBTabsItem>
            </MDBListGroupItem>
            <MDBListGroupItem action active={basicActive === 'settings'} noBorders className='px-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick('settings')}>Cataract</MDBTabsLink>
              </MDBTabsItem>
            </MDBListGroupItem>
          </MDBTabs>
        </MDBListGroup>
      </MDBCol>

      <MDBCol size={8}>
        <MDBTabsContent>
          <MDBTabsPane show={basicActive === 'home'}>
          <div>
        <iframe
	src="https://abrish-aadi-chest-xray-anomaly-detection.hf.space"
	frameborder="0"
	width="100%"
	height="600"
></iframe>



        
      </div>
            
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === 'profile'}>
          <div>
        <iframe
	src="https://datasciencedojo-brain-stroke-prediction.hf.space"
	frameborder="0"
	width="100%"
	height="600"
></iframe>



        
      </div>
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === 'messages'}>
          <div>
        <iframe
	src="https://alexz1445-skin-cancer-detection.hf.space"
	frameborder="0"
	width="100%"
	height="600"
></iframe>



        
      </div>
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === 'settings'}>
          <div>
        <iframe
	src="https://sajjadali-cataract-app.hf.space"
	frameborder="0"
	width="100%"
	height="600"
></iframe>



        
      </div>
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBCol>
    </MDBRow>
    </MDBContainer>
    </section>
  );
}
