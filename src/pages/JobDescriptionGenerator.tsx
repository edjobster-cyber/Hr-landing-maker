import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog";
import Ellipse_Pale from "@/assets/Ellipse_Pale Blue.png";
import jdModel from "@/assets/Jd_model.png";
import jdCopy from "@/assets/Jd_copy.png";
import pletform from "@/assets/pletform1.png";
import autoAwesome from "@/assets/AutoAwesome.png";
import JDForm from "@/components/JDForm";
import React from "react";
import { Box, CheckCircle2 } from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "@/styles/quill.css";
import ContactForm from "@/components/ContactForm";
import { toast } from "sonner";


const Stat = ({ icon, label }: { icon: string; label: string }) => (
    <div className="flex items-center gap-2 text-sm text-gray-700">
        {/* <span className="inline-flex h-6 w-6 items-center justify-center rounded-full ring-1 ring-primary/40 text-primary text-xs font-semibold bg-white"> */}
        <CheckCircle2 className="w-5 h-5 text-[#3052A4]" />
        {/* </span> */}
        <span className="text-[#3052A4]">{label}</span>
    </div>
);

const Pill = ({ text }: { text: string }) => (
    <div className="px-3 py-1.5 text-sm flex items-center gap-2 bg-tanpent">
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white text-[10px] bg-tanpent">✓</span>
        <span className="text-gray-800 leading-none">{text}</span>
    </div>
);

const Step = ({
    step,
    title,
    description,
}: {
    step: string;
    title: string;
    description: string;
}) => (
    <div className="max-w-md">
        <div className="text-xl font-semibold text-sky-700">{step}</div>
        <h3 className="mt-2 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-3 text-gray-600 leading-7 text-sm">{description}</p>
    </div>
);

 

// Simple custom toolbar used by ReactQuill below
const CustomToolbar: React.FC<{ id: string }> = ({ id }) => (
    <div id={id} style={{
        borderBottom: "1px solid #eee",
        padding: "6px 8px",
        background: "#f9fafb"
    }}>
        {/* Basic formatting options */}
        <span className="ql-formats">
            <select className="ql-header" defaultValue="">
                <option value="1"></option>
                <option value="2"></option>
                <option value=""></option>
            </select>
            <select className="ql-font"></select>
            <select className="ql-size"></select>
        </span>
        <span className="ql-formats">
            <button className="ql-bold"></button>
            <button className="ql-italic"></button>
            <button className="ql-underline"></button>
            <button className="ql-strike"></button>
        </span>
        <span className="ql-formats">
            <button className="ql-list" value="ordered"></button>
            <button className="ql-list" value="bullet"></button>
            <button className="ql-align" value=""></button>
            <button className="ql-align" value="center"></button>
            <button className="ql-align" value="right"></button>
            <button className="ql-align" value="justify"></button>
        </span>
        <span className="ql-formats">
            <button className="ql-link"></button>
            <button className="ql-clean"></button>
        </span>
    </div>
);

const JobDescriptionGenerator = () => {
    const [generated, setGenerated] = React.useState<null | { job_description?: string; requirements?: string; benefits?: string }>(null);
    const [editable, setEditable] = React.useState<null | { job_description?: string; requirements?: string; benefits?: string }>(null);
    const [lastValues, setLastValues] = React.useState<any>(null);
    const [jdValue, setJdValue] = React.useState<string | null>(null);
    const [reqValue, setReqValue] = React.useState<string | null>(null);
    const [benValue, setBenValue] = React.useState<string | null>(null);

    const modules = React.useMemo(() => ({
        toolbar: { container: "#jd-toolbar" },
    }), []);
    const modulesReq = React.useMemo(() => ({
        toolbar: { container: "#req-toolbar" },
    }), []);
    const modulesBen = React.useMemo(() => ({
        toolbar: { container: "#ben-toolbar" },
    }), []);

    // Sync editable content when a new generation arrives
    React.useEffect(() => {
        if (generated) setEditable({ ...generated });
    }, [generated]);

    // Keep the editor value in sync with editable/generated changes
    React.useEffect(() => {
        const next = (editable?.job_description ?? generated?.job_description) || null;
        setJdValue(next);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editable?.job_description, generated]);
    React.useEffect(() => {
        const next = (editable?.requirements ?? generated?.requirements) || null;
        setReqValue(next);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editable?.requirements, generated]);
    React.useEffect(() => {
        const next = (editable?.benefits ?? generated?.benefits) || null;
        setBenValue(next);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editable?.benefits, generated]);
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary-light/5 to-accent/5 py-20 lg:py-32">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-[#3052A4] flex items-center justify-center gap-2">
                            FREE AI Job Description Generator
                            <img src={autoAwesome} alt="sparkle" className="h-6 w-6 md:h-7 md:w-7" />
                        </h1>
                        <p className="mt-3 text-gray-600 text-base md:text-lg">Create your perfect job description for any role in seconds</p>

                        <div className="mt-6 bg-white rounded-2xl ring-1 ring-gray-200 shadow-[0_8px_24px_rgba(2,6,23,0.06)] px-3 py-2 md:px-4 md:py-3 inline-flex flex-wrap items-center gap-2 flex justify-between flex-col sm:flex-row w-50% sm:w-auto">
                            <span className="text-gray-800 leading-none">Generate</span>
                            <div className="flex gap-2 bg-[#ECF3FB] rounded-[10px] flex-wrap flex-col sm:flex-row">
                                <Pill text="Job Description" />
                                <Pill text="Requirements" />
                                <Pill text="Benefits" />
                            </div>
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        className="ml-2 bg-primary text-white hover:bg-primary/90 rounded-lg flex items-center gap-2"
                                        onClick={() => {
                                            if (!lastValues) return;
                                            const evt = new CustomEvent("jd-regenerate", { detail: lastValues });
                                            window.dispatchEvent(evt);
                                        }}
                                    >
                                        <img src={autoAwesome} alt="sparkle" className="h-4 w-4" />
                                        {generated ? "Regenerate JD" : "Generate JD Now"}
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-3xl rounded-2xl shadow-2xl max-h-[85vh] overflow-y-auto">
                                    <DialogHeader className="pb-2">
                                        <DialogTitle className="flex items-center gap-2">
                                            <img src={autoAwesome} alt="sparkle" className="h-5 w-5" />
                                            AI Job Description Generator
                                        </DialogTitle>
                                        <DialogDescription>
                                            Fill in the key fields below to generate a comprehensive job description, requirements, and benefits.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <JDForm
                                        defaultValues={lastValues || undefined}
                                        onChange={(vals) => {
                                            setLastValues(vals);
                                        }}
                                        onResult={(result, values) => {
                                            // Handle the form submission result
                                            if (result) {
                                                setGenerated(result);
                                                setLastValues(prev => ({
                                                    ...prev,
                                                    ...values,
                                                    job_description: result.job_description,
                                                    requirements: result.requirements,
                                                    benefits: result.benefits
                                                }));
                                            }
                                        }}
                                    />
                                </DialogContent>
                            </Dialog>
                            {generated && (
                                <section className="container mx-auto px-4 mt-8">
                                    <div className="bg-white rounded-2xl ring-1 ring-gray-200 shadow-[0_10px_30px_rgba(2,6,23,0.08)] p-4 md:p-5">
                                        <div className="space-y-5">
                                            {/* Job Description Block (Editable) */}
                                            {jdValue !== null && (
                                            <div>
                                                <h3 className="font-semibold text-gray-800 mb-2 text-sm text-left">Job Description</h3>
                                                <div
                                                    style={{
                                                        border: "1px solid #ccc",
                                                        borderRadius: "10px",
                                                        fontFamily: "serif",
                                                        overflow: "hidden",
                                                    }}
                                                >
                                                    <CustomToolbar id="jd-toolbar" />
                                                    <ReactQuill
                                                        className="quill-fixed"
                                                        theme="snow"
                                                        value={jdValue ?? ""}
                                                        onChange={(val) => {
                                                            setJdValue(val);
                                                            setEditable((prev) => ({ ...(prev || {}), job_description: val }));
                                                        }}
                                                        modules={modules}
                                                        style={{ border: "none" }}
                                                    />
                                                    <div style={{
                                                        textAlign: "right",
                                                        fontSize: "12px",
                                                        color: "#888",
                                                        padding: "4px 8px",
                                                    }}>
                                                        Character Count: {(jdValue ?? "").length}/9999
                                                    </div>
                                                </div>
                                            </div>
                                            )}
                                            {/* Requirements Block (Editable) */}
                                            {reqValue !== null && (
                                            <div>
                                                <h3 className="font-semibold text-gray-800 mb-2 text-sm text-left">Requirements</h3>
                                                <div
                                                    style={{
                                                        border: "1px solid #ccc",
                                                        borderRadius: "10px",
                                                        fontFamily: "serif",
                                                        overflow: "hidden",
                                                    }}
                                                >
                                                    <CustomToolbar id="req-toolbar" />
                                                    <ReactQuill
                                                        className="quill-fixed"
                                                        theme="snow"
                                                        value={reqValue ?? ""}
                                                        onChange={(val) => {
                                                            setReqValue(val);
                                                            setEditable((prev) => ({ ...(prev || {}), requirements: val }));
                                                        }}
                                                        modules={modulesReq}
                                                        style={{ border: "none" }}
                                                    />
                                                    <div style={{
                                                        textAlign: "right",
                                                        fontSize: "12px",
                                                        color: "#888",
                                                        padding: "4px 8px",
                                                    }}>
                                                        Character Count: {(reqValue ?? "").length}/9999
                                                    </div>
                                                </div>
                                            </div>
                                            )}

                                            {/* Benefits Block (Editable) */}
                                            {benValue !== null && (
                                            <div>
                                                <h3 className="font-semibold text-gray-800 mb-2 text-sm text-left">Benefits</h3>
                                                <div
                                                    style={{
                                                        border: "1px solid #ccc",
                                                        borderRadius: "10px",
                                                        fontFamily: "serif",
                                                        overflow: "hidden",
                                                    }}
                                                >
                                                    <CustomToolbar id="ben-toolbar" />
                                                    <ReactQuill
                                                        className="quill-fixed"
                                                        theme="snow"
                                                        value={benValue ?? ""}
                                                        onChange={(val) => {
                                                            setBenValue(val);
                                                            setEditable((prev) => ({ ...(prev || {}), benefits: val }));
                                                        }}
                                                        modules={modulesBen}
                                                        style={{ border: "none" }}
                                                    />
                                                    <div style={{
                                                        textAlign: "right",
                                                        fontSize: "12px",
                                                        color: "#888",
                                                        padding: "4px 8px",
                                                    }}>
                                                        Character Count: {(benValue ?? "").length}/9999
                                                    </div>
                                                </div>
                                            </div>
                                            )}

                                            {/* Actions */}
                                            <div className="flex justify-end gap-2">
                                                <Button
                                                    variant="secondary"
                                                    onClick={async () => {
                                                        try {
                                                            const text = [
                                                                editable?.job_description ?? generated.job_description,
                                                                editable?.requirements ?? generated.requirements,
                                                                editable?.benefits ?? generated.benefits
                                                            ]
                                                                .filter(Boolean)
                                                                .join("\n\n");
                                                            
                                                            // Create a temporary element to clean HTML
                                                            const div = document.createElement('div');
                                                            div.innerHTML = text;
                                                            const cleanText = div.textContent || div.innerText || '';
                                                            
                                                            // Check if clipboard API is available
                                                            if (!navigator.clipboard) {
                                                                // Fallback for older browsers
                                                                const textArea = document.createElement('textarea');
                                                                textArea.value = cleanText;
                                                                document.body.appendChild(textArea);
                                                                textArea.select();
                                                                document.execCommand('copy');
                                                                document.body.removeChild(textArea);
                                                            } else {
                                                                await navigator.clipboard.writeText(cleanText);
                                                            }
                                                            
                                                            toast.success("Job description copied to clipboard!");
                                                        } catch (error) {
                                                            console.error('Failed to copy text:', error);
                                                            toast.error("Failed to copy to clipboard. Please try again.");
                                                        }
                                                    }}
                                                    className="bg-primary text-white hover:bg-primary/90 transition-colors duration-200"
                                                >
                                                    Copy Generated JD
                                                </Button>
                                                {/* <a href="#" className="inline-flex">
                                                    <Button  className="bg-orange-500 hover:bg-orange-600 text-white">Post Job using JD</Button>
                                                </a> */}
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            )}
                        </div>

                        {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 place-items-center"> */}
                        <div className="px-3 py-2 md:px-4 md:py-3 inline-flex flex-wrap items-center gap-2 flex justify-between w-[75%] mt-6">
                            <Stat icon="✓" label="SEO Optimized" />
                            <Stat icon="⏱" label="Time Saving" />
                            <Stat icon="📈" label="3x More Reach" />
                            {/* <Stat icon="⭐" label="Quality Output" /> */}
                        </div>

                    </div>
                </section>



                <section className="container mx-auto px-4 mt-16 pb-3">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900">
                        How to use our AI tool to generate job descriptions?
                    </h2>

                    <div className="mt-10 grid md:grid-cols-2 gap-10 items-start">
                        <div className="flex gap-6 items-start pl-10">
                            {/* <div className="shrink-0">
                <div className="h-16 w-16 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 font-bold">1</div>
                            </div>
                            <Step
                                step="Step 1"
                                title="Enter Details into the Job Description Builder"
                                description="Simply input the job title for the role you're hiring for. For a highly tailored AI-generated description, add optional details like department, work experience, salary, education, currency, and required skills. Click Generate JD to get your description instantly."
                            /> */}
                            <div className="relative text-center mb-8 md:mb-16 w-full">
                                <div>
                                    <img
                                        src={Ellipse_Pale}
                                        alt="Background Circle"
                                        className="absolute  top-[13%] left-[8%] md:top-[15%] md:left-[7%] lg:top-[32%]  lg:left-[6%] -translate-x-1/2 -translate-y-1/2 w-20 lg:w-[9rem] h-auto object-contain pointer-events-none"
                                    />
                                    <img
                                        src={Ellipse_Pale}
                                        alt="Background Circle"
                                        className="absolute top-[65%] left-[70%] md:top-[66%] lg:top-[78%] md:left-[73%] lg:left-[57%] -translate-x-1/2 -translate-y-1/2 w-20 lg:w-24 h-auto object-contain pointer-events-none"
                                    />
                                </div>
                                <p className="text-left relative mt-2 md:mt-4 text-lg md:text-2xl lg:text-3xl font-bold text-primary w-full md:w-[100%] lg:w-[103%] mx-auto">
                                    <Step
                                        step="Step 1"
                                        title="Enter Details into the Job Description Builder"
                                        description="Simply input the job title for the role you're hiring for. For a highly tailored AI-generated description, add optional details like department, work experience, salary, education, currency, and required skills. Click Generate JD to get your description instantly."
                                    />
                                </p>
                            </div>
                        </div>
                        <div className="rounded-xl overflow-hidden flex items-center justify-center">
                            <img src={jdModel} alt="AI Job Description Generator UI" className="h-full w-full object-contain" />
                        </div>

                        <div className="flex gap-6 items-start pl-10">
                            {/* <div className="shrink-0">
                                <div className="h-16 w-16 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 font-bold">2</div>
                            </div>
                            <Step
                                step="Step 2"
                                title="Generate and Refine Your Custom Job Description"
                                description="Once generated, your comprehensive job description is ready. Copy it with a single click or edit and customize details in seconds so it aligns with your company culture and requirements."
                            /> */}
                            <div className="relative text-center mb-8 md:mb-16 w-full">
                                <div>
                                    <img
                                        src={Ellipse_Pale}
                                        alt="Background Circle"
                                        className="absolute  top-[13%] left-[8%] md:top-[15%] md:left-[7%] lg:top-[32%]  lg:left-[6%] -translate-x-1/2 -translate-y-1/2 w-20 lg:w-[9rem] h-auto object-contain pointer-events-none"
                                    />
                                    <img
                                        src={Ellipse_Pale}
                                        alt="Background Circle"
                                        className="absolute top-[65%] left-[70%] md:top-[66%] lg:top-[78%] md:left-[73%] lg:left-[57%] -translate-x-1/2 -translate-y-1/2 w-20 lg:w-24 h-auto object-contain pointer-events-none"
                                    />
                                </div>
                                <p className="text-left relative mt-2 md:mt-4 text-lg md:text-2xl lg:text-3xl font-bold text-primary w-full md:w-[100%] lg:w-[103%] mx-auto">
                                    <Step
                                        step="Step 2"
                                        title="Generate and Refine Your Custom Job Description"
                                        description="Once generated, your comprehensive job description is ready. Copy it with a single click or edit and customize details in seconds so it aligns with your company culture and requirements."
                                    />
                                </p>
                            </div>

                        </div>
                        <div className="flex justify-end">
                            <div className="rounded-xl overflow-hidden flex items-center justify-center w-[78%]">

                                {/* <div className="rounded-xl border shadow-sm bg-white aspect-video overflow-hidden flex items-center justify-center w-[500px]"> */}
                                <img src={jdCopy} alt="Copy or Edit Job Description" className="h-full w-full object-contain" />
                            </div>
                        </div>
                        <div className="flex gap-6 items-start pl-10">
                            {/* <div className="shrink-0">
                                <div className="h-16 w-16 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 font-bold">3</div>
                            </div>
                            <Step
                                step="Step 3"
                                title="Post your job across all the job boards"
                                description="Publish your polished job description across job boards in one click, or integrate it into your ATS/workflows."
                            /> */}
                            <div className="relative text-center mb-8 md:mb-16 w-full">
                                <div>
                                    <img
                                        src={Ellipse_Pale}
                                        alt="Background Circle"
                                        className="absolute  top-[13%] left-[8%] md:top-[15%] md:left-[7%] lg:top-[32%]  lg:left-[6%] -translate-x-1/2 -translate-y-1/2 w-20 lg:w-[9rem] h-auto object-contain pointer-events-none"
                                    />
                                    <img
                                        src={Ellipse_Pale}
                                        alt="Background Circle"
                                        className="absolute top-[65%] left-[70%] md:top-[66%] lg:top-[78%] md:left-[73%] lg:left-[57%] -translate-x-1/2 -translate-y-1/2 w-20 lg:w-24 h-auto object-contain pointer-events-none"
                                    />
                                </div>
                                <p className="text-left relative mt-2 md:mt-4 text-lg md:text-2xl lg:text-3xl font-bold text-primary w-full md:w-[100%] lg:w-[103%] mx-auto">
                                    <Step
                                        step="Step 3"
                                        title="Post your job across all the job boards"
                                        description="Publish your polished job description across job boards in one click, or integrate it into your ATS/workflows."
                                    />
                                </p>
                            </div>

                        </div>
                        <div className="rounded-xl overflow-hidden flex items-center justify-center">
                            <img src={pletform} alt="Copy or Edit Job Description" className="h-full w-full object-contain" />
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-primary text-white">
                    {/* <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="get-started-title">
                            Ready to Transform Your Hiring Process?
                        </h2>
                        <p className="text-xl mb-8 opacity-90" data-testid="get-started-description">
                            Join hundreds of education institutions already using Edjobster to hire faster and smarter.
                        </p>
                        <a href="/company/contact-us">
                            <Button className="bg-white text-primary hover:bg-white px-8 py-4 text-lg font-semibold" data-testid="get-started-cta">
                                Talk to an Expert
                            </Button>
                        </a>
                    </div> */}
                    <ContactForm platform="Job Description Generator" title="Ready to Transform Your Hiring Process?" subTitle="Join hundreds of education institutions already using Edjobster to hire faster and smarter."/>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default JobDescriptionGenerator;


// import React from "react";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// import Ellipse_Pale from "@/assets/Ellipse_Pale Blue.png";
// import jdModel from "@/assets/Jd_model.png";
// import jdCopy from "@/assets/Jd_copy.png";
// import pletform from "@/assets/pletform1.png";
// import autoAwesome from "@/assets/AutoAwesome.png";
// import JDForm from "@/components/JDForm";

// const Stat = ({ icon, label }: { icon: string; label: string }) => (
//   <div className="flex items-center gap-2 text-sm text-gray-600">
//     <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold">
//       {icon}
//     </span>
//     <span>{label}</span>
//   </div>
// );

// const Pill = ({ text }: { text: string }) => (
//   <div className="px-3 py-1 rounded-full border text-xs bg-white shadow-sm flex items-center gap-2">
//     <span className="h-2 w-2 rounded-full bg-emerald-500" />
//     <span className="text-gray-700">{text}</span>
//   </div>
// );

// const Step = ({
//   step,
//   title,
//   description,
// }: {
//   step: string;
//   title: string;
//   description: string;
// }) => (
//   <div className="max-w-md">
//     <div className="text-sm font-semibold text-sky-700">{step}</div>
//     <h3 className="mt-2 text-xl font-semibold text-gray-900">{title}</h3>
//     <p className="mt-3 text-gray-600 leading-7 text-sm">{description}</p>
//   </div>
// );

// const JobDescriptionGenerator = () => {
//   const [generated, setGenerated] = React.useState<null | {
//     job_description?: string;
//     requirements?: string;
//     benefits?: string;
//   }>(null);
//   const [lastValues, setLastValues] = React.useState<any>(null);

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />
//       <main className="pt-24">
//         <section className="container mx-auto px-4">
//           <div className="text-center max-w-4xl mx-auto">
//             <h1 className="text-3xl md:text-5xl font-extrabold text-[#3052A4] flex gap-1 items-center justify-center">
//               FREE AI Job Description Generator
//               <img src={autoAwesome} alt="sparkle" className="w-6 h-6" />
//             </h1>
//             <p className="mt-3 text-gray-600">
//               Create your perfect job description for any role in seconds
//             </p>

//             <div className="mt-6 bg-white border rounded-xl shadow-sm p-3 md:p-4 inline-flex flex-wrap items-center gap-2">
//               <Pill text="Generate" />
//               <Pill text="Job Description" />
//               <Pill text="Requirements" />
//               <Pill text="Benefits" />

//               <Dialog>
//                 <DialogTrigger asChild>
//                   <Button className="ml-2">Generate JD Now</Button>
//                 </DialogTrigger>
//                 <DialogContent className="sm:max-w-3xl max-h-[90vh] flex flex-col">
//                   <DialogHeader className="flex-shrink-0">
//                     <DialogTitle>AI Job Description Generator</DialogTitle>
//                     <DialogDescription>
//                       Fill the key fields to generate a comprehensive job
//                       description.
//                     </DialogDescription>
//                   </DialogHeader>
//                   <div className="flex-1 overflow-hidden">
//                     <JDForm
//                       onResult={(res, values) => {
//                         setGenerated(res);
//                         setLastValues(values);
//                       }}
//                     />
//                   </div>
//                 </DialogContent>
//               </Dialog>
//             </div>

//             {/* Generated JD Output */}
//             {generated && (
//               <section className="container mx-auto px-4 mt-8">
//                 <div className="bg-white border rounded-xl shadow-sm p-4">
//                   <div className="flex flex-wrap gap-2 mb-3">
//                     <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
//                       Job Description
//                     </span>
//                     <span className="px-2 py-1 rounded-full text-xs bg-emerald-100 text-emerald-700">
//                       Requirements
//                     </span>
//                     <span className="px-2 py-1 rounded-full text-xs bg-indigo-100 text-indigo-700">
//                       Benefits
//                     </span>
//                     <Button
//                       onClick={() => {
//                         if (!lastValues) return;
//                         const evt = new CustomEvent("jd-regenerate", {
//                           detail: lastValues,
//                         });
//                         window.dispatchEvent(evt);
//                       }}
//                       className="ml-auto"
//                     >
//                       Re-Generate JD
//                     </Button>
//                   </div>

//                   <div className="space-y-6">
//                     {[
//                       { key: "job_description", label: "Job Description" },
//                       { key: "requirements", label: "Requirements" },
//                       { key: "benefits", label: "Benefits" },
//                     ].map(({ key, label }) => (
//                       <div key={key}>
//                         <h3 className="font-semibold text-gray-700 mb-2">
//                           {label}
//                         </h3>
//                         <div
//                           className="p-3 border rounded-lg bg-gray-50 text-left text-sm text-gray-800 min-h-[120px]"
//                           dangerouslySetInnerHTML={{
//                             __html: (generated as any)?.[key] || "",
//                           }}
//                         />
//                       </div>
//                     ))}

//                     <div className="flex justify-end gap-2">
//                       <Button
//                         variant="secondary"
//                         onClick={() => {
//                           const text = [
//                             generated.job_description,
//                             generated.requirements,
//                             generated.benefits,
//                           ]
//                             .filter(Boolean)
//                             .join("\n\n");
//                           const div = document.createElement("div");
//                           div.innerHTML = text;
//                           const clean =
//                             div.textContent || div.innerText || "";
//                           void navigator.clipboard.writeText(clean);
//                         }}
//                       >
//                         Copy Generated JD
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </section>
//             )}
//           </div>
//         </section>

//         {/* ✅ Keep your “Steps” and “Get Started” section */}
//         <section className="container mx-auto px-4 mt-16 pb-3">
//           <h2 className="text-2xl md:text-3xl font-extrabold text-center text-gray-900">
//             How to use our AI tool to generate job descriptions?
//           </h2>

//           <div className="mt-10 grid md:grid-cols-2 gap-10 items-start">
//             <div className="relative text-center mb-8 md:mb-16 w-full">
//               <p className="text-left relative mt-2 md:mt-4 text-lg md:text-2xl lg:text-3xl font-bold text-primary">
//                 <Step
//                   step="Step 1"
//                   title="Enter Details into the Job Description Builder"
//                   description="Simply input the job title and optional details like department, work experience, salary, education, and required skills. Click Generate JD to get your description instantly."
//                 />
//               </p>
//             </div>
//             <div className="rounded-xl overflow-hidden flex items-center justify-center">
//               <img
//                 src={jdModel}
//                 alt="AI Job Description Generator UI"
//                 className="h-full w-full object-contain"
//               />
//             </div>

//             <div className="relative text-center mb-8 md:mb-16 w-full">
//               <p className="text-left relative mt-2 md:mt-4 text-lg md:text-2xl lg:text-3xl font-bold text-primary">
//                 <Step
//                   step="Step 2"
//                   title="Generate and Refine Your Custom Job Description"
//                   description="Once generated, your job description is ready. Copy it with a single click or edit and customize details to match your company culture."
//                 />
//               </p>
//             </div>
//             <div className="flex justify-end">
//               <div className="rounded-xl overflow-hidden flex items-center justify-center w-[78%]">
//                 <img
//                   src={jdCopy}
//                   alt="Copy or Edit Job Description"
//                   className="h-full w-full object-contain"
//                 />
//               </div>
//             </div>

//             <div className="relative text-center mb-8 md:mb-16 w-full">
//               <p className="text-left relative mt-2 md:mt-4 text-lg md:text-2xl lg:text-3xl font-bold text-primary">
//                 <Step
//                   step="Step 3"
//                   title="Post your job across all the job boards"
//                   description="Publish your polished job description across job boards in one click, or integrate it into your ATS/workflows."
//                 />
//               </p>
//             </div>
//             <div className="rounded-xl overflow-hidden flex items-center justify-center">
//               <img
//                 src={pletform}
//                 alt="Platform Integration"
//                 className="h-full w-full object-contain"
//               />
//             </div>
//           </div>
//         </section>

//         <section className="py-20 bg-primary text-white">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Ready to Transform Your Hiring Process?
//             </h2>
//             <p className="text-xl mb-8 opacity-90">
//               Join hundreds of education institutions already using Edjobster to
//               hire faster and smarter.
//             </p>
//             <a href="/company/contact-us">
//               <Button className="bg-white text-primary hover:bg-white px-8 py-4 text-lg font-semibold">
//                 Talk to an Expert
//               </Button>
//             </a>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default JobDescriptionGenerator;
