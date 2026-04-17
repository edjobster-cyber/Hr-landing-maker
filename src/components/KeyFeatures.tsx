import React from "react";
import aiIcon from "@/assets/Ai.png";
import magicIcon from "@/assets/magic.png";
import searchperson from "@/assets/searchperson.png";
import aiskills from "@/assets/aiskills.png";
import calendar from "@/assets/calendar.png";
import fileIcon from "@/assets/file.png";
import customQuestions from "@/assets/custom qustions.png";
import analytics from "@/assets/analytics.png";
import time from "@/assets/time.png";
import jun from "@/assets/jun.png";
import Line from "@/assets/line.svg";
// import aiIcon from "@/assets/Ai.png";
// import calendarIcon from "@/assets/calander.png";
// import analyticsIcon from "@/assets/anlisch.png";

type FeatureCardProps = {
  title: string;
  description: string;
  image?: string;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, image, className, children, style }) => {
  return (
    <div className="relative rounded-[20px] p-[4px] bg-gradient-to-r from-[#344FFF] to-[#0D209F] shadow-md flex items-start justify-center">

      <div
        className={
          "relative rounded-2xl bg-[#0e1325] " +
          "shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset,0_30px_60px_-15px_rgba(0,0,0,0.5)] " +
          "p-6 lg:p-8 text-white overflow-hidden w-[100%] h-[100%] flex flex-col justify-between" +
          (className ?? "")
        }
      // style={}
      >
        <div className="flex items-start gap-4">
          {image ? <img src={image} alt="" className="h-12 w-12 object-contain drop-shadow-lg" /> : null}
          <div>
            <h3 className="text-lg lg:text-xl font-semibold leading-tight">{title}</h3>
            <p className="mt-2 text-sm lg:text-[15px] text-white/70 leading-relaxed">{description}</p>
          </div>
        </div>

        {children ? <div className="mt-6">{children}</div> : null}

      </div>
    </div>
  );
};

//

const KeyFeatures: React.FC = () => {
  return (
    <section
      id="key-features"
      className="relative w-full"
      style={{
        // Following the provided frame reference
        // width: 1440, height: 900 maps to a container with fixed min-h
        // top and angle are layout-only in the design and not needed in code
        background: "linear-gradient(180deg, #101C2D 0%, #3C2E90 100%)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-4 lg:px-8 py-16 lg:py-24 min-h-[900px]">
        <div className="text-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-white">
            Next-Gen
            {" "}
            <span className="relative inline-block align-baseline">
              <span className="z-10 relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500">
                AI Recruiting Platform

              </span>
                <img
                  src={Line}
                  alt=""
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[-10px] lg:bottom-[-13px] w-[300px] lg:w-[420px] h-auto select-none"
                />
              {/* Curved gradient underline */}
              {/* <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[-14px] lg:bottom-[-24px]" aria-hidden>
                <svg width="420" height="22" viewBox="0 0 420 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden lg:block">
                  <defs>
                    <linearGradient id="underlineGradient" x1="0" y1="0" x2="420" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#344FFF" />
                      <stop offset="0.5" stopColor="#6D42FF" />
                      <stop offset="1" stopColor="#A020F0" />
                    </linearGradient>
                  </defs>
                  <path d="M5 17 C 120 5, 300 5, 415 17" stroke="url(#underlineGradient)" strokeWidth="9" strokeLinecap="round" />
                </svg>
                <svg width="300" height="18" viewBox="0 0 300 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:hidden">
                  <defs>
                    <linearGradient id="underlineGradientSm" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#344FFF" />
                      <stop offset="0.5" stopColor="#6D42FF" />
                      <stop offset="1" stopColor="#A020F0" />
                    </linearGradient>
                  </defs>
                  <path d="M5 14 C 80 4, 220 4, 295 14" stroke="url(#underlineGradientSm)" strokeWidth="7" strokeLinecap="round" />
                </svg>
              </span> */}
            </span>
            {" "}
            Features
          </h2>
          <p className="mt-3 text-sm lg:text-base text-white/70">Everything you need to streamline your hiring process</p>
        </div>

        <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7">
          <FeatureCard
            title="AI Job Description Generator"
            description="Generate structured Job Description, Requirements and Benefits from recruiter input using intelligent AI."
          >
            <div className="mx-auto w-full max-w-[320px] h-[111px] grid [grid-template-columns:32%_68%] overflow-hidden rounded-xl bg-[#E9E9EB]">
              {/* Left icon panel */}
              <div className="flex items-center justify-center bg-[#E9E9EB]">
                <img src={aiIcon} alt="AI" className="h-20 w-20 object-contain" />
              </div>

              {/* Right white list panel */}
              <div className="bg-white text-slate-800 rounded-xl">
                <div className="flex flex-col justify-center gap-2 pl-6 md:pl-3 h-full ">
                  <div className="flex items-center gap-4">
                    <img src={magicIcon} alt="*" className="h-6 w-6 object-contain" />
                    <span className="text-md lg:text-md md:text-sm font-medium">Job Description</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={magicIcon} alt="*" className="h-6 w-6 object-contain" />
                    <span className="text-md lg:text-md md:text-sm font-medium">Requirements</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={magicIcon} alt="*" className="h-6 w-6 object-contain" />
                    <span className="text-md lg:text-md md:text-sm font-medium">Benefits</span>
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            title="AI Screening & Match Scoring"
            description="Create AI-driven screening questions with weightages and calculate candidate–job fit."
          // image={aiIcon}
          >
            <div className="mx-auto w-full max-w-[320px] h-[111px] grid [grid-template-columns:32%_68%] overflow-hidden rounded-xl bg-[#E9E9EB]">
              {/* Left icon panel */}
              <div className="flex items-center justify-center bg-[#E9E9EB]">
                <img src={searchperson} alt="searchperson" className="h-20 w-20 object-contain" />
              </div>

              {/* Right white list panel */}
              <div className="bg-white text-slate-800 rounded-xl">
                <div className="flex flex-col justify-center gap-2 pl-6 h-full ">
                  <div className="flex items-center justify-left">
                    <img src={aiskills} alt="aiskills" className="h-55 w-55 object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Smart Interviews Sync"
            description="Interview scheduling with emails, calendar integration and structured interview guides."
          // image={calendarIcon}
          >
            <div className="w-full md:w-1/2 lg:w-full flex justify-center mx-auto">
              <div className="grid [grid-template-columns:60%_29%]  items-center justify-center bg-white rounded-[20px]">
                {/* Left icon panel */}
                <img src={jun} alt="calendar" className="h-[122px] w-[219px] rounded-tl-[20px] rounded-bl-[20px]" />
                <img src={time} alt="calendar" className="h-[122px] w-[102px] rounded-tr-[20px] rounded-br-[20px]" />

                {/* Right white list panel */}
                {/* <div className="bg-white text-slate-800 rounded-xl">
                <div className="flex flex-col justify-center gap-2 pl-6 h-full ">
                  <div className="flex items-center justify-left">
                    <img src={aiskills} alt="aiskills" className="h -55 w-55 object-contain" />
                  </div>
                </div>
              </div> */}
              </div>  
            </div>
          </FeatureCard>
        </div>

        <div className="grid mt-10 gap-6 grid-cols-1 lg:grid-cols-[55%_45%]">
          <FeatureCard
            title="AI-Powered Assessments Creation"
            description="Customizable assessments and AI screening questions to identify top candidates."
          // image={aiIcon}
          >
            <div className="relative mt-10">
              <div className="pointer-events-none absolute -top-10 left-0 right-0 flex items-center justify-around px-2">
                <div className="relative h-20 w-20 rounded-full p-[4px] bg-gradient-to-r from-[#344FFF] to-[#0D209F] shadow-md flex items-start justify-center">
                  <div className="h-full w-full rounded-full bg-white flex items-flex-start justify-center">
                    <img src={magicIcon} alt="AI Generated" className="h-9 p-[3px] w-10 object-contain" />
                  </div>
                </div>

                <div className="relative h-20 w-20 rounded-full p-[4px] bg-gradient-to-r from-[#344FFF] to-[#0D209F] shadow-md flex items-start justify-center">
                  <div className="h-full w-full rounded-full bg-white flex items-flex-start justify-center">
                    <img src={fileIcon} alt="Preset" className="h-10 w-10 p-[4px] object-contain" />
                  </div>
                </div>

                <div className="relative h-20 w-20 rounded-full p-[4px] bg-gradient-to-r from-[#344FFF] to-[#0D209F] shadow-md flex items-start justify-center">
                  <div className="h-full w-full rounded-full bg-white flex items-flex-start justify-center">
                    <img src={customQuestions} alt="Custom" className="h-10 w-10 p-[4px] object-contain" />
                  </div>
                </div>
              </div>

              <div className="relative mx-auto rounded-2xl bg-white px-3 sm:px-5 lg:px-6 py-6 text-center text-[#2341C1] max-w-[680px] overflow-visible">
                <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-between sm:gap-4 z-20">
                  <div className="flex-1 min-w-[90px]">
                    <div className="font-bold leading-tight text-[10px] sm:text-[12px] lg:text-[14px]">AI Generated</div>
                    <div className="font-bold leading-tight text-[10px] sm:text-[12px] lg:text-[14px]">Questions</div>
                  </div>
                  <div className="text-2xl font-extrabold text-[#2341C1]">+</div>
                  <div className="flex-1">
                    <div className="font-bold leading-tight text-[10px] sm:text-[12px] lg:text-[14px]">Preset</div>
                    <div className="font-bold leading-tight text-[10px] sm:text-[12px] lg:text-[14px]">Assessment</div>
                  </div>
                  <div className="text-2xl font-extrabold text-[#2341C1]">+</div>
                  <div className="flex-1">
                    <div className="font-bold leading-tight text-[10px] sm:text-[12px] lg:text-[14px]">Custom</div>
                    <div className="font-bold leading-tight text-[10px] sm:text-[12px] lg:text-[14px]">Questions</div>
                  </div>

                </div>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Analytics and Reporting"
            description="Comprehensive analytics on funnel performance, time-to-hire, and source ROI."
          // image={analyticsIcon}
          >
            <div className="mt-4 grid gap-3 bg-[#0e1325]">
              <img src={analytics} alt="analytics" className="w-full h-auto object-contain bg-[#0e1325]" />
            </div>
          </FeatureCard>
        </div>
      </div >
    </section >
  );
};

export default KeyFeatures;


