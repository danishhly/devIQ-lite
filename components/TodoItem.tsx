export default function TodoItem({ text }) {
  return (
    <div className="flex items-center gap-2 p-2 border-b">
      <input type="checkbox" />
      <span>{text}</span>
    </div>
  );
}
