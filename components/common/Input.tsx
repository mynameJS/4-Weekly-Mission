import Image from "next/image";
import eyeOn from "@/public/Images/eye-on.svg";
import eyeOff from "@/public/Images/eye-off.svg";
import { useState } from "react";
import styles from "./Input.module.css";

// 임시 유효성 검사
const validateFunc = (input: string) => {
  return input.length > 4;
};

interface InputProps {
  name: string;
  type: string;
  value: string;
  onChange: (name: string, value: string) => void;
  placeholder: string;
}

export default function Input({
  name,
  type,
  value,
  onChange,
  placeholder = "",
}: InputProps) {
  const [eye, setEye] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const customType = type === "password" ? (eye ? "text" : "password") : type;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
  };

  const handleEyeClick = () => {
    setEye(!eye);
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsValid(validateFunc(e.target.value));
  };

  const inputStyle = isValid ? styles.input : styles.errorInput;

  return (
    <>
      <input
        className={inputStyle}
        name={name}
        value={value}
        type={customType}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {type === "password" && (
        <Image
          src={eye ? eyeOn : eyeOff}
          alt="password-eye"
          onClick={handleEyeClick}
        />
      )}
      {!isValid && <div className={styles.error}>내용을 다시 작성해주세요</div>}
    </>
  );
}
