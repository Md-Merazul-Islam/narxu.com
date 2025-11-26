"use client";

import { useEffect, useState } from "react";

export function AnimatedEmailDemo({ isActive }: { isActive: boolean }) {
  const [emails, setEmails] = useState([
    { subject: "Service inquiry", status: "unread" },
    { subject: "Appointment request", status: "unread" },
    { subject: "Quote needed", status: "unread" },
  ]);

  useEffect(() => {
    if (!isActive) return;

    emails.forEach((_, index) => {
      setTimeout(() => {
        setEmails((prev) =>
          prev.map((email, i) =>
            i === index ? { ...email, status: "replied" } : email
          )
        );
      }, 1000 + index * 800);
    });
  }, [isActive]);

  return (
    <div className="bg-slate-50 rounded-lg p-4 h-32 overflow-hidden">
      <div className="space-y-2">
        {emails.map((email, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 p-2 rounded transition-all duration-500 ${
              email.status === "replied" ? "bg-green-100" : "bg-white"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${
                email.status === "replied" ? "bg-green-500" : "bg-blue-500"
              }`}
            />
            <span className="text-xs text-slate-700 flex-1">
              {email.subject}
            </span>
            {email.status === "replied" && (
              <svg
                className="w-3 h-3 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}