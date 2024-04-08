import Image from "next/image";
import Link from "next/link";
import logo from "@/public/Images/logo.svg";
import eyeOn from "@/public/Images/eye-on.svg";
import eyeOff from "@/public/Images/eye-off.svg";
import google from "@/public/Images/google.png";
import kakao from "@/public/Images/Kakao.svg";
import styles from "@/styles/Sign.module.css";
import { validatePasswordInput } from "@/utils/validate";
import { checkEmailValidate, signUpUser } from "@/utils/api";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface ShowState {
  [key: string]: boolean;
}

export default function SignUp() {
  const router = useRouter();

  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [isShow, setIsShow] = useState<ShowState>({
    password: false,
    passwordConfirm: false,
  });

  const toggleIsShow = (key: string) => {
    setIsShow((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  const onBlurEmailInput = async (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const result = await checkEmailValidate(value);
    if (result.error) {
      setErrorMessage({
        ...errorMessage,
        [name]: result.error.message,
      });
    } else {
      setErrorMessage({
        ...errorMessage,
        [name]: "",
      });
    }
  };

  const onBlurPasswordInput = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "passwordConfirm") {
      const isPasswordValid = value === userInput.password;
      setErrorMessage({
        ...errorMessage,
        [name]: isPasswordValid ? "" : "비밀번호가 일치하지 않아요",
      });
      return;
    }

    setErrorMessage({
      ...errorMessage,
      [name]: validatePasswordInput(value)
        ? ""
        : "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    });
  };

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidForm = Object.values(errorMessage).every(
      (message) => message === ""
    );
    if (isValidForm) {
      try {
        const { passwordConfirm, ...submitUserInput } = userInput;
        const result = await signUpUser(submitUserInput);
        const { data: accessToken } = await signUpUser(submitUserInput);
        localStorage.setItem("accessToken", accessToken);
        router.push("/folder");
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("accessToken");
    if (isLoggedIn) {
      router.push("/folder");
    }
  });

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
          이미 회원이신가요?
          <Link className={styles.headerLink} href="/signin">
            로그인 하기
          </Link>
        </p>
      </div>
      <div className={styles.signBox}>
        <form className={styles.signForm} onSubmit={onSubmitForm}>
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
                onChange={onChangeInput}
                onBlur={onBlurEmailInput}
              />
              {errorMessage.email && (
                <p className={styles.errorMessage}>{errorMessage.email}</p>
              )}
            </div>
            <div className={`${styles.signInputBox} ${styles.signPassword}`}>
              <label className={styles.signInputLabel} htmlFor="password">
                비밀번호
              </label>
              <input
                className={styles.signInput}
                type={isShow.password ? "text" : "password"}
                id="password"
                name="password"
                placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
                onChange={onChangeInput}
                onBlur={onBlurPasswordInput}
              />
              {errorMessage.password && (
                <p className={styles.errorMessage}>{errorMessage.password}</p>
              )}
              <button
                className={styles.eyeButton}
                type="button"
                tabIndex={-1}
                onClick={() => toggleIsShow("password")}
              >
                <Image
                  src={isShow.password ? eyeOn : eyeOff}
                  alt="눈동자가림"
                  width={20}
                  height={20}
                />
              </button>
            </div>
            <div className={`${styles.signInputBox} ${styles.signPassword}`}>
              <label
                className={styles.signInputLabel}
                htmlFor="passwordConfirm"
              >
                비밀번호 확인
              </label>
              <input
                className={styles.signInput}
                type={isShow.passwordConfirm ? "text" : "password"}
                id="passwordConfirm"
                name="passwordConfirm"
                placeholder="비밀번호와 일치하는 값을 입력해 주세요."
                onChange={onChangeInput}
                onBlur={onBlurPasswordInput}
              />
              {errorMessage.passwordConfirm && (
                <p className={styles.errorMessage}>
                  {errorMessage.passwordConfirm}
                </p>
              )}
              <button
                className={styles.eyeButton}
                type="button"
                tabIndex={-1}
                onClick={() => toggleIsShow("passwordConfirm")}
              >
                <Image
                  src={isShow.passwordConfirm ? eyeOn : eyeOff}
                  alt="눈동자가림"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
          <button className={styles.signFormButton} type="submit">
            회원가입
          </button>
        </form>
        <div className={styles.snsBox}>
          <span className={styles.snsText}>다른 방식으로 가입하기</span>
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
