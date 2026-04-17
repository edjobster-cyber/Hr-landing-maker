import { useCallback, useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import worldMap from "@/assets/WoldMap.png";

type Testimonial = {
  name: string;
  country: string;
  text: string;
  pin: { topPct: number; leftPct: number };
  card: { topPct: number; leftPct: number; widthRem?: number };
  image: string;
};

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Xisca",
      country: "Spain",
      text:
        "WSE helped me open my mind, learn about other cultures and to understand and respect them.",
      pin: { topPct: 26, leftPct: 26 },
      card: { topPct: -14.6, leftPct: 14, widthRem: 25 },
      image: "https://i.pravatar.cc/40?img=1",
    },
    {
      name: "Monika",
      country: "Czech Republic",
      text:
        "The social program was really great and I'm grateful for the opportunity to meet new people from other countries.",
      pin: { topPct: 20, leftPct: 42 },
      card: { topPct: -15.3, leftPct: 45, widthRem: 28 },
      image: "https://i.pravatar.cc/40?img=2",
    },
    {
      name: "Krishna",
      country: "Russia",
      text:
        "The social program was really great and I'm grateful for the opportunity to meet new people from other countries.",
      pin: { topPct: 27, leftPct: 55 },
      card: { topPct: -1, leftPct: 74, widthRem: 28 },
      image: "https://i.pravatar.cc/40?img=3",
    },
    {
      name: "Priya",
      country: "India",
      text:
        "This platform has transformed our recruitment process. The efficiency and quality of candidates we get is outstanding.",
      pin: { topPct: 49, leftPct: 61 },
      card: { topPct: 95.2, leftPct: 59, widthRem: 35 },
      image: "https://i.pravatar.cc/40?img=4",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const imageLoadCount = useRef(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [lineEnds, setLineEnds] = useState<{ x: number; y: number }[]>([]);
  const updateLineEnds = useCallback(() => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const newLineEnds = imageRefs.current.map((img, i) => {
      if (!img) return { x: 0, y: 0 };

      const imageRect = img.getBoundingClientRect();
      const imageCenterX = imageRect.left + imageRect.width / 2;
      const imageCenterY = imageRect.top + imageRect.height / 2;

      const pinX = containerRect.left + (testimonials[i].pin.leftPct / 100) * containerRect.width;
      const pinY = containerRect.top + (testimonials[i].pin.topPct / 100) * containerRect.height;

      const dx = imageCenterX - pinX;
      const dy = imageCenterY - pinY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 1) {
        return {
          x: ((imageCenterX - containerRect.left) / containerRect.width) * 100,
          y: ((imageCenterY - containerRect.top) / containerRect.height) * 100,
        };
      }

      const imageRadius = imageRect.width / 2;
      const endX = imageCenterX - (dx / distance) * imageRadius;
      const endY = imageCenterY - (dy / distance) * imageRadius;

      const xPercent = ((endX - containerRect.left) / containerRect.width) * 100;
      const yPercent = ((endY - containerRect.top) / containerRect.height) * 100;

      return {
        x: isFinite(xPercent) ? Math.max(0, Math.min(100, xPercent)) : 0,
        y: isFinite(yPercent) ? Math.max(0, Math.min(100, yPercent)) : 0,
      };
    });

    setLineEnds(newLineEnds);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLineEnds();
    }, 70); // 2000 ms = 2 seconds
  
    // Cleanup in case component unmounts before timeout
    return () => clearTimeout(timer);
  }, [updateLineEnds]);
  

  useEffect(() => {
    window.addEventListener("resize", updateLineEnds);
    return () => window.removeEventListener("resize", updateLineEnds);
  }, [updateLineEnds]);

  useEffect(() => {
    // In case images are cached and load events don't fire
    const handleWindowLoad = () => {
      setTimeout(() => updateLineEnds(), 300);
    };
    window.addEventListener("load", handleWindowLoad);
    return () => window.removeEventListener("load", handleWindowLoad);
  }, [updateLineEnds]);
  
  return (
    <section className="relative w-full max-w-7xl mx-auto py-16 px-6">
      <div ref={containerRef} className="relative w-full flex justify-center mt-[100px]">
        {/* World Map */}
        <img
          src={worldMap}
          alt="World Map"
          className="w-[72%] h-auto rounded-lg opacity-90"
        />

        {/* Connector Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {testimonials.map((t, i) =>
            lineEnds[i] ? (
              <line
                key={i}
                x1={`${t.pin.leftPct}%`}
                y1={`${t.pin.topPct}%`}
                x2={`${lineEnds[i].x}%`}
                y2={`${lineEnds[i].y}%`}
                stroke="#7C3AED"
                strokeWidth="2"
                opacity="0.7"
              />
            ) : null
          )}
        </svg>

        {/* Pins */}
        {testimonials.map((t, i) => (
          <div
            key={`pin-${i}`}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ top: `${t.pin.topPct}%`, left: `${t.pin.leftPct}%` }}
          >
            <div className="w-3 h-3 bg-purple-600 rounded-full shadow-md" />
          </div>
        ))}

        {/* Testimonial Cards */}
        {testimonials.map((t, i) => {
          return (
            <Card
              key={`card-${i}`}
              className="absolute bg-transparent border-none"
              style={{
                top: `${t.card.topPct}%`,
                left: `${t.card.leftPct}%`,
                width: `${t.card.widthRem ?? 20}rem`,
              }}
            >
              <CardContent className="flex items-start gap-3 p-4 items-center">
                <img
                  ref={(el) => (imageRefs.current[i] = el)}
                  src={t.image}
                  alt={t.name}
                  className="w-[3.2rem] h-[3.2rem] rounded-full object-cover ring-2 ring-purple-500"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {t.name},{" "}
                    <span className="text-gray-600 font-normal">{t.country}</span>
                  </p>
                  <p className="text-sm md:text-base leading-relaxed text-gray-700 mt-1">
                    “{t.text}”
                  </p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  );
};

export default Testimonials;
