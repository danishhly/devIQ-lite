import NotFound from "@/components/ui/NotFound";

export default function Custom404() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <NotFound />
    </div>
  );
}