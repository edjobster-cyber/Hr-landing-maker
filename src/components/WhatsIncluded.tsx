import { FileText, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Ai from "../assets/Ai.png"
import business from "../assets/business_center.png"
import cv_tuner from "../assets/cv_tuner.png"
import robot from "../assets/robot.png"



export default function WhatsIncluded({
  title = "What's Included",
  description = "Complete hiring solution tailored for Education Instituions",
}) {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-gradient-to-b from-[#0b1730] to-[#3b2a78]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3" data-testid="whats-included-title">
            {title}
          </h2>
          {description ? (
            <p className="text-base md:text-lg text-gray-300" data-testid="whats-included-description">
              {description}
            </p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 justify-items-center">
          <div
            className={`relative overflow-hidden rounded-2xl bg-white from-white shadow-xl ring-1 ring-black/5 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl flex justify-center flex-wrap w-[84%] md:w-[100%] lg:w-[84%] h-[460px] sx:h-[415px] md:h-[560px] lg:h-[460px] cursor-pointer`}
            onClick={() => navigate('/products/ats')}
            role="button"
            tabIndex={0}
          >
            <div className="h-[30%] flex items-center flex-col justify-center gap-1">
              <div className="w-16 h-16 bg-[#F0F2FF] rounded-xl flex items-center justify-center">
                <img src={Ai} alt="Background Circle" className="w-12" />
              </div>
              <p className="text-slate-800 text-lg leading-7 font-semibold font-semibold">
               AI-Powered ATS Platform
              </p>
            </div>
            <div className="bg-[#F0F2FF] w-full h-[70%] flex items-center flex-wrap">
              <div className="p-8 w-full space-y-6 content-start">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-slate-800 text-lg leading-7">
                    <span className="font-semibold">Attract</span> - Be seen on the top channels to attract 3x better candidates.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-slate-800 text-lg leading-7">
                    <span className="font-semibold">Engage</span> - Schedule interviews fast with the selected candidates, straight from Edjobster ATS.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-slate-800 text-lg leading-7">
                    <span className="font-semibold">Hire</span> - Win the top talent effortlessly with smart hiring tools, powered by AI.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`relative overflow-hidden rounded-2xl bg-white from-white shadow-xl ring-1 ring-black/5 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl flex justify-center flex-wrap w-[84%] md:w-[100%] lg:w-[84%] h-[460px] sx:h-[415px] md:h-[560px] lg:h-[460px] cursor-pointer`}
            onClick={() => navigate('/products/career-portal')}
            role="button"
            tabIndex={0}
          >
            <div className="h-[30%] flex items-center flex-col justify-center gap-1">
              <div className="w-16 h-16 bg-[#FFF1E2] rounded-xl flex items-center justify-center">
                <img src={business} alt="Background Circle" className="w-12" />
              </div>
              <p className="text-slate-800 text-lg leading-7 font-semibold">
              Custom Branded Careers Page
              </p>
            </div>
            <div className="bg-[#FFF1E2] w-full h-[70%] flex items-center flex-wrap">
              <div className="p-8 w-full space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-slate-800 text-lg leading-7">
                    <span className="font-semibold">Launch in Minutes</span> - Add your logo, company details, and values, roles sync automatically.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-slate-800 text-lg leading-7">
                    <span className="font-semibold">Always Current </span> - New jobs publish instantly; filled roles vanish, keeping listings accurate.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-slate-800 text-lg leading-7">
                    <span className="font-semibold">On-Brand Design</span> - Choose customization; host for free or use your own domain.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`relative overflow-hidden rounded-2xl bg-white from-white shadow-xl ring-1 ring-black/5 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl flex justify-center flex-wrap w-[84%] md:w-[100%] lg:w-[84%] h-[460px] sx:h-[415px] md:h-[560px] lg:h-[460px] cursor-pointer`}
            onClick={() => navigate('/products/resume-builder')}
            role="button"
            tabIndex={0}
          >
            <div className="h-[30%] flex items-center flex-col justify-center gap-1">
              <div className="w-16 h-16 bg-[#D2F5D7] rounded-xl flex items-center justify-center">
                <img src={cv_tuner} alt="Background Circle" className="w-12" />
              </div>
              <p className="text-slate-800 text-lg leading-7 font-semibold">
              ATS Compatible CV Tuner
              </p>
            </div>
            <div className="bg-[#D2F5D7] w-full h-[70%] flex items-center flex-wrap">
              <div className="p-8 w-full space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-slate-800 text-lg leading-7">
                    <span className="font-semibold">Attract</span> - Be seen on the top channels to attract 3x better candidates.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-slate-800 text-lg leading-7">
                    <span className="font-semibold">Engage</span> - Schedule interviews fast with the selected candidates, straight from Edjobster ATS.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-slate-800 text-lg leading-7">
                    <span className="font-semibold">Hire</span> - Win the top talent effortlessly with smart hiring tools, powered by AI.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`relative overflow-hidden rounded-2xl bg-white from-white shadow-xl ring-1 ring-black/5 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl flex justify-center flex-wrap w-[84%] md:w-[100%] lg:w-[84%] h-[460px] sx:h-[415px] md:h-[560px] lg:h-[460px] cursor-pointer`}
            onClick={() => navigate('/products/teacher-ai')}
            role="button"
            tabIndex={0}
          >
            <div className="h-[30%] flex items-center flex-col justify-center gap-1">
              <div className="w-16 h-16 bg-[#FFFAD0] rounded-xl flex items-center justify-center">
                <img src={robot} alt="Background Circle" className="w-12" />
              </div>
              <p className="text-slate-800 text-lg leading-7 font-semibold">
              AI-Powered Teaching Assistant
              </p>
            </div>
            <div className="bg-[#FFFAD0] w-full h-[70%] flex items-center flex-wrap">
              <div className="p-8 w-full space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-slate-800 text-lg leading-7">
                    <span className="font-semibold">Time:</span> Cut lesson-planning time by up to 10 hours; create full plans for any K-12 grade.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-slate-800 text-lg leading-7">
                    <span className="font-semibold">AI Tools:</span> Generate lesson plans, enhance materials, build assessments, spark activity ideas.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-slate-800 text-lg leading-7">
                    <span className="font-semibold">Classroom-Ready Outputs:</span> Receive formatted, editable content with resource links in Word, PDF.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


