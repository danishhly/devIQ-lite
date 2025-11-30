export const metadata = { title: "InsightIQ Lite" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <nav className="p-4 bg-white shadow">InsightIQ Lite</nav>
        <main className="p-6">{children}</main>
      </body>
      <footer className="p-4 text-center text-sm text-gray-500">
  © 2025 InsightIQ Lite
</footer>

    </html>
  );
}
