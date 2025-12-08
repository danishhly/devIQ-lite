export default function TodayCard({ title, value }) {
  return (
    <div className="p-4 border rounded-md shadow-sm">
      <h3 className="font-medium">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
