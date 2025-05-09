import ResourceTable from "@/components/ui/ResourceTable";

const resources = [
  {
    id: 1,
    name: "Recurso 1",
    level: "Junior",
    cost: 20,
    expertise: "Junior",
    availability: {
      Lunes: 8, Martes: 8, Miércoles: 4, Jueves: 8, Viernes: 6,
    },
  },
  {
    id: 2,
    name: "Recurso 2",
    level: "Senior",
    cost: 40,
    expertise: "Senior",
    availability: {
      Lunes: 6, Martes: 8, Miércoles: 8, Jueves: 8, Viernes: 8,
    },
  },
];

export default function RecursosPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">👥 Recursos</h1>
      <ResourceTable resources={resources} />
    </div>
  );
}
