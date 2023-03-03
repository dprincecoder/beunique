import { Edit2 } from "iconsax-react";
import Image from "next/image";
import React from "react";
import styles from "./css/orders.module.css";
import OrderPic from "../../public/page_imgs/OrderPic.png";

const Card = ({ title, firstText, secondText, showEdit }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardLeft}>
        <div>
          <Image src={OrderPic} alt=""/>
          <div className={styles.cardContent}>
            <div className={styles.contentTop}>
                <h5>Bumb red short gown</h5>
                <p>Order 129083745</p>
            </div>
          </div>
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

const MyOrders = () => {
  return (
    <div className={styles.orders}>
      <div className={styles.title}>Orders</div>

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

export default MyOrders;
