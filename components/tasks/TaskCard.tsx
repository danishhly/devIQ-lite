import PriorityBadge from "./PriorityBadge";

// Wrapped JSX in a default export function
export default function TaskCard({ title, priority = "low" }: { title: string, priority?: "low" | "mid" | "high" }) {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white mb-2">
      <div className="flex justify-between items-center">
        <span className="font-medium">{title}</span>
        <PriorityBadge level={priority} />
      </div>
    </div>
  );
}