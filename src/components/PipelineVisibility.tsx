// import { CheckCircle2 } from "lucide-react";

// const bullets = [
//   {
//     title: "Job & Candidate Pipelines",
//     desc: "Visual pipeline with drag-and-drop functionality and smart next actions for every candidate.",
//   },
//   {
//     title: "Bulk Import & Stages",
//     desc: " Import candidates in bulk and organize with different stages.",
//   },
//   {
//     title: "Structured Interviews",
//     desc: "Pre-built interview templates and scorecards for consistent evaluation. Hiring funnel snapshot in right side.",
//   },
// ];

// const StageRow = ({
//   label,
//   color,
//   count,
// }: {
//   label: string;
//   color: string;
//   count: number;
// }) => (
//   <div className="flex items-center justify-between rounded-lg px-4 py-4" style={{ backgroundColor: color }}>
//     <span className="font-medium text-slate-700">{label}</span>
//     <span className="rounded-md bg-white/80 px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm">
//       {count}
//     </span>
//   </div>
// );

// const PipelineVisibility = () => {
//   return (
//     <section className="py-20 bg-slate-50">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//           {/* Left copy */}
//           <div>
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
//               Complete Pipeline Visibility
//             </h2>
//             <p className="mt-4 text-lg text-slate-600">
//               Get a clear view of your entire hiring funnel with real-time updates
//               and smart next actions.
//             </p>

//             <ul className="mt-8 space-y-6">
//               {bullets.map((b) => (
//                 <li key={b.title} className="flex items-start gap-3">
//                   <CheckCircle2 className="h-6 w-6 text-emerald-500 mt-0.5" />
//                   <div>
//                     <p className="font-semibold text-slate-900">{b.title}</p>
//                     <p className="text-slate-600">{b.desc}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Right card */}
//           <div className="rounded-2xl bg-white shadow-xl ring-1 ring-slate-100 p-6 md:p-8">
//             <div className="text-center">
//               <h3 className="text-xl font-semibold text-slate-900">
//                 Hiring Funnel Analytics
//               </h3>
//               <p className="text-slate-500 mt-1">Sample pipeline view</p>
//             </div>

//             <div className="mt-6 space-y-4">
//               <StageRow label="Applied" color="#eaf3ff" count={124} />
//               <StageRow label="Screening" color="#fff8d6" count={42} />
//               <StageRow label="Interview" color="#e7faef" count={18} />
//               <StageRow label="Offer" color="#f7efff" count={5} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import { CheckCircle2 } from "lucide-react";

const bullets = [
  {
    title: "Job & Candidate Pipelines",
    desc: "Visual pipeline with drag-and-drop functionality and smart next actions for every candidate.",
  },
  {
    title: "Bulk Import & Stages",
    desc: " Import candidates in bulk and organize with different stages.",
  },
  {
    title: "Structured Interviews",
    desc: "Pre-built interview templates and scorecards for consistent evaluation. Hiring funnel snapshot in right side.",
  },
];

const StageRow = ({
  label,
  color,
  count,
}: {
  label: string;
  color: string;
  count: number;
}) => (
  <div className="flex items-center justify-between rounded-lg px-4 py-4" style={{ backgroundColor: color }}>
    <span className="font-medium text-slate-700">{label}</span>
    <span className="rounded-md bg-white/80 px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm">
      {count}
    </span>
  </div>
);

const PipelineVisibility = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left copy */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Complete Pipeline Visibility
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Get a clear view of your entire hiring funnel with real-time updates
              and smart next actions.
            </p>

            <ul className="mt-8 space-y-6">
              {bullets.map((b) => (
                <li key={b.title} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900">{b.title}</p>
                    <p className="text-slate-600">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right card */}
          <div className="rounded-2xl bg-white shadow-xl ring-1 ring-slate-100 p-6 md:p-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-slate-900">
                Hiring Funnel Analytics
              </h3>
              <p className="text-slate-500 mt-1">Sample pipeline view</p>
            </div>

            <div className="mt-6 space-y-4">
              <StageRow label="Applied" color="#eaf3ff" count={124} />
              <StageRow label="Screening" color="#fff8d6" count={42} />
              <StageRow label="Interview" color="#e7faef" count={18} />
              <StageRow label="Offer" color="#f7efff" count={5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PipelineVisibility;