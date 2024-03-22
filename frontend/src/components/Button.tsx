import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

function Button({ type, onClick, children }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-80 p-2 m-3 text-blue text-2xl font-bold bg-green shadow-custom shadow-blue "
    >
      {children}
    </button>
  );
}

export default Button;
