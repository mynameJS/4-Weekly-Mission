import Image from "next/image";
import Link from "next/link";
import logo from "@/public/Images/logo.svg";
import eyeOn from "@/public/Images/eye-on.svg";
import eyeOff from "@/public/Images/eye-off.svg";
import google from "@/public/Images/google.png";
import kakao from "@/public/Images/Kakao.svg";
import styles from "@/styles/Sign.module.css";

export default function SignIn() {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <Link className={styles.logoLink} href="/">
          <Image
            className={styles.headerLogo}
            src={logo}
            width={20}
            height={20}
            alt="홈으로 연결된 Linkbrary 로고"
          />
        </Link>
        <p className={styles.headerMessage}>
          회원이 아니신가요?
          <Link className={styles.headerLink} href="/signup">
            회원 가입하기
          </Link>
        </p>
      </div>
      <div className={styles.signBox}>
        <form className={styles.signForm}>
          <div className={styles.signInputs}>
            <div className={styles.signInputBox}>
              <label className={styles.signInputLabel} htmlFor="email">
                이메일
              </label>
              <input
                className={styles.signInput}
                type="email"
                id="email"
                name="email"
                placeholder="이메일을 입력해 주세요."
              />
            </div>
            <div className={`${styles.signInputBox} ${styles.signPassword}`}>
              <label className={styles.signInputLabel} htmlFor="password">
                비밀번호
              </label>
              <input
                className={styles.signInput}
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호를 입력해 주세요."
              />
              <button className={styles.eyeButton} type="button" tabIndex={-1}>
                <Image src={eyeOff} alt="눈동자가림" width={20} height={20} />
              </button>
            </div>
          </div>
          <button className={styles.signFormButton} type="submit">
            로그인
          </button>
        </form>
        <div className={styles.snsBox}>
          <span className={styles.snsText}>소셜 로그인</span>
          <div className={styles.snsLinks}>
            <Link
              className={`${styles.snsLink} ${styles.googleLink}`}
              href="https://www.google.com/"
            >
              <Image src={google} alt="구글 로고" width={20} height={20} />
            </Link>
            <Link
              className={`${styles.snsLink} ${styles.kakaoLink}`}
              href="https://www.kakaocorp.com/page/"
            >
              <Image src={kakao} alt="카카오 로고" width={20} height={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
