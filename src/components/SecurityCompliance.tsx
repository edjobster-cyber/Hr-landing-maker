// import { ShieldCheck, Users, BarChart3 } from "lucide-react";

// const Block = ({
//   Icon,
//   title,
//   items,
// }: {
//   Icon: React.ElementType;
//   title: string;
//   items: string[];
// }) => (
//   <div className="text-center">
//     <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
//       <Icon className="h-6 w-6 text-[#0f2e82]" />
//     </div>
//     <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
//     <ul className="mt-4 space-y-2 text-slate-600">
//       {items.map((it) => (
//         <li key={it} className="flex items-start justify-center gap-2">
//           <span className="text-slate-400">•</span>
//           <span>{it}</span>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const SecurityCompliance = () => {
//   return (
//     <section className="py-20 bg-slate-50">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
//           Security & Compliance
//         </h2>
//         <p className="mt-3 text-lg text-slate-600">
//           Enterprise-grade security and compliance features
//         </p>

//         <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
//           <Block
//             Icon={ShieldCheck}
//             title="Data Protection"
//             items={[
//               "GDPR compliant",
//               "SOC 2 Type II certified",
//               "Bank-level encryption",
//             ]}
//           />
//           <Block
//             Icon={Users}
//             title="Access Control"
//             items={[
//               "Role-based permissions",
//               "Single sign-on (SSO)",
//               "Multi-factor authentication",
//             ]}
//           />
//           <Block
//             Icon={BarChart3}
//             title="Compliance"
//             items={[
//               "Audit trails",
//               "Data retention policies",
//             ]}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SecurityCompliance;
import { ShieldCheck, Users, BarChart3 } from "lucide-react";

const Block = ({
  Icon,
  title,
  items,
}: {
  Icon: React.ElementType;
  title: string;
  items: string[];
}) => (
  <div className="text-center">
    <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
      <Icon className="h-6 w-6 text-[#0f2e82]" />
    </div>
    <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
    <ul className="mt-4 space-y-2 text-slate-600">
      {items.map((it) => (
        <li key={it} className="flex items-start justify-center gap-2">
          <span className="text-slate-400">•</span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  </div>
);

const SecurityCompliance = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          Security & Compliance
        </h2>
        <p className="mt-3 text-lg text-slate-600">
          Enterprise-grade security and compliance features
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <Block
            Icon={ShieldCheck}
            title="Data Protection"
            items={[
              "GDPR compliant",
              "SOC 2 Type II certified",
              "Bank-level encryption",
            ]}
          />
          <Block
            Icon={Users}
            title="Access Control"
            items={[
              "Role-based permissions",
              "Single sign-on (SSO)",
              "Multi-factor authentication",
            ]}
          />
          <Block
            Icon={BarChart3}
            title="Compliance"
            items={[
              "Audit trails",
              "Data retention policies",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;
