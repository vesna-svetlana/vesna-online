import Image from "next/image";
export default function ConcertsPage() {
  return (
    <main className="bg-[#faf7f2] min-h-screen py-24 px-6">

  <div className="max-w-5xl mx-auto">

    <h1 className="text-6xl font-serif text-center text-red-900 mb-6">
      🎭 Афиша концертов
    </h1>

    <p className="text-2xl italic text-center text-gray-700 mb-16">
      Мы всегда рады новой встрече с вами!
    </p>

        <div className="bg-white rounded-3xl shadow-lg p-10 border-l-8 border-red-800">

          <div className="flex justify-center mb-10">
          
  <Image
    src="/images/concerts/concert1.jpg"
    alt="Ансамбль народной песни «ВЕСНА»"
    width={900}
    height={600}
    className="rounded-3xl shadow-xl w-full max-w-3xl object-cover"
  />
</div>

            <h2 className="text-5xl font-serif text-center text-red-900 mb-10">
  🌸 Приглашаем на праздник русской песни!
          </h2>
<p className="text-2xl text-center text-gray-700 leading-10 mb-12">
  Каждая наша встреча —
  это живое общение,
  любимые песни,
  добрые улыбки
  и атмосфера настоящего русского праздника.
</p>

          <p className="text-2xl leading-10 text-gray-800">
            📍 Место проведения: <strong>будет объявлено</strong>
          </p>

          <p className="text-2xl leading-10 text-gray-800">
            📅 Дата: <strong>следите за обновлениями</strong>
          </p>

          <p className="text-2xl leading-10 text-gray-800">
            🕒 Время: <strong>будет опубликовано позже</strong>
          </p>

          <p className="text-2xl leading-10 text-gray-800">
            🎵 Вход: <strong>по приглашениям / свободный</strong>
          </p>


<div className="w-40 h-px bg-red-300 mx-auto my-10"></div>

<p className="text-3xl italic text-center text-red-900">
  Мы поём сердцем.
</p>

<p className="text-2xl text-center text-gray-700 mt-4 leading-9">
  И будем счастливы видеть вас
  среди наших гостей!
</p>

        </div>

      </div>

    </main>
  );
}