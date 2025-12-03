import SectionHeader from "@/components/SectionHeader";

export default function UtilitiesPage() {
  return (
    <div>
      <SectionHeader title="Available Utilities" />
      <ul className="list-disc pl-5">
        <li>formatDate</li>
        <li>randomQuote</li>
      </ul>
    </div>
  );
}
