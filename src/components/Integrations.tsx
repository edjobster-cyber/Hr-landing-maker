import Background from "@/assets/background.webp";
import Document from "@/assets/document.svg";

const Integrations_test = () => {
  return (
    <div className="relative">
      <div className="absolute top-3 sm:top-4 lg:top-6 w-full text-center z-20 px-3 sm:px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#69C1FF] to-[#C107FF]">
          Seamless Integrations
        </h2>
        <p className="text-gray-300 text-[11px] sm:text-xs md:text-sm mt-1 sm:mt-2">
          Connect with your favorite tools and platforms to streamline your hiring
        </p>
      </div>

      <div className="relative w-full min-h-[275px] sm:min-h-[360px] md:min-h-[420px] lg:h-[692px] bg-gradient-to-b from-[#0d0d2b] to-[#1a1a40] text-white flex items-center justify-center overflow-hidden py-10 sm:py-12 lg:py-0">
        {/* background image */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">
          <img
            src={Background}
            alt="integrations"
            className="w-[90%] h-[90%] sm:w-[85%] sm:h-[85%] md:w-[80%] md:h-[80%] lg:w-[70%] lg:h-[70%] object-contain object-center"
          />
        </div>

        {/* animated dashed network (from provided snippet), centered and responsive */}
        <div className="absolute left-1/2 top-[49%] sm:top-[48%] lg:top-[49%] xl:top-[48%] -translate-x-1/2 -translate-y-1/2 w-[65%] sm:w-[88%] md:w-[58%] lg:w-[51%] xl:w-[51%] 2xl:w-[51%] 3xl:w-[40%] z-[5] pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 836 287" fill="none" className="w-full h-auto">
            <path d="M46.6914 143.38L363 142.996" stroke="white" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8">
              <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="1s" repeatCount="indefinite" />
            </path>
            <path d="M170.565 44.4443L170.565 145.299" stroke="white" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8">
              <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="1s" repeatCount="indefinite" />
            </path>
            <path d="M72.583 2.24316L72.583 143.38" stroke="white" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8">
              <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="1s" repeatCount="indefinite" />
            </path>
            <path d="M2.17383 2.24316H72.5826" stroke="white" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8">
              <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="1s" repeatCount="indefinite" />
            </path>
            <path d="M207.817 285.229L207.817 150.652" stroke="white" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8">
              <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="1s" repeatCount="indefinite" />
            </path>
            <path d="M74.0518 281.544L74.0518 152.408" stroke="white" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8">
              <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="1s" repeatCount="indefinite" />
            </path>
            <path d="M789.093 143.38L471 142.931" stroke="white" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8">
              <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="1s" repeatCount="indefinite" />
            </path>
            <path d="M2.17383 281.544H74.0518" stroke="white" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8">
              <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="1s" repeatCount="indefinite" />
            </path>
            <path d="M665.219 44.4443L665.219 145.299" stroke="white" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8">
              <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="1s" repeatCount="indefinite" />
            </path>
            <path d="M763.201 2.24316L763.201 143.38" stroke="white" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8">
              <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="1s" repeatCount="indefinite" />
            </path>
            <path d="M833.61 2.24316H763.202" stroke="white" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8">
              <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="1s" repeatCount="indefinite" />
            </path>
            <path d="M627.967 285.229L627.967 150.652" stroke="white" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8">
              <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="1s" repeatCount="indefinite" />
            </path>
            <path d="M761.732 281.544L761.732 152.408" stroke="white" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8">
              <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="1s" repeatCount="indefinite" />
            </path>
            <path d="M833.61 281.544H761.732" stroke="white" strokeWidth="3" strokeLinecap="round" strokeDasharray="8 8">
              <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="1s" repeatCount="indefinite" />
            </path>
          </svg>
        </div>

        {/* pulsing rings around center (simplified) */}
        <div className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 z-[10]">
          <div className="absolute -inset-1 rounded-full bg-white/10 animate-ping" />
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full bg-white shadow-2xl shadow-[#00000033] flex items-center justify-center">
            <img src={Document} alt="AI" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations_test;