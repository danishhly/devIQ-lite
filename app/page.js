import Stats from "../components/Stats";
import ChartPlaceholder from "../components/ChartPlaceholder";

export default function Page() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <Stats />
        <ChartPlaceholder />
    </>
  );
  
}
export default function Home() {
  return <h1>Productivity Dashboard</h1>;
}

