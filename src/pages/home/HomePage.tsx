import {
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonText,
  IonToolbar,
} from "@ionic/react";
import React from "react";

import "./HomePage.scss";
import { add, arrowForward, documentsOutline } from "ionicons/icons";
import { BalanceCard } from "../../components/balance-card/BalanceCard";
import Logo from "../../components/logo/Logo";
import {
  EventCard,
  EventCardData,
} from "../../components/event-card/EventCard";

const Home: React.FC = () => {
  const eventCards: EventCardData[] = [
    {
      backgroundImage: "https://swiperjs.com/demos/images/nature-5.jpg",
      titleEvent: "EPIC CLUB PARTY",
      dateTime: "Tue, 25th Augus 9:00pm",
      timeRemaining: "8:00:00",
      fundsRemaining: "$280.00",
      eventOrganizer: "Thomas George",
      avatarImage:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80",
    },
  ];

  return (
    <IonPage className="home-page">
      <IonHeader mode="ios">
        <IonToolbar mode="ios" className="logo-wraper">
          <Logo />
        </IonToolbar>
        <IonToolbar mode="ios" className="none-border">
          <BalanceCard balance="0.00" />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard mode="ios" color="medium" className="event-code">
          <IonGrid>
            <IonRow>
              <IonButton size="default">
                <IonIcon slot="start" icon={documentsOutline}></IonIcon>
                Paste
              </IonButton>

              <IonInput
                className="input"
                value={""}
                placeholder="Invite Code"
              ></IonInput>
              <IonButton size="default">Join</IonButton>
            </IonRow>
          </IonGrid>
        </IonCard>

        <div className="hosted-event">
          <div>
            <IonText className="title">HOSTED EVENTS</IonText>
          </div>
          <div>
            <IonText className="description">
              {"You currently aren't hosting any events."}
            </IonText>
          </div>
        </div>

        <div className="joined-event">
          <div>
            <IonText className="title">JOINED EVENTS</IonText>
          </div>
        </div>

        {eventCards.map((card, index) => {
          return <EventCard eventCard={card} key={index}></EventCard>;
        })}
      </IonContent>
    </IonPage>
  );
};

export default Home;
