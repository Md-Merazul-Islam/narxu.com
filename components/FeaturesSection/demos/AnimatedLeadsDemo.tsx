"use client";

import { useEffect, useState } from "react";

export function AnimatedLeadsDemo({ isActive }: { isActive: boolean }) {
  const [leads, setLeads] = useState([
    { name: "Sarah M.", score: 0, qualified: false },
    { name: "John D.", score: 0, qualified: false },
    { name: "Mike R.", score: 0, qualified: false },
  ]);

  useEffect(() => {
    if (!isActive) return;

    leads.forEach((_, index) => {
      setTimeout(() => {
        const targetScore = [85, 92, 78][index];
        const interval = setInterval(() => {
          setLeads((prev) =>
            prev.map((lead, i) => {
              if (i === index && lead.score < targetScore) {
                const newScore = Math.min(lead.score + 5, targetScore);
                return {
                  ...lead,
                  score: newScore,
                  qualified: newScore >= 80,
                };
              }
              return lead;
            })
          );
        }, 50);

        setTimeout(() => clearInterval(interval), 1000);
      }, index * 600);
    });
  }, [isActive]);

  return (
    <div className="bg-slate-50 rounded-lg p-4 h-32 overflow-hidden">
      <div className="space-y-2">
        {leads.map((lead, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="text-xs text-slate-700 w-12">{lead.name}</span>
            <div className="flex-1 bg-slate-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-500 ${
                  lead.qualified ? "bg-green-500" : "bg-blue-500"
                }`}
                style={{ width: `${lead.score}%` }}
              />
            </div>
            <span className="text-xs font-medium w-8">{lead.score}%</span>
            {lead.qualified && (
              <span className="text-xs text-green-600">✓</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}