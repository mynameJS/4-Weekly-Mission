import SNS_DATA from "@/constant/sns";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const snsDataList = Object.entries(SNS_DATA);

  return (
    <div className={styles.footer}>
      <div className={styles.footerFrame}>
        <div className={styles.footerItems}>
          <span>©codeit - 2024</span>
          <div className={styles.footerLink}>
            <Link className={styles.link} href="/">
              Privacy Policy
            </Link>
            <Link className={styles.link} href="/">
              FAQ
            </Link>
          </div>
          <div className={styles.sns}>
            {snsDataList.map(([title, data]) => (
              <Link
                className={styles.link}
                key={data.link}
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={data.imgSource}
                  alt={title}
                  width={20}
                  height={20}
                  priority
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
