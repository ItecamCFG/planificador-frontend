"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mockTasks = [
  { id: "t1", title: "Tarea 1", status: "todo" },
  { id: "t2", title: "Tarea 2", status: "in_progress" },
  { id: "t3", title: "Tarea 3", status: "done" },
  { id: "t4", title: "Tarea 4", status: "todo" },
  { id: "t5", title: "Tarea 5", status: "in_progress" },
];

const columns = {
  todo: { title: "📥 Por Hacer", color: "bg-slate-100" },
  in_progress: { title: "🚧 En Proceso", color: "bg-yellow-100" },
  done: { title: "✅ Hecho", color: "bg-green-100" },
};

export default function KanbanBoard() {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">🗂️ Kanban de Tareas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(columns).map(([status, config]) => (
          <Card key={status}>
            <CardHeader>
              <CardTitle>{config.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {mockTasks
                .filter((task) => task.status === status)
                .map((task) => (
                  <div
                    key={task.id}
                    className={`${config.color} rounded-md p-3 text-sm font-medium shadow`}
                  >
                    {task.title}
                  </div>
                ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
