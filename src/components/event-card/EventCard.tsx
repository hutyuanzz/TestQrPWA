import React from "react";
import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCol,
  IonGrid,
  IonIcon,
  IonRow,
} from "@ionic/react";
import { checkmarkCircleOutline, scan } from "ionicons/icons";
import "./EventCard.scss";

export interface EventCardData {
  backgroundImage: string;
  titleEvent: string;
  dateTime: string;
  timeRemaining: string;
  fundsRemaining: string;
  eventOrganizer: string;
  avatarImage: string;
}

interface Props {
  eventCard: EventCardData;
}

export const EventCard: React.FC<Props> = prop => {
  return (
    <IonCard mode="ios" className="card-event-component">
      <div
        style={{
          backgroundImage: `url(${prop.eventCard.backgroundImage})`,
        }}
      >
        <IonGrid className="grid-card">
          <IonGrid className="info-1">
            <IonRow className="title-event">{prop.eventCard.titleEvent}</IonRow>
            <IonRow className="info-event">{prop.eventCard.dateTime}</IonRow>
          </IonGrid>
          <IonGrid className="info-2">
            <IonCol className="remaining-wraper">
              <IonGrid className="time-remaining">
                <IonRow className="title-event">
                  {prop.eventCard.timeRemaining}
                </IonRow>
                <IonRow className="info-event">Time Remaining</IonRow>
              </IonGrid>
              <IonGrid className="funds-remaining">
                <IonRow className="title-event">
                  {prop.eventCard.fundsRemaining}
                </IonRow>
                <IonRow className="info-event">Funds Remaining</IonRow>
              </IonGrid>
            </IonCol>
            <IonCol className="check-in-wraper">
              <IonRow className="justify-content avatar">
                <IonAvatar>
                  <img src={prop.eventCard.avatarImage}></img>
                </IonAvatar>
              </IonRow>
              <IonRow className="justify-content name">
                <div>{prop.eventCard.eventOrganizer}</div>
                <IonIcon
                  className="icon-check"
                  icon={checkmarkCircleOutline}
                ></IonIcon>
              </IonRow>
              <IonRow className="justify-content name-title">HOST</IonRow>
              <IonRow className="justify-content">
                <IonButton size="small" className="check-in">
                  <IonIcon slot="start" icon={scan}></IonIcon>
                  Check In
                </IonButton>
              </IonRow>
            </IonCol>
          </IonGrid>
        </IonGrid>
      </div>
    </IonCard>
  );
};
