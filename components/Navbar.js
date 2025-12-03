export default function Navbar() {
  return (
    <nav style={{ padding: 20, borderBottom: "1px solid #ddd" }}>
      <a href="/">Home</a> | <a href="/tasks">Tasks</a> | <a href="/notes">Notes</a> | <a href="/habits">Habits</a>
      <Link href="/utilities">Utilities</Link>

    </nav>
  );
}
