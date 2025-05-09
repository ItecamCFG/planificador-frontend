"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

// Definimos el tipo para las tareas usando una firma de índice
interface Assignment {
  resource: string;
  tasks: {
    [key: string]: string;
  };
}

const assignments: Assignment[] = [
  {
    resource: "Recurso 1",
    tasks: {
      Lunes: "Tarea 1",
      Martes: "Tarea 2",
      Miércoles: "",
      Jueves: "",
      Viernes: "Tarea 3",
    },
  },
  {
    resource: "Recurso 2",
    tasks: {
      Lunes: "",
      Martes: "Tarea 4",
      Miércoles: "Tarea 5",
      Jueves: "",
      Viernes: "",
    },
  },
];

export default function AssignmentGrid() {
  return (
    <Card className="mt-10">
      <CardHeader>
        <CardTitle>📅 Asignaciones Semanales</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <table className="min-w-full text-left border">
          <thead>
            <tr className="bg-muted">
              <th className="px-4 py-2 border">Recurso</th>
              {days.map((day) => (
                <th key={day} className="px-4 py-2 border">
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {assignments.map((res, idx) => (
              <tr key={idx} className="hover:bg-accent">
                <td className="px-4 py-2 border font-medium">{res.resource}</td>
                {days.map((day) => (
                  <td key={day} className="px-4 py-2 border">
                    {res.tasks[day] || "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
