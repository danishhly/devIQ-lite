export default function ProgressBar({ value }: { value: number }) {
  return (
    <div 
      className="w-full bg-gray-200 h-3 rounded"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="bg-blue-500 h-3 rounded transition-all duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
