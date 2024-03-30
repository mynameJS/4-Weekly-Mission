import { useState } from "react";
import { getFormattedDate, getTimeAgo } from "../../utils/date.js";
// import RemoveModal from './modal/RemoveModal.js';
// import AddLinkModal from './modal/AddLinkModal.js';
import Image from "next/image.js";
import Link from "next/link.js";
import noImage from "@/public/Images/noImage.svg";
import kebab from "@/public/Images/kebab.svg";
import emptyStar from "@/public/Images/emptyStar.svg";
import styles from "./Card.module.css";

export default function Card({
  cardData,
  selectedCardId,
  setSelectedCardId,
  folderNameAndLinkList,
}) {
  const [modals, setModals] = useState({
    removeModal: false,
    addLinkModal: false,
  });

  const toggleModal = (modalName) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: !prevModals[modalName],
    }));
  };

  const handleModalClose = (e, modalName) => {
    e.preventDefault();
    toggleModal(modalName);
  };

  const handlePopOver = (e) => {
    e.preventDefault();
    setSelectedCardId(cardData.id);
  };
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
          />
        </div>
        <Image className={styles.cardStar} src={emptyStar} alt="빈 별" />
        <div className={styles.cardDataArea}>
          <div className={styles.cardTimeAgo}>
            <p>{getTimeAgo(cardData.createdAt || cardData.created_at)}</p>
            <button onClick={handlePopOver}>
              <Image src={kebab} alt="케밥" />
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
      {/* {modals.removeModal && (
        <RemoveModal
          modalTitle="링크 삭제"
          titleContent={cardData.url}
          onClose={(e) => handleModalClose(e, "removeModal")}
        />
      )}
      {modals.addLinkModal && (
        <AddLinkModal
          folderNameAndLinkList={folderNameAndLinkList}
          linkUrl={cardData.url}
          onClose={(e) => handleModalClose(e, "addLinkModal")}
        />
      )} */}
    </>
  );
}
