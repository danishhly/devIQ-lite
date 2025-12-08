export default function ProgressBar({ value }: { value: number }) {
  return (
    <div className="w-full bg-gray-200 h-3 rounded">
      <div
        className="bg-blue-500 h-3 rounded"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
