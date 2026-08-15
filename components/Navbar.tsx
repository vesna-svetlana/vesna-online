"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-red-950/80 via-red-900/70 to-red-950/80 backdrop-blur-md shadow-lg border-b border-amber-300/20">
      <nav className="max-w-7xl mx-auto flex items-center gap-10 py-5 px-4 text-white text-lg font-medium tracking-wide overflow-x-auto whitespace-nowrap">

        <a
  href="#"
  className="transition duration-300 hover:text-amber-300 hover:scale-110"
>
          Главная
        </a>

        <a href="#about" className="hover:text-yellow-300 transition">
          О коллективе
        </a>
<a
  href="/history"
  className="transition duration-300 hover:text-amber-300 hover:scale-110"
>
  История
</a>
<a
  href="/friends"
  className="transition duration-300 hover:text-amber-300 hover:scale-110"
>
  Друзья «ВЕСНЫ»
</a>
        <a href="#repertoire" className="hover:text-yellow-300 transition">
          Репертуар
        </a>

<a
  href="/concerts"
  className="transition duration-300 hover:text-amber-300 hover:scale-110"
>
  Афиша
</a>

<a
  href="/contact"
  className="transition duration-300 hover:text-amber-300 hover:scale-110"
>
  Связь с ансамблем
</a>

<a
  href="/news"
  className="transition duration-300 hover:text-amber-300 hover:scale-110"
>
  Новости
</a>

        <a href="#gallery" className="hover:text-yellow-300 transition">
          Музыка
        </a>

        <a href="#gallery" className="hover:text-yellow-300 transition">
          Галерея
        </a>

      </nav>
    </header>
  );
}