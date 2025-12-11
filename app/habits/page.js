import HabitCard from "@/components/HabitCard";
import { db } from "@/lib/db";

export default function HabitsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {db.habits.map((h, i) => (
        <HabitCard key={i} habit={h} />
      ))}
    </div>
  );
}