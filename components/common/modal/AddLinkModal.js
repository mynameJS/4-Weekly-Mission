import { useState } from "react";
import ModalBackgroundDim from "./ModalBackgroundDim";
import check from "@/public/Images/check.svg";
import styles from "./AddLinkModal.module.css";
import Image from "next/image";

export default function AddLinkModal({
  onClose,
  linkUrl,
  folderNameAndLinkList,
}) {
  const [selectedFolderId, setSelectedFolderId] = useState(null);
  const handleSelectedFolderId = (e, folderId) => {
    e.preventDefault();
    setSelectedFolderId(folderId);
  };
  return (
    <>
      <ModalBackgroundDim />
      <div className={styles.addLinkModalContainer}>
        <div className={styles.addLinkModalContent}>
          <div className={styles.addLinkModalTitle}>
            <p>폴더에 추가</p>
            <p>{linkUrl}</p>
          </div>
          <div className={styles.addLinkModalCurrentFolderList}>
            {folderNameAndLinkList?.map(([name, count, id]) => (
              <div
                className={`${styles.folderContainer} ${
                  selectedFolderId === id ? styles.selected : ""
                }`}
                key={id}
                onClick={(e) => handleSelectedFolderId(e, id)}
              >
                <div className={styles.folderContent}>
                  <p>{name}</p>
                  <p>{count}개 링크</p>
                </div>
                {selectedFolderId === id && (
                  <Image src={check} alt="체크표시" width={20} height={20} />
                )}
              </div>
            ))}
          </div>
          <button>추가하기</button>
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
