"use client";

import { useEffect, useState } from "react";

export function AnimatedIntegrationsDemo({ isActive }: { isActive: boolean }) {
  const [connections, setConnections] = useState([
    { name: "CRM", connected: false },
    { name: "WhatsApp", connected: false },
    { name: "Calendar", connected: false },
    { name: "Email", connected: false },
  ]);

  useEffect(() => {
    if (!isActive) return;

    connections.forEach((_, index) => {
      setTimeout(() => {
        setConnections((prev) =>
          prev.map((conn, i) =>
            i === index ? { ...conn, connected: true } : conn
          )
        );
      }, 500 + index * 400);
    });
  }, [isActive]);

  return (
    <div className="bg-slate-50 rounded-lg p-4 h-32">
      <div className="grid grid-cols-2 gap-2">
        {connections.map((conn, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 p-2 rounded transition-all duration-500 ${
              conn.connected ? "bg-green-100" : "bg-white"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full transition-colors duration-500 ${
                conn.connected ? "bg-green-500" : "bg-slate-300"
              }`}
            />
            <span className="text-xs text-slate-700">{conn.name}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 text-center">
        <div className="text-xs text-slate-500">
          {connections.filter((c) => c.connected).length}/4 connected
        </div>
      </div>
    </div>
  );
}