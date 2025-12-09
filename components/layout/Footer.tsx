export default function Footer() {
  return (
    <footer className="p-4 bg-gray-900 text-gray-400 text-center text-sm">
      © {new Date().getFullYear()} Productivity App
    </footer>
  );
}