import React from "react";
import "./ButtonSparkle.css"; // we'll include animation CSS here

const MagicButton = () => {
  return (
    //   <>
    //   <button
    //     className="relative flex items-center gap-2 px-8 py-1 rounded-full border-none bg-transparent transition-transform duration-300 ease-in-out scale-110 active:scale-100 group h-[40px]"
    //     onClick={() => window.location.href = "/products/jd-generator"}
    //     type="button"
    //   >
    //     {/* Animated border */}
    //     <div className="dots_border"></div>

    //     {/* Sparkle SVG */}
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       className="sparkle w-7 relative z-10 text-white"
    //     >
    //       <path
    //         className="path"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"
    //       />
    //       <path
    //         className="path"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"
    //       />
    //       <path
    //         className="path"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"
    //       />
    //     </svg>

    //     {/* <span className="text_button relative z-10 text-transparent text-base bg-clip-text bg-gradient-to-r from-white to-purple-400 group-hover:text-white transition"> */}
    //     <span className="text_button relative z-10 text-transparent text-base bg-clip-text bg-gradient-to-r text-white transition">
    //     FREE AI JD TOOL
    //     </span>

    //     {/* Button background layers */}
    //     {/* <span className="absolute inset-0 rounded-full bg-neutral-900 shadow-inner shadow-black/60 transition-all duration-300 ease-in-out group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-fuchsia-500"></span> */}
    //     <span className="absolute inset-0 rounded-full bg-neutral-900 shadow-current shadow-black/60 transition-all duration-300 ease-in-out bg-gradient-to-r from-primary to-primary-glow group-hover:from-primary-glow group-hover:to-primary" style={{boxShadow: "0 0 0 0 inset rgba(5, 5, 5, 0.1), -0.05em -0.05em 0.05em 0 inset rgba(5, 5, 5, 0.25), 0 0 0 0 inset rgba(5, 5, 5, 0.1), 0 0 0.05em 0.2em inset rgba(255, 255, 255, 0.25), 0.025em 0.05em 0.1em 0 inset rgba(255, 255, 255, 1), 0.12em 0.12em 0.12em inset rgba(255, 255, 255, 0.25), -0.075em -0.25em 0.25em 0.1em inset rgba(5, 5, 5, 0.25)"}}></span>
    //   </button>
    // </>
    // bg-gradient-to-r from-primary to-primary-glow
    //     <>
    //   <style>{`
    //     @keyframes sparkleTwinkle {
    //       0%, 100% {
    //         transform: scale(1) rotate(0deg);
    //         opacity: 1;
    //       }
    //       25% {
    //         transform: scale(1.2) rotate(10deg);
    //         opacity: 0.8;
    //       }
    //       50% {
    //         transform: scale(0.9) rotate(-10deg);
    //         opacity: 1;
    //       }
    //       75% {
    //         transform: scale(1.1) rotate(5deg);
    //         opacity: 0.9;
    //       }
    //     }

    //     @keyframes borderAnimation {
    //       0% {
    //         background-position: 0% 50%;
    //       }
    //       50% {
    //         background-position: 100% 50%;
    //       }
    //       100% {
    //         background-position: 0% 50%;
    //       }
    //     }

    //     .animated-border {
    //       background: linear-gradient(270deg,rgb(29, 29, 29),rgb(194, 0, 0),rgb(0, 0, 0));
    //       background-size: 600% 600%;
    //       animation: borderAnimation 10s ease infinite;
    //     }

    //     .group:hover .sparkle {
    //       animation: sparkleTwinkle 0.8s ease-in-out;
    //     }
    //   `}</style>

    //   <div className="group p-[2px] rounded-full animated-border inline-block transition-transform duration-300 hover:scale-105">
    //     <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium transition-colors duration-300 group-hover:bg-gray-100 group-hover:text-blue-600">

    //       {/* Sparkle SVG that animates on hover */}
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         className="sparkle w-6 h-6 relative z-10 text-blue-600 stroke-current"
    //       >
    //         <path
    //           className="path"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"
    //         />
    //         <path
    //           className="path"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"
    //         />
    //         <path
    //           className="path"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"
    //         />
    //       </svg>

    //       <span>AI</span>
    //     </button>
    //   </div>
    // </>
    <>
      <style>{`
    /* Sparkle animation for the SVG */
    @keyframes sparkleTwinkle {
      0%, 100% {
        transform: scale(1) rotate(0deg);
        opacity: 1;
      }
      25% {
        transform: scale(1.2) rotate(10deg);
        opacity: 0.8;
      }
      50% {
        transform: scale(0.9) rotate(-10deg);
        opacity: 1;
      }
      75% {
        transform: scale(1.1) rotate(5deg);
        opacity: 0.9;
      }
    }

    /* Right-to-left animated gradient border */
    @keyframes borderRightToLeft {
      0% {
        background-position: 0% 100%;
      }
      100% {
        background-position: 100% 0%;
      }
    }
    .animated-border {
      background: linear-gradient(90deg, #E37932, #E5BA37, #22C6DF, #BEE041, #22C6DF, #27E3D8 ); /* cyan → green → yellow → cyan */
      background-size: 300% 100%;
      animation: borderRightToLeft 4s linear infinite;
    }
@keyframes sparkle-zoom {
  0%, 100% {
    transform: scale(1);
    fill: #3b82f6;
  }
  50% {
    transform: scale(1.3);
    fill: #1d4ed8;
  }
}

.sparkle {
  transform-origin: center;
  transition: fill 0.3s ease;
}

/* Infinite animation on hover with staggered delays */
.sparkle1 {
  animation: sparkle-zoom 1.2s ease-in-out infinite;
  animation-delay: 0s;
}

.sparkle2 {
  animation: sparkle-zoom 1.2s ease-in-out infinite;
  animation-delay: 0.4s;
}

.sparkle3 {
  animation: sparkle-zoom 1.2s ease-in-out infinite;
  animation-delay: 0.8s;
}

/* Also keep SVG fill gray on hover */
.group:hover svg {
  fill: blue-600;
}


  `}</style>

      {/* <div className="group p-[2px] rounded-full animated-border inline-block transition-transform duration-300 hover:scale-105">
        
        <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium transition-colors duration-300 group-hover:bg-gray-100 group-hover:text-blue-600">
          <svg height="87px" width="87px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-97.28 -97.28 706.56 706.56" xml:space="preserve" fill="#000000" transform="rotate(90)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#000000;} </style> <g> <path class="st0" d="M247.355,106.9C222.705,82.241,205.833,39.18,197.46,0c-8.386,39.188-25.24,82.258-49.899,106.917 c-24.65,24.642-67.724,41.514-106.896,49.904c39.188,8.373,82.254,25.235,106.904,49.895c24.65,24.65,41.522,67.72,49.908,106.9 c8.373-39.188,25.24-82.258,49.886-106.917c24.65-24.65,67.724-41.514,106.896-49.904 C315.08,148.422,272.014,131.551,247.355,106.9z"></path> <path class="st0" d="M407.471,304.339c-14.714-14.721-24.81-40.46-29.812-63.864c-5.011,23.404-15.073,49.142-29.803,63.872 c-14.73,14.714-40.464,24.801-63.864,29.812c23.408,5.01,49.134,15.081,63.864,29.811c14.73,14.722,24.81,40.46,29.82,63.864 c5.001-23.413,15.081-49.142,29.802-63.872c14.722-14.722,40.46-24.802,63.856-29.82 C447.939,329.14,422.201,319.061,407.471,304.339z"></path> <path class="st0" d="M146.352,354.702c-4.207,19.648-12.655,41.263-25.019,53.626c-12.362,12.354-33.968,20.82-53.613,25.027 c19.645,4.216,41.251,12.656,53.613,25.027c12.364,12.362,20.829,33.96,25.036,53.618c4.203-19.658,12.655-41.255,25.023-53.626 c12.354-12.362,33.964-20.82,53.605-25.035c-19.64-4.2-41.251-12.656-53.613-25.019 C159.024,395.966,150.555,374.351,146.352,354.702z"></path> </g> </g></svg>


          <span>AIgdgsgsergsdlkgsdjglk;sdgjslk;j</span>
        </button>


      </div> */}
      <div className="group p-[2px] rounded-full animated-border inline-block transition-transform duration-300 hover:scale-105 w-full flex items-center justify-center">
        <button className="flex items-center gap-3 px-4 rounded-full bg-white text-black font-medium transition-colors duration-300 group-hover:bg-gray-100 group-hover:text-blue-600 w-[99%] h-[95%]"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/jd-generator";
          }}
        >
          <svg
            height="40px"
            width="40px"
            viewBox="-97.28 -97.28 706.56 706.56"
            fill="#000000"
            className="transition-colors duration-500 fill-gray-500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                className="sparkle sparkle1"
                d="M407.471,304.339c-14.714-14.721-24.81-40.46-29.812-63.864c-5.011,23.404-15.073,49.142-29.803,63.872
                c-14.73,14.714-40.464,24.801-63.864,29.812c23.408,5.01,49.134,15.081,63.864,29.811c14.73,14.722,24.81,40.46,29.82,63.864
                c5.001-23.413,15.081-49.142,29.802-63.872c14.722-14.722,40.46-24.802,63.856-29.82
                C447.939,329.14,422.201,319.061,407.471,304.339z"
              ></path>
              <path
                className="sparkle sparkle2"
                d="M247.355,106.9C222.705,82.241,205.833,39.18,197.46,0c-8.386,39.188-25.24,82.258-49.899,106.917
          c-24.65,24.642-67.724,41.514-106.896,49.904c39.188,8.373,82.254,25.235,106.904,49.895c24.65,24.65,41.522,67.72,49.908,106.9
          c8.373-39.188,25.24-82.258,49.886-106.917c24.65-24.65,67.724-41.514,106.896-49.904
          C315.08,148.422,272.014,131.551,247.355,106.9z"
              ></path>
              <path
                className="sparkle sparkle3"
                d="M146.352,354.702c-4.207,19.648-12.655,41.263-25.019,53.626c-12.362,12.354-33.968,20.82-53.613,25.027
          c19.645,4.216,41.251,12.656,53.613,25.027c12.364,12.362,20.829,33.96,25.036,53.618c4.203-19.658,12.655-41.255,25.023-53.626
          c12.354-12.362,33.964-20.82,53.605-25.035c-19.64-4.2-41.251-12.656-53.613-25.019
          C159.024,395.966,150.555,374.351,146.352,354.702z"
              ></path>
            </g>
          </svg>
          <span className="whitespace-nowrap">FREE AI JD TOOL</span>
        </button>
      </div>

    </>



  );
};

export default MagicButton;
