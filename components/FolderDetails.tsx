import { useState, useEffect } from "react";
import useFetchData from "../hooks/useFetchData";
import EditAndAddModal from "./common/modal/EditAndAddModal";
import RemoveModal from "./common/modal/RemoveModal";
import ShareFolderModal from "./common/modal/ShareFolderModal";
import FloatingActionButton from "./FloatingActionButton";
import CardList from "./common/CardList";
import SearchBar from "./common/SearchBar";
import Image from "next/image";
import add from "@/public/Images/add.svg";
import share from "@/public/Images/share.svg";
import pen from "@/public/Images/pen.svg";
import remove from "@/public/Images/remove.svg";
import styles from "./FolderDetails.module.css";

export default function FolderDetails({ folderListData }) {
  const [windowWidth, setWindowWidth] = useState(0);
  const [selectedFolder, setSelectedFolder] = useState("all");
  const [modals, setModals] = useState({
    addModal: false,
    editModal: false,
    removeModal: false,
    shareFolderModal: false,
  });

  const selectedFolderLinkListData =
    useFetchData("targetUserFolderLinkList", 1, selectedFolder) || [];
  const folderNameAndLinkList = folderListData?.map(({ name, link, id }) => [
    name,
    link.count,
    id,
  ]);
  const { name: selectedFolderName, id: selectedFolderId } =
    folderListData?.find(({ id }) => id === selectedFolder) || {
      name: "",
      id: "",
    };

  const toggleModal = (modalName) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: !prevModals[modalName],
    }));
  };

  const handleFolderClick = (folderId) => {
    setSelectedFolder(folderId);
  };

  const handleWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowWidth);

    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    };
  }, []);

  return (
    <div className={styles.folderDetailsContainer}>
      <SearchBar />
      <div className={styles.folderListContainer}>
        <div className={styles.folderList}>
          <div
            onClick={() => handleFolderClick("all")}
            className={`${styles.folderName} ${
              selectedFolder === "all" ? styles.selected : ""
            }`}
          >
            전체
          </div>
          {folderListData?.map(({ name, id }) => (
            <div
              key={id}
              onClick={() => handleFolderClick(id)}
              className={`${styles.folderName} ${
                selectedFolder === "all" ? styles.selected : ""
              }`}
            >
              {name}
            </div>
          ))}
        </div>
        {windowWidth >= 767 ? (
          <button
            className={styles.addButton}
            onClick={() => toggleModal("addModal")}
          >
            <p>폴더 추가</p>
            <Image src={add} alt="더하기" />
          </button>
        ) : (
          <FloatingActionButton onClick={() => toggleModal("addModal")} />
        )}
      </div>
      <div className={styles.actionButtonContainer}>
        <p>{selectedFolder === "all" ? "전체" : "유용한 글"}</p>
        {!(selectedFolder === "all") && (
          <div className={styles.actionButton}>
            <button
              className={styles.share}
              onClick={() => toggleModal("shareFolderModal")}
            >
              <Image src={share} alt="공유" />
              <span>공유</span>
            </button>
            <button
              className={styles.pen}
              onClick={() => toggleModal("editModal")}
            >
              <Image src={pen} alt="이름변경" />
              <span>이름변경</span>
            </button>
            <button
              className={styles.remove}
              onClick={() => toggleModal("removeModal")}
            >
              <Image src={remove} alt="삭제" />
              <span>삭제</span>
            </button>
          </div>
        )}
      </div>
      <CardList
        cardDataList={selectedFolderLinkListData}
        folderNameAndLinkList={folderNameAndLinkList}
      />
      {modals.addModal && (
        <EditAndAddModal
          modalTitle="폴더 추가"
          buttonText="추가하기"
          onClose={() => toggleModal("addModal")}
        />
      )}
      {modals.editModal && (
        <EditAndAddModal
          modalTitle="폴더 이름 변경"
          buttonText="변경하기"
          onClose={() => toggleModal("editModal")}
          selectedFolderName={selectedFolderName}
        />
      )}
      {modals.removeModal && (
        <RemoveModal
          modalTitle="폴더 삭제"
          onClose={() => toggleModal("removeModal")}
          titleContent={selectedFolderName}
        />
      )}
      {modals.shareFolderModal && (
        <ShareFolderModal
          selectedFolderName={selectedFolderName}
          selectedFolderId={selectedFolderId}
          onClose={() => toggleModal("shareFolderModal")}
        />
      )}
    </div>
  );
}
