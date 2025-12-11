import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributesXH<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export const buttonStyles = {
  primary: "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition",
  secondary: "bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300 transition",
  danger: "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition",
};



export default function Button({ children, variant = "primary", ...props }: ButtonProps) {
  return (
    <button className={buttonStyles[variant]} {...props}>
      {children}
    </button>
  );
}