import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol, IonBadge, IonIcon, IonButton } from "@ionic/react"
import { heart, share } from "ionicons/icons"

const Feed: React.FC = () => {
  const cardData = [
    { title: "dota 2", subtitle: "dota na dota ka boy" },
    { title: "valorant", subtitle: "tara valo bawal iyakin" },
    { title: "wuwa", subtitle: "open world" },
    { title: "mobile legends", subtitle: "tara ml pang  pa stress" },
    { title: "Call of Duty", subtitle: "tara cod pang pa stress" },
  ];

  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons>
                    <IonMenuButton></IonMenuButton>
                    <IonTitle>Feed</IonTitle>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid className="ion-padding">
            <IonRow>
              {cardData.map((card, index) => (
                <IonCol size="12" sizeMd="6" key={index} className="ion-padding">
                  <IonCard>
                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                    <IonCardHeader>
                      <IonCardTitle>{card.title}</IonCardTitle>
                      <IonCardSubtitle>{card.subtitle}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <span>Here's a small text description for the card content.</span>
                        <IonBadge color="primary">{index + 1}</IonBadge>
                      </div>
                      <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                        <IonButton fill="clear" size="small">
                          <IonIcon slot="start" icon={heart}></IonIcon>
                          Like
                        </IonButton>  
                        <IonButton fill="clear" size="small">
                          <IonIcon slot="start" icon={"Comment"}></IonIcon>
                          Comment
                        </IonButton>
                        <IonButton fill="clear" size="small">
                          <IonIcon slot="start" icon={share}></IonIcon>
                          Share
                        </IonButton>
                      </div>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </IonContent>
    </IonPage>
  );
};

export default Feed;