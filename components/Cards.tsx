import React from "react";
import styles from "./Cards.module.css";

export interface CardProps {
  title: string;
  imageSrc: string;
  onClick?: () => void;
}

interface CardsProps {
  items: CardProps[];
}

const Cards: React.FC<CardsProps> = ({ items }) => {
  return (
    <div className={styles.cardsGrid}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className={styles.card}
          onClick={item.onClick}
          role={item.onClick ? "button" : undefined}
        >
          <img src={item.imageSrc} alt={item.title} className={styles.image} />
          <h3 className={styles.title}>{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Cards;
