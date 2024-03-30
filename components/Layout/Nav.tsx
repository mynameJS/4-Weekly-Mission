import Button from "../common/Button";
import Image from "next/image";
import logo from "@/public/Images/logo.svg";
import { UserDataProps } from "@/types/api";
import styles from "./Nav.module.css";

export default function Nav({ currentUserData }: UserDataProps) {
  return (
    <div className={styles.nav}>
      <div className={styles.navFrame}>
        <div>
          <Image src={logo} alt="로고이미지" />
        </div>
        {currentUserData ? (
          <div className={styles.accountArea}>
            <Image
              src={
                currentUserData.profileImageSource ||
                currentUserData.image_source
              }
              alt="프로필이미지"
            />
            <span>{currentUserData.email}</span>
          </div>
        ) : (
          <Button>로그인</Button>
        )}
      </div>
    </div>
  );
}
