import ModalBackgroundDim from "./ModalBackgroundDim";
import Image from "next/image";
import styles from "./RemoveModal.module.css";

export default function RemoveModal({ modalTitle, titleContent, onClose }) {
  return (
    <>
      <ModalBackgroundDim />
      <div className={styles.removeModalContainer}>
        <div className={styles.removeModalTitle}>
          <div className={styles.removeModalContent}>
            <p className={styles.modalTitle}>{modalTitle}</p>
            <p>{titleContent}</p>
          </div>
          <button>삭제하기</button>
        </div>
        <button className={styles.modalCloseButton} onClick={onClose}>
          <Image
            src="https://weekly-mission-week9.vercel.app/images/close.svg"
            alt="close"
            width={20}
            height={20}
          />
        </button>
      </div>
    </>
  );
}
