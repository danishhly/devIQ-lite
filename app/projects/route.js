export async function GET() {
  return Response.json({ projects: ["Alpha", "Beta", "Gamma"] });
}
