"use client";

import Image from "next/image";

export default function HeroSlider() {
  return (
    <main className="relative h-screen overflow-hidden">

      <Image
        src="/images/hero/hero1.jpg"
        alt="Ансамбль народной песни ВЕСНА"
        fill
        priority
        className="object-cover"
      />

      {/* Затемнение */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Текст */}
      <section className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">

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

        <div className="mt-16 flex flex-col items-center text-white/80 animate-bounce">
          <span className="text-3xl">↓</span>
          <span className="text-sm tracking-widest uppercase">
            Листайте вниз
          </span>
        </div>

      </section>

      {/* О коллективе */}
      <section className="bg-white py-24 px-6">

        <div className="mx-auto max-w-5xl">

          <h2 className="text-4xl font-bold text-center mb-10">
            О коллективе
          </h2>

          <p className="text-lg leading-8 text-gray-700 text-center">
            Ансамбль народной песни «ВЕСНА» бережно сохраняет традиции
            русской народной культуры, исполняет народные, лирические,
            хороводные, плясовые, патриотические песни, произведения
            современных авторов и песни в народном стиле.
          </p>

        </div>

      </section>

    </main>
  );
}