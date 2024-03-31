import Image from "next/image";
import { HeaderProps } from "@/types/api";
import styles from "./Header.module.css";

export default function Header({ folderName, owner }: HeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.headerBox}>
        <div className={styles.avatarBox}>
          <Image
            className={styles.avatar}
            src={owner.profileImageSource}
            alt="스마일 이미지"
            width={60}
            height={40}
            priority
          />
          <span>@{owner.name}</span>
        </div>
        <div className={styles.favorite}>{folderName}</div>
      </div>
    </div>
  );
}
