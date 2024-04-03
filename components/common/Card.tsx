import { useState } from "react";
import { getFormattedDate, getTimeAgo } from "../../utils/date.js";
import RemoveModal from "./modal/RemoveModal";
import AddLinkModal from "@/components/common/modal/AddLinkModal";
import Image from "next/image.js";
import Link from "next/link.js";
import noImage from "@/public/Images/noImage.svg";
import kebab from "@/public/Images/kebab.svg";
import emptyStar from "@/public/Images/emptyStar.svg";
import styles from "./Card.module.css";
import { CardProps } from "@/types/api.js";

export default function Card({
  cardData,
  selectedCardId,
  setSelectedCardId,
  folderNameAndLinkList,
}: CardProps) {
  const [modals, setModals] = useState({
    removeModal: false,
    addLinkModal: false,
  });

  const toggleModal = (modalName: string) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: !prevModals[modalName],
    }));
  };

  const handleModalClose = (e: MouseEvent, modalName: string) => {
    e.preventDefault();
    toggleModal(modalName);
  };

  const handlePopOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSelectedCardId(cardData.id);
  };

  if (!folderNameAndLinkList) return null;

  return (
    <>
      <Link
        className={styles.cardBox}
        href={cardData.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.cardThumbnailContainer}>
          <Image
            className={styles.cardThumbnail}
            src={cardData.imageSource || cardData.image_source || noImage}
            alt="카드썸네일"
            width={300}
            height={300}
            priority
          />
        </div>
        <Image
          className={styles.cardStar}
          src={emptyStar}
          alt="빈 별"
          width={25}
          height={25}
          priority
        />
        <div className={styles.cardDataArea}>
          <div className={styles.cardTimeAgo}>
            <p>{getTimeAgo(cardData.createdAt || cardData.created_at)}</p>
            <button onClick={handlePopOver}>
              <Image src={kebab} alt="케밥" width={20} height={20} priority />
            </button>
            {selectedCardId === cardData.id && (
              <div className={styles.popOver}>
                <div onClick={(e) => handleModalClose(e, "removeModal")}>
                  삭제하기
                </div>
                <div onClick={(e) => handleModalClose(e, "addLinkModal")}>
                  폴더에 추가
                </div>
              </div>
            )}
          </div>
          <div className={styles.cardDesc}>
            {cardData.description || "No Description"}
          </div>
          <div className={styles.cardCreatedAt}>
            {getFormattedDate(cardData.createdAt || cardData.created_at)}
          </div>
        </div>
      </Link>
      {modals.removeModal && (
        <RemoveModal
          modalTitle="링크 삭제"
          titleContent={cardData.url}
          onClose={(e: MouseEvent) => handleModalClose(e, "removeModal")}
        />
      )}
      {modals.addLinkModal && (
        <AddLinkModal
          folderNameAndLinkList={folderNameAndLinkList}
          linkUrl={cardData.url}
          onClose={(e: MouseEvent) => handleModalClose(e, "addLinkModal")}
        />
      )}
    </>
  );
}
