import Image from "next/image";

const photos = [
  {
    src: "/images/hero/hero1.jpg",
    position: "object-[center_80%]",
    scale: "scale-90",
  },
  {
    src: "/images/hero/hero2.jpg",
    position: "object-[center_30%]",
    scale: "scale-90",
  },
  {
    src: "/images/hero/hero3.jpg",
    position: "object-bottom",
    scale: "scale-90",
  },
  {
    src: "/images/hero/hero4.jpg",
    position: "object-[center_80%]",
    scale: "scale-90",
  },
  {
    src: "/images/hero/hero5.jpg",
    position: "object-center",
    scale: "scale-90",
  },
  {
    src: "/images/hero/hero6-new.jpg",
    position: "object-[center_69%]",
    scale: "scale-90",
  },
];

export default function Gallery() {
  return (
    <section className="bg-gray-100 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="mb-12 text-center text-6xl font-serif text-red-800">
  Фотогалерея
</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {photos.map((photo, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <Image
                src={photo.src}
                alt={`Фото ${index + 1}`}
                width={600}
                height={400}
                className={`w-full h-80 object-cover ${photo.position} ${photo.scale || ""} hover:scale-105 transition duration-500`}
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}