import Stats from "../components/Stats";
// Fix typo in import: ChartPlaceholder (was ChartPlaceHolder)
import ChartPlaceholder from "../components/ChartPlaceHolder"; 
import SectionHeader from "../components/SectionTitle"; // Extension .tsx removed for cleaner import
// Button is located in components/Buttons.js, not components/ui/Button
import Button from "../components/ui/Buttons"; 
import Card from "@/components/ui/Card";
importyb TodoList from "../components/TodoList";

export default function Page() {
  return (
    <>
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
    </>
  );
}
// Removed duplicate "export default function Home..."