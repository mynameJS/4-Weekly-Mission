import Image from "next/image";
import searchBar from "@/public/Images/searchBar.svg";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <form className={styles.form}>
      <Image
        src={searchBar}
        alt="검색 돋보기 이미지"
        width={20}
        height={20}
        priority
      />
      <input placeholder="링크를 검색해 보세요." />
    </form>
  );
}
