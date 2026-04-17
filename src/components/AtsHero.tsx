import { Button } from "@/components/ui/button";
import { PlayIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import leptop from "@/assets/leptop2.png";

const AtsHero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          background: "linear-gradient(to right, rgb(233 228 211), rgb(207 225 224))",
        }}
      />
      {/* Layer 1: 888x661 at top:99px, left:552px, rotated 180deg */}
      <div
        className="absolute z-0 pointer-events-none"
        style={{
          width: "100%",
          height: "90%",
          top: "93px",
          left: 300,
          opacity: 1,
          background: "linear-gradient(148deg, transparent 50%, #FF648908 50%)",
        }}
      />
      {/* Layer 2: 1440x428 centered at top:332px */}
      <div
        className="absolute z-0 pointer-events-none"
        style={{
          width: "100%",
          height: 597,
          top: 332,
          left: "50%",
          transform: "translateX(-50%)",
          background: "linear-gradient(197.3deg,rgba(0, 0, 0, 0) 0 50%, #FF64890A 4%)",
          opacity: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto pt-24 px-4 text-center flex flex-col items-center">
        <div className="max-w-5xl mx-auto space-y-6 animate-fade-in-up">
          <h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            style={{ color: "#004AAD" }}
          >
            What is Edjobster ATS?
          </h1>

          <p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed"
            style={{ color: "black" }}
          >
            An AI-first applicant tracking system that automates job creation, screening and candidate ranking. Manage jobs, candidates, and interviews in one powerful platform.
          </p>

          {/* <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-2"
            style={{ color: "black" }}
          >
            A complete applicant tracking system designed specifically for
            education institutions. Manage jobs, candidates, and interviews in
            one powerful platform.
          </p> */}

          {/* Buttons + Avatars */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            {/* Avatars */}
            <div className="flex items-center gap-4">
              <div className="avatars flex -space-x-2">
                <img
                  className="w-10 h-10 rounded-full border border-white"
                  src="https://i.pravatar.cc/40?img=1"
                  alt="person"
                />
                <img
                  className="w-10 h-10 rounded-full border border-white"
                  src="https://i.pravatar.cc/40?img=5"
                  alt="person"
                />
                <img
                  className="w-10 h-10 rounded-full border border-white"
                  src="https://i.pravatar.cc/40?img=3"
                  alt="person"
                />
                <img
                  className="w-10 h-10 rounded-full border border-white"
                  src="https://i.pravatar.cc/40?img=6"
                  alt="person"
                />
              </div>
              <span
                className="text-sm sm:text-base md:text-lg font-medium"
                style={{ color: "black" }}
              >
                12+ International Senior Hiring
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 flex-wrap justify-center">
              <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                <DialogTrigger asChild>
                  <Button className="rounded-full px-5 py-2 bg-white hover:bg-gray-100 text-black flex items-center">
                    <PlayIcon className="mr-2 w-5 h-5" />
                    Watch Video
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl p-0 bg-black">
                  <div className="w-full aspect-video">
                    {isVideoOpen && (
                      // <iframe
                      //   title="Edjobster ATS Overview"
                      //   width="100%"
                      //   height="100%"
                      //   src="https://www.youtube.com/embed/jq4RtILqLa8?si=lXD8eVBM2glXb3GH"
                      //   allow="autoplay; encrypted-media; picture-in-picture"
                      //   allowFullScreen
                      // />
                      <iframe
                        title="Edjobster ATS Overview"
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/KoIbnYbDRfM?autoplay=1&loop=1&mute=1&playlist=KoIbnYbDRfM"
                        allow="autoplay;"
                      />
                    )}
                  </div>
                </DialogContent>
              </Dialog>

              <Button
                className="rounded-full px-6 py-2 bg-[#ff375f] hover:bg-[#ff1f47] text-white"
                onClick={() => {
                  const el = document.getElementById("ats-contact");
                  if (el && typeof el.scrollIntoView === "function") {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  } else {
                    window.location.hash = "#ats-contact";
                  }
                }}
              >
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Laptop image */}
      <img
        src={leptop}
        alt="hero"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] lg:max-h-[42%] 2xl:max-h-[45%] rounded-t-[16px]"
      />
    </section>
  );
};

export default AtsHero;
