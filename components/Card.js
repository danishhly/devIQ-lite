export default function Card({ title, children }) {
  return (
    <div className="p-4 bg-white rounded shadow mb-4">
      <h2 className="font-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
}
