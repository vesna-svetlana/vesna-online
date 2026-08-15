import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#faf7f2] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-6xl font-serif text-center text-red-900 mb-6">
          О коллективе
        </h2>

        <p className="text-center text-2xl italic text-gray-700 mb-10">
          «Здесь не просто поют — здесь душу отогревают.»
        </p>

        <div className="flex items-center justify-center mb-16">
          <div className="h-px w-24 bg-amber-700"></div>
          <span className="mx-4 text-amber-700 text-2xl">❈</span>
          <div className="h-px w-24 bg-amber-700"></div>
        </div>

        <Image
          src="/images/hero/hero1.jpg"
          alt="Ансамбль народной песни «ВЕСНА»"
          width={1200}
          height={800}
          className="rounded-3xl shadow-xl mx-auto mb-12"
        />

        <h3 className="text-4xl font-serif text-red-900 mb-6">
          Здесь поют душой
        </h3>

        <p className="text-lg leading-9 mb-6">
          Наш ансамбль — это не только песни.
          Это дружба.
          Это уважение.
          Это любовь к русской культуре.
          Это желание подарить людям тепло.
        </p>

        <p className="text-lg leading-9 mb-6">
          У нас дружная, почти семейная атмосфера.
          Мы — хранители русской культуры, и нам важно,
          чтобы каждый чувствовал себя своим.
        </p>

        <p className="text-lg leading-9">
          Приходите к нам на репетицию —
          и сами всё почувствуете.
        </p>

<div className="my-20">

  <h3 className="text-4xl font-serif text-center text-red-900 mb-4">
    🌸 Голоса, которые ведут за собой
  </h3>

  <p className="text-center italic text-gray-600 mb-12">
    Искренность. Душевность. Любовь к русской песне.
  </p>

  <div className="grid md:grid-cols-2 gap-12">

    {/* Светлана */}

    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

      <Image
        src="/images/members/svetlana.jpg"
        alt="Светлана Пономарева"
        width={500}
        height={650}
        className="w-full h-[600px] object-cover object[center_80%"
      />

      <div className="p-8">

        <h4 className="text-3xl font-serif text-red-900 mb-2">
          Светлана Пономарева
        </h4>

        <p className="italic text-gray-600 mb-6">
          Солистка ансамбля • Автор песен
        </p>

        <p className="leading-8">
          Своим искренним исполнением русских народных песен
          Светлана передаёт зрителям тепло русской души.
          Каждая песня для неё — это маленькая история,
          рассказанная сердцем.
        </p>

      </div>

    </div>

    {/* Елена */}

    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

      <Image
        src="/images/members/elena.jpg"
        alt="Елена Прудникова"
        width={500}
        height={650}
        className="w-full h-[600px] object-cover object-[center_80%]"
      />

      <div className="p-8">

        <h4 className="text-3xl font-serif text-red-900 mb-2">
          Елена Прудникова
        </h4>

        <p className="italic text-gray-600 mb-6">
          Солистка ансамбля
        </p>

        <p className="leading-8">
          Голос Елены помогает создавать ту особую атмосферу,
          за которую зрители любят ансамбль «ВЕСНА».
          Каждое её выступление наполнено искренностью,
          теплом и любовью к русской песне.
        </p>

      </div>

    </div>

  </div>

</div>
      </div>
    </section>
  );
}