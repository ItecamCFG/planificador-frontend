"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// ✅ Tipo reducido para encajar con tus datos actuales
interface Resource {
  name: string;
  expertise: string;
}

interface Props {
  resources: Resource[];
}

export default function ResourceTable({ resources }: Props) {
  return (
    <Accordion type="single" collapsible className="w-full mt-10">
      <AccordionItem value="resources">
        <AccordionTrigger className="text-xl">
          📋 Recursos Detallados
        </AccordionTrigger>
        <AccordionContent>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border">
              <thead>
                <tr className="bg-muted">
                  <th className="px-4 py-2 border">Nombre</th>
                  <th className="px-4 py-2 border">Expertise</th>
                </tr>
              </thead>
              <tbody>
                {resources.map((res, i) => (
                  <tr key={i} className="hover:bg-accent">
                    <td className="px-4 py-2 border">{res.name}</td>
                    <td className="px-4 py-2 border">{res.expertise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
