import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
}

export function Button({
  variant = "primary",
  width = "100%",
  height = "100%",
  padding = "0px",
  margin = "0px",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[`button_${variant}`]} ${className}`}
      style={
        {
          "--width": width,
          "--height": height,
          "--padding": padding,
          "--margin": margin,
        } as React.CSSProperties
      }
      {...props}
    >
      {children}
    </button>
  );
}
