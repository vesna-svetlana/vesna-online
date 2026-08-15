export default function NewsPage() {
  return (
    <main className="bg-[#faf7f2] min-h-screen py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-6xl font-serif text-center text-red-900 mb-6">
          Новости ансамбля
        </h1>

        <div className="flex items-center justify-center mb-16">
          <div className="h-px w-24 bg-amber-700"></div>
          <span className="mx-4 text-amber-700 text-2xl">❈</span>
          <div className="h-px w-24 bg-amber-700"></div>
        </div>

        <article className="bg-white rounded-3xl shadow-lg p-10 mb-12">

          <p className="text-amber-700 text-lg mb-3">
            14 августа 2026
          </p>

          <h2 className="text-4xl font-serif text-red-900 mb-6">
            🌷 Наш сайт готов!
          </h2>

          <p className="leading-8 text-lg text-gray-700">
            С радостью сообщаем, что у ансамбля народной песни
            «ВЕСНА» появился свой сайт!
          </p>

          <p className="leading-8 text-lg text-gray-700 mt-5">
            Здесь мы будем рассказывать о жизни нашего коллектива,
            выступлениях, концертах, новых песнях и интересных
            событиях.
          </p>

          <p className="leading-8 text-lg text-gray-700 mt-5">
            Добро пожаловать! Пусть наша песня объединяет сердца.
          </p>

        </article>

      </div>
    </main>
  );
}