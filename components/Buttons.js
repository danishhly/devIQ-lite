export default function Button({ children }) {
  return <button style={{ padding: "8px 14px" }}>{children}</button>;
}

export const buttonStyles = {
  primary: "bg-blue-600 text-white px-4 py-2 rounded",
  secondary: "bg-gray-200 text-black px-4 py-2 rounded",
};
