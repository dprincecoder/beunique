import { Edit2 } from "iconsax-react";
import React from "react";
import styles from "./css/account.module.css";

const Card = ({ title, firstText, secondText, showEdit }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div>
          <h3>{title}</h3>
          {showEdit && <Edit2 />}
        </div>
      </div>
      <div className={styles.cardBottom}>
        <div>
          <h5>{firstText}</h5>
          <p>{secondText}</p>
        </div>
      </div>
    </div>
  );
};

const MyAccount = () => {
  return (
    <div className={styles.account}>
      <div className={styles.title}>Account overview</div>

      <div className={styles.content}>
        <Card
          title="Account details"
          firstText="Tyrone Johnson"
          secondText="TyroneJohnson@ gmail.com"
          showEdit={false}
        />
        <Card
          title="Address book"
          firstText="Your default shipping address"
          secondText="234 Bulivard drive way, Lekki Epe Express way, Lagos, Nigeria"
          showEdit={true}
        />
      </div>
    </div>
  );
};

export default MyAccount;