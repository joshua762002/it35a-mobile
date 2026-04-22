import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"

const Search: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons>
                    <IonMenuButton></IonMenuButton>
                    <IonTitle>Searching sa pag mamahal nya </IonTitle>
                </IonButtons>
                
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        </IonContent>
    </IonPage>
    );   

};

export default Search;