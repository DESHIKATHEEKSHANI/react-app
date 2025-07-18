import React from "react";
interface ButtonProps {
  children: React.ReactNode;
  color?: string;
  onClick: () => void;
}
const Button = ({ children, onClick, color }: ButtonProps) => {
  return <div className={'btn btn-'+ color} onClick={onClick}>{children}</div>;
};

export default Button;
