import Stats from "../components/Stats";
import ChartPlaceholder from "../components/ChartPlaceholder";
import SectionHeader from "../components/SectionTitletsx";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function Page() {
  return (
    <>
     <div>
      <SectionHeader title="Welcome to DevDaily" />
    </div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <Stats />
        <ChartPlaceholder />
        <Card>
      <h2 className="text-lg font-semibold mb-2">Welcome</h2>
      <Button>Get Started</Button>
    </Card>
    </>
  );
  
}
export default function Home() {
  return <h1>Productivity Dashboard</h1>;
}

