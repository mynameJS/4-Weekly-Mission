import { useState } from "react";
import ModalBackgroundDim from "./ModalBackgroundDim";
import Image from "next/image";
import styles from "./EditAndAddModal.module.css";
import { EditAndAddModalProps } from "@/types/api";

export default function EditAndAddModal({
  modalTitle,
  buttonText,
  selectedFolderName = "",
  onClose,
}: EditAndAddModalProps) {
  const [inputValue, setInputValue] = useState<string>(selectedFolderName);
  return (
    <>
      <ModalBackgroundDim />
      <div className={styles.modalContainer}>
        <p className={styles.modalTitle}>{modalTitle}</p>
        <div className={styles.modalInputAndButton}>
          <input
            value={inputValue}
            placeholder="내용 입력"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button>{buttonText}</button>
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
