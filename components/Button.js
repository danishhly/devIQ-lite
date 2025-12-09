const buttonStyles = {
  primary: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",
  secondary: "bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600",
};
export default function Button({ children, variant = "primary" }) {
  return <button className={buttonStyles[variant]}>{children}</button>;
}