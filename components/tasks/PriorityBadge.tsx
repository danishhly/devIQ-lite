export default function PriorityBadge({ level }: { level: "low" | "mid" | "high" }) {
 const colors = {
    low: "bg-green-300",
    mid: "bg-yellow-300",
    high: "bg-orange-400",
    critical: "bg-red-600 text-white",
  };
  return <span className={`px-2 py-1 text-xs rounded ${colors[level]}`}>{level}</span>;
}
