import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
} from "@ionic/react";
import React from "react";

import "./BalanceCard.scss";
import { addSharp } from "ionicons/icons";

interface Props {
  balance?: string;
}

export const BalanceCard: React.FC<Props> = props => {
  return (
    <div className="balance-card-component">
      <IonCard className="balance-card">
        <IonButton mode="ios" class="btn-balance">
          <IonIcon slot="start" icon={addSharp}></IonIcon>
          Add Balance
        </IonButton>
        <IonCardHeader className="header-card">
          <IonCardSubtitle color="secondary" className="text-center">
            Balance
          </IonCardSubtitle>
          <IonCardTitle color="light" className="text-center balance-number">
            ${props.balance}
          </IonCardTitle>
        </IonCardHeader>
      </IonCard>
    </div>
  );
};
