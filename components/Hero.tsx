"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen">

      <Image
        src="/images/hero/hero1.jpg"
        alt="Ансамбль народной песни ВЕСНА"
        fill
        priority
        className="object-cover brightness-110 contrast-110"
      />

{/* Затемнение */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/55" />
<div className="absolute inset-0 flex flex-col items-center justify-center pt-60 text-center text-white px-6">
      

        <p className="text-xl md:text-2xl tracking-[0.3em] uppercase">
          Ансамбль народной песни
        </p>

        <h1 className="mt-4 text-6xl md:text-8xl font-black">
          «ВЕСНА»
        </h1>

        <p className="mt-8 text-2xl md:text-3xl italic">
          «Сохраняя традиции — вдохновляем сердца»
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <a
            href="https://vk.com/club225091419"
            target="_blank"
            className="rounded-full bg-blue-600 px-7 py-3 font-semibold transition hover:scale-105"
          >
            ВКонтакте
          </a>

          <a
            href="https://rutube.ru/plst/530748/"
            target="_blank"
            className="rounded-full bg-black px-7 py-3 font-semibold transition hover:scale-105"
          >
            RUTUBE
          </a>

          <a
            href="https://www.youtube.com/playlist?list=PLDwc8Kfs431VML8OIqW8NZT4Y-GTAnIe8"
            target="_blank"
            className="rounded-full bg-red-600 px-7 py-3 font-semibold transition hover:scale-105"
          >
            YouTube
          </a>

        </div>

        <div className="mt-16 animate-bounce text-center">
          <div className="text-3xl">↓</div>
          <div className="text-sm tracking-widest uppercase">
            Листайте вниз
          </div>
        </div>

      </div>

    </section>
  );
}