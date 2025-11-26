"use client";

import { useEffect, useState } from "react";

export function AnimatedPhoneDemo({ isActive }: { isActive: boolean }) {
  const [callState, setCallState] = useState<"idle" | "ringing" | "answered">(
    "idle"
  );
  const [callCount, setCallCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const cycleCall = () => {
      setCallState("ringing");
      setTimeout(() => {
        setCallState("answered");
        setTimeout(() => {
          setCallState("idle");
          setCallCount((prev) => prev + 1);
          setTimeout(cycleCall, 2000);
        }, 2000);
      }, 2000);
    };

    const timer = setTimeout(cycleCall, 800);
    return () => clearTimeout(timer);
  }, [isActive]);

  return (
    <div className="bg-slate-50 rounded-lg p-4 h-32 flex items-center justify-center relative">
      <div className="absolute top-2 right-2 text-xs text-slate-500 font-medium">
        Calls: {callCount + 1}
      </div>
      <div className="relative">
        <div
          className={`w-16 h-16 rounded-full bg-green-500 flex items-center justify-center transition-all duration-500 ${
            callState === "ringing" ? "animate-pulse scale-110" : ""
          } ${callState === "answered" ? "bg-blue-500" : ""}`}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </div>
        {callState === "ringing" && (
          <>
            <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping"></div>
            <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping animation-delay-75"></div>
          </>
        )}
        {callState === "answered" && (
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="bg-blue-100 px-2 py-1 rounded text-xs text-blue-700 whitespace-nowrap">
              Call answered
            </div>
          </div>
        )}
      </div>
    </div>
  );
}