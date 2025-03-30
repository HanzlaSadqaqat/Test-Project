import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  radius?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  width = "40%",
  height = "100%",
  padding = "0px",
  margin = "0px",
  radius = "8px",
}) => {
  return (
    <div
      className={`${styles.card}`}
      style={
        {
          "--width": width,
          "--height": height,
          "--padding": padding,
          "--margin": margin,
          "--radius": radius,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default Card;
