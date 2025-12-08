import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Header() {
  return (
    <header className="py-4 border-b">
       Productivity Dashboard
      <nav className="flex gap-4">
        <Link href="/">{siteConfig.name}</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
    
  );
}
