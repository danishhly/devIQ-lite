export default function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
      {title}
    </h2>
  );
}
