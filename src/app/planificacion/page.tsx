import AssignmentGrid from "@/components/ui/AssignmentGrid";

export default function PlanificacionPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">🧠 Planificación y Optimización</h1>
      <AssignmentGrid />
      {/* Aquí puedes meter también el botón para lanzar el solver, mostrar resultados, etc. */}
    </div>
  );
}