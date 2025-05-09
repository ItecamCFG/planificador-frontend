"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Task {
  expertise: string;
}

interface Resource {
  expertise: string;
}

interface Props {
  tasks: Task[];
  resources: Resource[];
}

export default function ExpertiseSummary({ tasks, resources }: Props) {
  const levels = ["Junior", "Senior", "Experto"];

  const summary = levels.map((level) => {
    const taskCount = tasks.filter((t) => t.expertise === level).length;
    const resourceCount = resources.filter((r) => r.expertise === level).length;
    return { level, taskCount, resourceCount };
  });

  return (
    <Card className="mt-10">
      <CardHeader>
        <CardTitle>🧠 Resumen por Nivel de Expertise</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {summary.map(({ level, taskCount, resourceCount }) => (
            <li key={level} className="flex justify-between">
              <span className="font-medium">{level}</span>
              <span className="text-muted-foreground">
                {taskCount} tareas · {resourceCount} recursos
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
