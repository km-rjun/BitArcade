"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Cards.module.css";

interface CardItem {
  title: string;
  imageSrc: string;
  link: string;
}

interface CardsProps {
  items: CardItem[];
}

const Cards: React.FC<CardsProps> = ({ items }) => {
  const router = useRouter();

  return (
    <div className={styles.cardsGrid}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className={styles.card}
          onClick={() => router.push(item.link)}
          style={{ cursor: "pointer" }}
        >
          <img
            src={item.imageSrc}
            alt={item.title}
            className={styles.image}
          />
          <h3 className={styles.title}>{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Cards;
