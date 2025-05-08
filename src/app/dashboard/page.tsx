import Link from "next/link";
import ResourceTable from "@/components/ui/ResourceTable";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Simulación de datos para demo (estos vendrán del JSON/backend real en el futuro)
const projects = [
  { id: "p1", name: "Proyecto A", deadline: "2025-06-01" },
  { id: "p2", name: "Proyecto B", deadline: "2025-07-15" },
];

const tasks = [
  { id: "t1", project_id: "p1", name: "Tarea 1", hours: 10, expertise: "Junior", sequence: 1 },
  { id: "t2", project_id: "p1", name: "Tarea 2", hours: 15, expertise: "Senior", sequence: 2 },
  { id: "t3", project_id: "p2", name: "Tarea 3", hours: 20, expertise: "Experto", sequence: 1 },
];

const resources = [
  { name: "Recurso 1", expertise: "Junior" },
  { name: "Recurso 2", expertise: "Senior" },
];

export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
        📊 Planificador Inteligente
      </h1>
      <p className="text-muted-foreground mb-6">
        Bienvenido al entorno de planificación y optimización avanzada de proyectos.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Proyectos Activos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">{projects.length}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tareas Totales</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">{tasks.length}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recursos Disponibles</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">{resources.length}</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">📁 Proyectos</h2>

        <Accordion type="single" collapsible className="w-full">
          {projects.map((project) => {
            const tareasProyecto = tasks.filter((t) => t.project_id === project.id);
            return (
              <AccordionItem value={project.id} key={project.id}>
                <AccordionTrigger>
                  <div className="flex justify-between w-full">
                    <span className="font-medium">{project.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {project.deadline} · {tareasProyecto.length} tareas
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="pl-4 list-disc">
                    {tareasProyecto.map((task) => (
                      <li key={task.id} className="mb-2">
                        <div>
                          <span className="font-semibold">{task.name}</span> · {task.hours}h · {task.expertise} · secuencia {task.sequence}
                        </div>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">👥 Recursos</h2>
        <ResourceTable resources={resources} />
      </div>

      <div className="mt-10">
        <Link href="/">
          <Button>Volver al inicio</Button>
        </Link>
      </div>
    </div>
  );
}
