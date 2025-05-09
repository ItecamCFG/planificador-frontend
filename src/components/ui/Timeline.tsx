"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]

const timeline = [
  {
    resource: "Recurso 1",
    plan: [
      { day: "Lunes", task: "Tarea 1" },
      { day: "Miércoles", task: "Tarea 3" },
    ],
  },
  {
    resource: "Recurso 2",
    plan: [
      { day: "Martes", task: "Tarea 2" },
      { day: "Jueves", task: "Tarea 4" },
    ],
  },
]

export default function Timeline() {
  return (
    <Card className="mt-10">
      <CardHeader>
        <CardTitle>🕒 Timeline de Tareas</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <table className="min-w-full border text-left text-sm">
          <thead>
            <tr className="bg-muted">
              <th className="px-4 py-2 border">Recurso</th>
              {days.map((day) => (
                <th key={day} className="px-4 py-2 border">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeline.map((row, i) => (
              <tr key={i} className="hover:bg-accent">
                <td className="px-4 py-2 border font-medium">{row.resource}</td>
                {days.map((day) => {
                  const task = row.plan.find(p => p.day === day)?.task || "";
                  return (
                    <td key={day} className="px-4 py-2 border text-center">
                      {task || "-"}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  )
}
