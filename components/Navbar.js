import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-5 border-b border-gray-200 flex gap-4 text-blue-600">
      <Link href="/">Home</Link>
      <Link href="/tasks">Tasks</Link>
      <Link href="/notes">Notes</Link>
      <Link href="/habits">Habits</Link>
      <Link href="/utilities">Utilities</Link>
    </nav>
  );
}