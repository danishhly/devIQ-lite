export default function TasksCount({ count }: { count: number }) {
  return <p className="text-sm text-gray-500">Total Tasks: {count}</p>;
}
