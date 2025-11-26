"use client";

import { useEffect, useState } from "react";

export function AnimatedChatDemo({ isActive }: { isActive: boolean }) {
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you today?", isBot: true, visible: false },
    { text: "I'd like to book an appointment", isBot: false, visible: false },
    {
      text: "Perfect! I can help with that. What service are you interested in?",
      isBot: true,
      visible: false,
    },
  ]);
  const [typingDots, setTypingDots] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [cycleCount, setCycleCount] = useState(0);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    if (!isActive) return;

    const scenarios = [
      [
        { text: "Hi! How can I help you today?", isBot: true },
        { text: "I'd like to book an appointment", isBot: false },
        {
          text: "Perfect! I can help with that. What service are you interested in?",
          isBot: true,
        },
      ],
      [
        { text: "Hello! I'm available 24/7 to assist you.", isBot: true },
        { text: "Do you have weekend availability?", isBot: false },
        { text: "I can check our weekend slots for you.", isBot: true },
      ],
      [
        { text: "Good evening! How may I assist you?", isBot: true },
        { text: "I need help with pricing", isBot: false },
        {
          text: "I'd be happy to provide pricing information right away!",
          isBot: true,
        },
      ],
    ];

    const currentScenario = scenarios[cycleCount % scenarios.length];
    setMessages(currentScenario.map((msg) => ({ ...msg, visible: false })));

    const timer = setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg, i) => ({ ...msg, visible: i === 0 }))
      );

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((msg, i) => ({ ...msg, visible: i <= 1 }))
        );

        setTimeout(() => {
          const typingInterval = setInterval(() => {
            setTypingDots((prev) => (prev + 1) % 4);
          }, 500);

          setTimeout(() => {
            clearInterval(typingInterval);
            setMessages((prev) =>
              prev.map((msg) => ({ ...msg, visible: true }))
            );

            setTimeout(() => {
              setCycleCount((prev) => prev + 1);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1500);
    }, 500);

    return () => clearTimeout(timer);
  }, [isActive, cycleCount]);

  return (
    <div className="bg-slate-50 rounded-lg p-4 h-32 overflow-hidden relative">
      <div className="absolute top-2 right-2 flex items-center gap-1">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-xs text-slate-500 font-medium">24/7</span>
      </div>
      <div className="space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.isBot ? "justify-start" : "justify-end"
            } transition-all duration-500 ${
              msg.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2"
            }`}
          >
            <div
              className={`max-w-[80%] px-3 py-1.5 rounded-full text-xs ${
                msg.isBot
                  ? "bg-slate-200 text-slate-700"
                  : "bg-blue-500 text-white"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {typingDots > 0 && (
          <div className="flex justify-start">
            <div className="bg-slate-200 px-3 py-1.5 rounded-full">
              <div className="flex space-x-1">
                {[1, 2, 3].map((dot) => (
                  <div
                    key={dot}
                    className={`w-1 h-1 bg-slate-500 rounded-full transition-opacity duration-300 ${
                      typingDots >= dot ? "opacity-100" : "opacity-30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}