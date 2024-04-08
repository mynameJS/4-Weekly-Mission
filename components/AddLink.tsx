import { useState } from "react";
import AddLinkModal from "./common/modal/AddLinkModal";
import Button from "./common/Button";
import link from "@/public/Images/link.svg";
import Image from "next/image";
import styles from "./AddLink.module.css";

export default function AddLink({ folderListData }) {
  const [showModal, setShowModal] = useState(false);
  const [newLinkUrl, setNewLinkUrl] = useState("");
  const toggleShowModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };
  const folderNameAndLinkList = folderListData?.map(({ name, link, id }) => [
    name,
    link.count,
    id,
  ]);

  return (
    <div className={styles.addLinkContainer}>
      <div className={styles.addLink}>
        <div className={styles.linkInput}>
          <Image src={link} alt="링크" width={20} height={20} />
          <input
            value={newLinkUrl}
            placeholder="링크를 추가해 보세요"
            onChange={(e) => setNewLinkUrl(e.target.value)}
          />
        </div>
        <Button onClick={toggleShowModal}>추가하기</Button>
      </div>
      {showModal && (
        <AddLinkModal
          folderNameAndLinkList={folderNameAndLinkList}
          onClose={toggleShowModal}
          linkUrl={newLinkUrl}
        />
      )}
    </div>
  );
}
