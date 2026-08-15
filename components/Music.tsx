export default function Music() {
  return (
    <section className="bg-[#faf7f2] py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-5xl font-serif text-center text-red-900 mb-12">
          Музыка ансамбля
        </h2>

        <div className="space-y-8">

          {/* Зорька алая */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-2xl font-serif text-red-900 mb-4">
              «Зорька алая»
            </h3>

            <audio controls className="w-full">
              <source src="/audio/zorka-alaya.mp3" type="audio/mpeg" />
              Ваш браузер не поддерживает воспроизведение аудио.
            </audio>
          </div>

          {/* Селезень */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-2xl font-serif text-red-900 mb-4">
              «Селезень»
            </h3>

            <audio controls className="w-full">
              <source src="/audio/selezhen.mp3" type="audio/mpeg" />
              Ваш браузер не поддерживает воспроизведение аудио.
            </audio>
          </div>

          {/* Васенька */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-2xl font-serif text-red-900 mb-4">
              «Васенька»
            </h3>

            <audio controls className="w-full">
              <source src="/audio/vasenka.mp3" type="audio/mpeg" />
              Ваш браузер не поддерживает воспроизведение аудио.
            </audio>
          </div>

        </div>
      </div>
    </section>
  );
}