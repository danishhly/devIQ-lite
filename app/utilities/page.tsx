// Fixed import path: components/SectionHeader does not exist, it is components/SectionTitle
import SectionHeader from "@/components/SectionTitle";

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