import { ReactNode, MouseEventHandler } from "react";
import styles from "@/components/common/Button.module.css";

interface ButtonProps {
  children: ReactNode | string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={styles.gradientButton}>
      {children}
    </button>
  );
}
