import ModalBackgroundDim from "./ModalBackgroundDim";
import kakao from "@/public/Images/Kakao.svg";
import facebook from "@/public/Images/Facebook_2.svg";
import shareLink from "@/public/Images/link2.svg";
import Image from "next/image";
import styles from "./ShareFolderModal.module.css";
import { ShareFolderModalProps } from "@/types/api";

export default function ShareFolderModal({
  selectedFolderName,
  selectedFolderId,
  onClose,
}: ShareFolderModalProps) {
  const shareUrl = `http://localhost:3000/shared/${selectedFolderId}`;

  const handleCopyUrl = () => {
    const urlToCopy = shareUrl;
    navigator.clipboard
      .writeText(urlToCopy)
      .then(() => {
        alert("URL이 복사되었습니다.");
      })
      .catch((err) => {
        console.error("복사 중 오류 발생:", err);
      });
  };

  const handleShareFolderByFacebook = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer.php?u=${shareUrl}`;
    window.open(facebookShareUrl);
  };

  return (
    <>
      <ModalBackgroundDim />
      <div className={styles.shareModalContainer}>
        <div className={styles.shareModalContent}>
          <div className={styles.shareModalTitle}>
            <p>폴더 공유</p>
            <p>{selectedFolderName}</p>
          </div>
          <div className={styles.shareTypeList}>
            <div className={styles.shareType}>
              <div className={styles.shareKakao}>
                <Image src={kakao} alt="카카오톡" width={20} height={20} />
              </div>
              <p>카카오톡</p>
            </div>
            <div className={styles.shareType}>
              <div
                className={styles.shareFacebook}
                onClick={handleShareFolderByFacebook}
              >
                <Image src={facebook} alt="페이스북" width={20} height={20} />
              </div>
              <p>페이스북</p>
            </div>
            <div className={styles.shareType}>
              <div className={styles.shareCopyLink} onClick={handleCopyUrl}>
                <Image src={shareLink} alt="링크복사" width={20} height={20} />
              </div>
              <p>링크 복사</p>
            </div>
          </div>
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
