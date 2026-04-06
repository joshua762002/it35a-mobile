import { IonButtons, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const template:  React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons>
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Template</IonTitle>
                </IonToolbar>   
            </IonHeader>
        </IonPage>
    );
};

export default template;
    