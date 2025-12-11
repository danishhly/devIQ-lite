export default function ProjectList() {
  const projects = ["Alpha", "Beta", "Gamma"];

  if (projects.length === 0) return <p className="text-gray-500 italic">No active projects.</p>;
  
  return (
    <ul className="space-y-2">
      {projects.map((p) => (
        <li key={p} className="p-2 bg-white rounded shadow">
          {p}
        </li>
      ))}
    </ul>
  );
}
