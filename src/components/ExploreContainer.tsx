  import { IonButton, IonModal, IonContent, IonAlert, IonList, IonItem, IonLabel, IonBadge } from '@ionic/react';
  import { useState } from 'react';
  import './ExploreContainer.css';

  interface ContainerProps {}

  const ExploreContainer: React.FC<ContainerProps> = () => {
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    return (
      <div
        id="container"
        style={{
          display: 'flex',          
          flexDirection: 'column',  
          alignItems: 'center',     
          justifyContent: 'center', 
          minHeight: '100vh',       
          textAlign: 'center',      
          gap: '20px',             
        }}
      >
        {/* Clickable text */}
        <strong
          onClick={() => setShowModal(true)}
          style={{ cursor: 'pointer', fontSize: '24px' }}
  >
    Ready to go inside?
  </strong>

  {/* Alert Button */}
  <IonButton onClick={() => setShowAlert(true)}>Click Me</IonButton>

  {/* Alert */}
  <IonAlert
    isOpen={showAlert}
    onDidDismiss={() => setShowAlert(false)}
    header="sige ako nato"
    subHeader="haaaa"
    message="juswaaaa on your service."
    buttons={['Action']}
  ></IonAlert>

  {/* Button */}
  <IonButton onClick={() => setShowModal(true)}>Open</IonButton>

        {/* Modal displaying "Hello Bruh" */}
        <IonModal
          isOpen={showModal}
          onDidDismiss={() => setShowModal(false)}
          className="hello-bruh-modal"
        >
          <IonContent
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh', 
            }}
          >
            <div style={{ fontSize: '32px', fontWeight: 'bold' }}>Hello Bruh ako pala si juswa hindi ko alam bat nag IT ako</div>
          </IonContent>
        </IonModal>
  <IonList>
    <IonItem>
      <IonLabel>Followers</IonLabel>
      <IonBadge color="primary">22k</IonBadge>
    </IonItem>
    <IonItem>
      <IonLabel>Likes</IonLabel>
      <IonBadge color="secondary">118k</IonBadge>
    </IonItem>
    <IonItem>
      <IonLabel>Stars</IonLabel>
      <IonBadge color="tertiary">34k</IonBadge>
    </IonItem>
    <IonItem>
      <IonLabel>Completed</IonLabel>
      <IonBadge color="success">80</IonBadge>
    </IonItem>
    <IonItem>
      <IonLabel>Warnings</IonLabel>
      <IonBadge color="warning">70</IonBadge>
    </IonItem>
    <IonItem>
      <IonLabel>Notifications</IonLabel>
      <IonBadge color="danger">1000</IonBadge>
    </IonItem>
  </IonList>
  
      </div>
        
      
    );
  };
  

  export default ExploreContainer;