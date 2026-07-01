import { useState } from "react";

const spaces = [
  {
    id: 1,
    image: "/images/product7.webp",
    title: "Power Generation",
  },
  {
    id: 2,
    image: "/images/product8.webp",
    title: "Industrial Solutions",
  },
  {
    id: 3,
    image: "/images/product9.webp",
    title: "Generator Sets",
  },
  {
    id: 4,
    image: "/images/product10.webp",
    title: "Electrical Panels",
  },
  {
    id: 5,
    image: "/images/product1.webp",
    title: "Exhaust Systems",
  },
  {
    id: 6,
    image: "/images/product2.webp",
    title: "Service Support",
  },
  {
    id: 7,
    image: "/images/product3.webp",
    title: "Power Solutions",
  },
];

export default function ExploreSpaces() {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#EB0133] uppercase tracking-[0.35em] text-xs font-mono font-semibold block mb-5">
            Our Gallery
          </span>

          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Power Solutions
            <br />
            <span className="text-[#EB0133]">
              In Action
            </span>
          </h2>

          <p className="text-white/50 text-base leading-relaxed font-sans">
            Explore our gallery showcasing Mahindra Powerol generator sets, 
            electrical panels, and power solutions across various industries and applications.
          </p>
        </div>

        {/* Gallery */}
        <div className="flex justify-center gap-3 h-[420px]">
          {spaces.map((space) => (
            <div
              key={space.id}
              onMouseEnter={() => setActiveCard(space.id)}
              className={`
                relative overflow-hidden rounded-[20px]
                cursor-pointer
                transition-all duration-700 ease-in-out
                ${
                  activeCard === space.id
                    ? "w-[420px]"
                    : "w-[70px]"
                }
              `}
            >
              <img
                src={space.image}
                alt={space.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Title */}
              <div
                className={`
                  absolute bottom-5 left-5
                  transition-all duration-500
                  ${
                    activeCard === space.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }
                `}
              >
                <h3 className="text-white text-2xl font-semibold font-serif">
                  {space.title}
                </h3>
                {activeCard === space.id && (
                  <p className="text-[#EB0133] text-sm mt-1 font-mono tracking-wider">
                    {space.id === 1 && "5KVA - 650KVA"}
                    {space.id === 2 && "Industrial Applications"}
                    {space.id === 3 && "Mahindra Powerol"}
                    {space.id === 4 && "HT & LT Panels"}
                    {space.id === 5 && "Emission Control"}
                    {space.id === 6 && "200+ Service Points"}
                    {space.id === 7 && "Global Reach"}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}