export default function Page() {
  return <h1 className="text-2xl font-bold">Dashboard</h1>;
}
import Stats from "../components/Stats";

export default function Page() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <Stats />
    </>
  );
}
