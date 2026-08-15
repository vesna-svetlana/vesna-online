"use client";

export default function BellSound() {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-3">
      <div className="bg-white/95 text-red-900 px-4 py-2 rounded-full shadow-lg text-sm">
        🔔 Послушать благовест
      </div>

      <a
        href="/sounds/blagovest.mp3"
        aria-label="Послушать благовест"
        className="text-3xl hover:scale-110 transition duration-300"
      >
        🔔
      </a>
    </div>
  );
}