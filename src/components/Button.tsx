import React from "react";
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}
const Button = ({ children, onClick }: ButtonProps) => {
  return <div className="btn btn-primary" onClick={onClick}>{children}</div>;
};

export default Button;
