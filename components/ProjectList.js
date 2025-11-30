export default function ProjectList() {
  const projects = ["Alpha", "Beta", "Gamma"];
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
