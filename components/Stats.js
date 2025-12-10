import Card from "./Card";

export default function Stats() {
  return (
    <Card title="Overview">
      <ul className="grid grid-cols-3 gap-4 text-center">
        <li className="p-2 bg-blue-50 rounded"><span className="block text-2xl font-bold text-blue-600">12</span> Users</li>
        <li className="p-2 bg-green-50 rounded"><span className="block text-2xl font-bold text-green-600">4</span> Projects</li>
        <li className="p-2 bg-orange-50 rounded"><span className="block text-2xl font-bold text-orange-600">245</span> Events</li>
      </ul>
    </Card>
  );
}
