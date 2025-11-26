"use client";

import { useEffect, useState } from "react";

export function AnimatedCalendarDemo({ isActive }: { isActive: boolean }) {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const timer = setTimeout(() => {
      setSelectedDate(15);
      setTimeout(() => setBooked(true), 1500);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isActive]);

  return (
    <div className="bg-slate-50 rounded-lg p-4 h-32">
      <div className="grid grid-cols-7 gap-1 text-xs">
        {Array.from({ length: 21 }, (_, i) => i + 1).map((day) => (
          <div
            key={day}
            className={`w-4 h-4 flex items-center justify-center rounded transition-all duration-300 ${
              day === selectedDate
                ? booked
                  ? "bg-green-500 text-white scale-110"
                  : "bg-blue-500 text-white scale-110"
                : day % 7 === 0 || day % 6 === 0
                ? "bg-slate-200 text-slate-400"
                : "bg-white text-slate-600 hover:bg-slate-100"
            }`}
          >
            {day}
          </div>
        ))}
      </div>
      {booked && (
        <div className="mt-2 text-xs text-green-600 font-medium animate-fade-in">
          ✓ Appointment booked for the 15th
        </div>
      )}
    </div>
  );
}