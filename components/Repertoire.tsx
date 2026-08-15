export default function Repertoire() {
  return (
    <section className="bg-[#faf7f2] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-6xl font-serif text-center text-red-900 mb-6">
          Репертуар ансамбля
        </h2>

        <p className="text-2xl italic text-center text-gray-700 mb-14">
          «У каждой песни — своё настроение.
          Но каждая рождается сердцем.»
        </p>

        <div className="bg-white rounded-3xl shadow-lg p-10 mb-16">

          <p className="text-xl leading-10 text-gray-800 mb-8">
            Репертуар ансамбля народной песни «ВЕСНА» очень разнообразен.
          </p>

          <p className="text-xl leading-10 text-gray-800">
            Мы исполняем русские народные песни,
            лирические, плясовые, хороводные,
            патриотические произведения,
            песни советских и современных композиторов,
            авторские песни,
            а также произведения,
            написанные в народном стиле.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-8">

  <img
    src="/images/repertoire/folk.jpg"
    alt="Русские народные песни"
   className="w-full h-64 object-cover object-[center_40%] rounded-2xl mb-6"
  />

  <h3 className="text-2xl text-red-900 font-serif mb-4">
    🌾 Русские народные песни
  </h3>

  <p>
    Песни, передававшиеся из поколения в поколение.
  </p>

</div>          

          <div className="bg-white rounded-3xl shadow-lg p-8">
  
    <img
        src="/images/repertoire/lyric.jpg"
        alt="Лирические песни"
        className="w-full h-64 object-cover rounded-2xl mb-6"
  />

  <h3 className="text-2xl text-red-900 font-serif mb-4">
   🌸 Лирические песни
  </h3>

  <p>
    О любви, семье, родном доме и человеческой душе.

  </p>

</div>


          <div className="bg-white rounded-3xl shadow-lg p-8">
  
    <img
        src="/images/repertoire/plyas.jpg"
        alt="Плясовые песни"
        className="w-full h-64 object-cover rounded-2xl mb-6"
  />

  <h3 className="text-2xl text-red-900 font-serif mb-4">
   
💃 Плясовые песни
  </h3>

  <p>
    Весёлые, задорные песни,
    дарящие хорошее настроение.

  </p>

</div>


          <div className="bg-white rounded-3xl shadow-lg p-8">
  
    <img
        src="/images/repertoire/horovod.jpg"
        alt="Хороводные песни"
        className="w-full h-64 object-cover rounded-2xl mb-6"
  />

  <h3 className="text-2xl text-red-900 font-serif mb-4">
   
🌿 Хороводные песни
  </h3>

  <p>
    Музыка, объединяющая людей 
    в едином круге и в народных традициях.

  </p>

</div>


          <div className="bg-white rounded-3xl shadow-lg p-8">
  
    <img
        src="/images/repertoire/patriotic.jpg"
        alt="Патриотические песни"
        className="w-full h-64 object-cover rounded-2xl mb-6"
  />

  <h3 className="text-2xl text-red-900 font-serif mb-4">
   
🇷🇺  Патриотические песни
  </h3>

  <p>
    О Родине,
    её истории,
    мужестве и любви к Отечеству.

  </p>

</div>


         <div className="bg-white rounded-3xl shadow-lg p-8">
  
    <img
        src="/images/repertoire/avtor.jpg"
        alt="Авторские песни"
        className="w-full h-64 object-cover rounded-2xl mb-6"
  />

  <h3 className="text-2xl text-red-900 font-serif mb-4">
   
✨ Авторские песни
  </h3>

  <p>
    Современные произведения
    и песни,
    созданные специально
    для ансамбля «ВЕСНА».

  </p>

</div>
 

        </div>

        <div className="bg-amber-50 rounded-3xl shadow-lg p-10 mt-16 border-l-8 border-red-800">

          <p className="text-2xl leading-10 text-center italic text-red-900">
            Мы всегда рады исполнить песни
            по пожеланиям наших зрителей.
          </p>

          <p className="text-xl text-center mt-8">
            Ведь каждая встреча с вами —
            это новый праздник русской песни.
          </p>

        </div>

      </div>

<div className="bg-[#7d2f2f] text-white rounded-3xl shadow-xl p-12 mt-20 text-center">

  <h2 className="text-4xl font-serif mb-8">
    🌸 Мы всегда рады новой встрече!
  </h2>

  <p className="text-2xl leading-10 max-w-4xl mx-auto">
    Русская песня объединяет людей разных поколений.
    Если вы любите искреннюю музыку,
    живое исполнение
    и атмосферу настоящего русского праздника —
    мы будем счастливы встретиться с вами
    на наших концертах.
  </p>

  <p className="text-3xl italic mt-12 text-amber-200">
    «До новой встречи под звуки русской песни!»
  </p>

</div>

    </section>
  );
}