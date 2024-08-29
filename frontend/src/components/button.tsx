import React, { ReactNode } from "react";
import "../css/button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "1" | "2";
}

export function Button({ children, size = "1", ...props }: ButtonProps) {
  const sizeClass = `button-size-${size}`;

  return (
    <button {...props} className={`button ${sizeClass}`}>
      {children}
    </button>
  );
}
