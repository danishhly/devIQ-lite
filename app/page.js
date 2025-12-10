import Stats from "../components/Stats";
// Fix typo in import: ChartPlaceholder (was ChartPlaceHolder)
import ChartPlaceholder from "../components/ChartPlaceholder"; 
import SectionHeader from "../components/SectionTitle"; // Extension .tsx removed for cleaner import
// Button is located in components/Buttons.js, not components/ui/Button
import Button from "../components/ui/Buttons"; 
import Card from "@/components/ui/Card";
import TodoList from "../components/TodoList";
import Container from "@/components/ui/Container";

export default function Page() {
  return (
    <>
    <Container>
     <div>
      <SectionHeader title="Welcome to DevDaily" />
    </div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
     <div>
      <SectionHeader title="Welcome to DevDaily" />
    </div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <Stats />
        <ChartPlaceholder />
        <Card title="Get Started">
          <h2 className="text-lg font-semibold mb-2">Welcome</h2>
          <Button>Get Started</Button>
        </Card>
     <div className="space-y-4">
      <h1 className="text-2xl font-bold"> Today's Tasks</h1>
      <TodoList />
    </div>
    </Container>
    </>
  );
}
// Removed duplicate "export default function Home..."