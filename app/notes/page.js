import NoteCard from "@/components/NoteCard";
import { db } from "@/lib/db";

export default function NotesPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {db.notes.map((n, i) => (
        <NoteCard key={i} text={n} />
      ))}
    </div>
  );
}
