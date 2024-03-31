import { useState, useEffect } from "react";
import Card from "./Card";
import { CardListProps } from "@/types/api";
import { MouseEvent } from "react";
import styles from "./CardList.module.css";

export default function CardList({
  cardDataList = [],
  folderNameAndLinkList = [],
}: CardListProps) {
  const [selectedCardId, setSelectedCardId] = useState(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!document.getElementById("cardList").contains(e.target as Node)) {
        setSelectedCardId(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div id="cardList" className={styles.cardList}>
      <div className={styles.cardContainer}>
        {cardDataList.map((cardData) => (
          <Card
            key={cardData.id}
            cardData={cardData}
            selectedCardId={selectedCardId}
            setSelectedCardId={setSelectedCardId}
            folderNameAndLinkList={folderNameAndLinkList}
          />
        ))}
      </div>
    </div>
  );
}
