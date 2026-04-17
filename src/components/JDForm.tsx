import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import autoAwesome from "@/assets/AutoAwesome.png";

type JDFormValues = {
  title: string;
  department: string;
  minExperience: string;
  maxExperience: string;
  minSalary: string;
  maxSalary: string;
  education: string;
  currency: string;
  skills: string[];
  additionalRequirements: string;
  contactName: string;
  contactEmail: string;
  contactNumber: string;
  companyName: string;
  designation: string;
};

type JDFormProps = {
  defaultValues?: Partial<JDFormValues>;
  onChange?: (values: JDFormValues) => void;
  onValidityChange?: (isValid: boolean) => void;
  onSubmit?: (values: JDFormValues) => void;
  onResult?: (result: { job_description?: string; requirements?: string; benefits?: string }, values: JDFormValues) => void;
};

const JDForm = ({ defaultValues, onChange, onValidityChange, onSubmit, onResult }: JDFormProps) => {
  const JD_FORM_STORAGE_KEY = "jd_form_values";
  const closeBtnRef = React.useRef<HTMLButtonElement>(null);
  const [values, setValues] = useState<JDFormValues>({
    title: defaultValues?.title || "",
    department: defaultValues?.department || "",
    minExperience: defaultValues?.minExperience || "",
    maxExperience: defaultValues?.maxExperience || "",
    minSalary: defaultValues?.minSalary || "",
    maxSalary: defaultValues?.maxSalary || "",
    education: defaultValues?.education || "",
    currency: defaultValues?.currency || "",
    skills: (defaultValues?.skills as string[]) || [],
    additionalRequirements: (defaultValues?.additionalRequirements as string) || "",
    contactName: (defaultValues?.contactName as string) || "",
    contactEmail: (defaultValues?.contactEmail as string) || "",
    contactNumber: (defaultValues?.contactNumber as string) || "",
    companyName: (defaultValues?.companyName as string) || "",
    designation: (defaultValues?.designation as string) || "",
  });
  const [skillInput, setSkillInput] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof JDFormValues, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  // preview is now shown on the page; this component no longer renders it

  // Load saved values from localStorage on mount
  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(JD_FORM_STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as Partial<JDFormValues>;
        setValues((prev) => ({ ...prev, ...(saved as Partial<JDFormValues>) } as JDFormValues));
      }
    } catch (_) {
      // ignore parse errors
    }
  }, []);

  // When defaultValues prop changes (e.g., user opens the form again),
  // prefill the fields with the provided defaults
  React.useEffect(() => {
    if (!defaultValues) return;
    setValues((prev) => ({
      ...prev,
      ...(defaultValues as Partial<JDFormValues>),
    } as JDFormValues));
    // Reset submitted state so validation messages don't immediately show
    setSubmitted(false);
  }, [defaultValues]);

  const validate = (v: JDFormValues) => {
    const next: Partial<Record<keyof JDFormValues, string>> = {};

    // Required fields
    if (!v.title.trim()) next.title = "Title is required";
    if (!v.department.trim()) next.department = "Department is required";
    if (!v.education.trim()) next.education = "Education is required";
    if (!v.currency.trim()) next.currency = "Currency is required";
    if (v.skills.length === 0) next.skills = "At least one skill is required";
    if (!v.minExperience.trim()) next.minExperience = "Minimum experience is required";
    if (!v.maxExperience.trim()) next.maxExperience = "Maximum experience is required";
    if (!v.minSalary.trim()) next.minSalary = "Minimum salary is required";
    if (!v.maxSalary.trim()) next.maxSalary = "Maximum salary is required";
    if (!v.contactName.trim()) next.contactName = "Name is required";
    if (!v.contactEmail.trim()) next.contactEmail = "Email is required";
    if (!v.contactNumber.trim()) next.contactNumber = "Contact number is required";
    if (!v.companyName.trim()) next.companyName = "Company name is required";

    // Numbers
    const toNum = (s: string) => (s.trim() === "" ? NaN : Number(s));
    const minExp = toNum(v.minExperience);
    const maxExp = toNum(v.maxExperience);
    const minSal = toNum(v.minSalary);
    const maxSal = toNum(v.maxSalary);
    if (!isNaN(minExp) && minExp < 0) next.minExperience = "Must be ≥ 0";
    if (!isNaN(maxExp) && maxExp < 0) next.maxExperience = "Must be ≥ 0";
    if (!isNaN(minExp) && !isNaN(maxExp) && minExp > maxExp) next.maxExperience = "Max must be ≥ Min";
    if (!isNaN(minSal) && minSal < 0) next.minSalary = "Must be ≥ 0";
    if (!isNaN(maxSal) && maxSal < 0) next.maxSalary = "Must be ≥ 0";
    if (!isNaN(minSal) && !isNaN(maxSal) && minSal > maxSal) next.maxSalary = "Max must be ≥ Min";

    // Email validation
    if (v.contactEmail.trim()) {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.contactEmail.trim());
      if (!emailOk) next.contactEmail = "Invalid email";
    }

    // Phone validation (basic)
    if (v.contactNumber.trim() && !/^\+?[0-9\-()\s]{7,}$/.test(v.contactNumber.trim())) {
      next.contactNumber = "Invalid number";
    }

    // Experience validation
    if (v.minExperience && isNaN(Number(v.minExperience))) {
      next.minExperience = 'Please enter a valid number';
    }
    if (v.maxExperience && isNaN(Number(v.maxExperience))) {
      next.maxExperience = 'Please enter a valid number';
    }
    if (v.minExperience && v.maxExperience && Number(v.minExperience) > Number(v.maxExperience)) {
      next.maxExperience = 'Max experience must be greater than or equal to min experience';
    }

    return next;
  };

  // Re-validate whenever values change
  React.useEffect(() => {
    const nextErrors = validate(values);
    setErrors(nextErrors);
    onValidityChange?.(Object.keys(nextErrors).length === 0);
  }, [values]);

  // Listen for global re-generate requests dispatched from the page
  React.useEffect(() => {
    const handler = (e: Event) => {
      const custom = e as CustomEvent<JDFormValues>;
      const next = custom.detail as JDFormValues | undefined;
      if (!next) return;
      setValues(next);
      setSubmitted(true);
      const nextErrors = validate(next);
      setErrors(nextErrors);
      if (Object.keys(nextErrors).length === 0) {
        void submitToApi();
      } else {
        toast({ title: "Please fix the highlighted fields", variant: "destructive" });
      }
    };
    window.addEventListener("jd-regenerate", handler as EventListener);
    return () => window.removeEventListener("jd-regenerate", handler as EventListener);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...values, [e.target.name]: e.target.value } as JDFormValues;
    setValues(next);
    onChange?.(next);
  };

  const addSkill = (skill: string) => {
    const trimmed = skill.trim();
    if (!trimmed) return;
    if (values.skills.includes(trimmed)) return;
    const next = { ...values, skills: [...values.skills, trimmed] };
    setValues(next);
    onChange?.(next);
  };

  const removeSkill = (skill: string) => {
    const next = { ...values, skills: values.skills.filter((s) => s !== skill) };
    setValues(next);
    onChange?.(next);
  };

  const isValid = Object.keys(errors).length === 0;

  const submitToApi = async () => {
    try {
      setIsSubmitting(true);
      const baseUrl = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/?$/, "/");
      const endpoint = `${baseUrl}jobs/ai/generate-job-descriptionapp/`;
      const endpointLead = `${baseUrl}account/lead/capture/`;
      const payload = {
        full_name: values.contactName,
        email: values.contactEmail,
        mobile_number: values.contactNumber,
        company_name: values.companyName,
        message: values.additionalRequirements,
        platform: "Jd Generator",
        job_title: values.title,
        exp_min: values.minExperience,
        exp_max: values.maxExperience,
        salary_min: values.minSalary,
        salary_max: values.maxSalary,
        department: values.department,
        skills: values.skills,
        custom_prompt: values.additionalRequirements,
        educations: values.education,
        currency: values.currency,
      };

      const payloadLead = {
        fullname: values.contactName,
        email: values.contactEmail,
        phone: values.contactNumber,
        company: values.companyName,
        designation: values.designation
      };

      // Persist current form values on click so they survive refresh
      try {
        localStorage.setItem(JD_FORM_STORAGE_KEY, JSON.stringify(values));
      } catch (_) {
        // ignore storage errors
      }

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Only submit lead data if not already submitted in this session
      if (!sessionStorage.getItem('leadCaptured')) {
        try {
          const resLead = await fetch(endpointLead, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(payloadLead),
          });
          
          if (resLead.ok) {
            // Mark lead as captured for this session
            sessionStorage.setItem('leadCaptured', 'true');
          }
        } catch (error) {
          // Silently fail for lead capture, as it's not critical for the main functionality
          console.error('Lead capture failed:', error);
        }
      }

      if (!res.ok) {
        let errorMessage = "Failed to generate job description.";
        try {
          const err = await res.json();
          errorMessage = typeof err === "string" ? err : (err.detail || JSON.stringify(err));
        } catch (_) { }
        throw new Error(errorMessage);
      }

      let data: any = null;
      try { data = await res.json(); } catch (_) { }

      const payloadData = data && (data.data || data);
      const content = payloadData && (payloadData.data || payloadData);
      const serverMessage = typeof (payloadData?.message ?? payloadData?.msg) === "string"
        ? String(payloadData?.message ?? payloadData?.msg).trim()
        : "";
      toast({
        title: "Job description generated",
        description: serverMessage || "We have received your request successfully.",
        // variant: "destructive",
      });
      // Build a partial result so we don't overwrite existing values with blanks
      const result: { job_description?: string; requirements?: string; benefits?: string } = {};
      const jd = typeof content?.job_description === "string" ? content.job_description.trim() : "";
      const req = typeof content?.requirements === "string" ? content.requirements.trim() : "";
      const ben = typeof content?.benefits === "string" ? content.benefits.trim() : "";
      if (jd) result.job_description = jd;
      if (req) result.requirements = req;
      if (ben) result.benefits = ben;
      // If nothing came back, show message (if any) and do not update preview
      if (Object.keys(result).length === 0) {
        onSubmit?.(values);
        closeBtnRef.current?.click();
        return data;
      }
      onResult?.(result, values);
      onSubmit?.(values);
      // Close the dialog once we have a successful response
      closeBtnRef.current?.click();
      return data;
    } catch (e) {
      toast({
        title: "Error",
        description: e instanceof Error ? e.message : "Something went wrong.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-2 pl-2">
      {/* Hidden close button to programmatically close the dialog on success */}
      <DialogClose asChild>
        <button ref={closeBtnRef} type="button" className="hidden" aria-hidden="true" />
      </DialogClose>
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">Posting Title *</label>
        <Input name="title" value={values.title} onChange={handleChange} placeholder="e.g., Head IT, Digital Transformation" className={submitted && errors.title ? "border-red-500" : undefined} />
        {submitted && errors.title && <p className="mt-1 text-xs text-red-600">{errors.title}</p>}
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Department *</label>
          <Input
            name="department"
            value={values.department}
            onChange={handleChange}
            placeholder="e.g., Information Technology"
            className={submitted && errors.department ? "border-red-500" : undefined}
          />
          {submitted && errors.department && <p className="mt-1 text-xs text-red-600">{errors.department}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Education *</label>
          <Input
            name="education"
            value={values.education}
            onChange={handleChange}
            placeholder="e.g., Masters"
            className={submitted && errors.education ? "border-red-500" : undefined}
          />
          {submitted && errors.education && <p className="mt-1 text-xs text-red-600">{errors.education}</p>}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Work Experience (Min Years) *</label>
          <Input
            name="minExperience"
            value={values.minExperience}
            onChange={handleChange}
            placeholder="e.g., 12"
            className={submitted && errors.minExperience ? "border-red-500" : undefined}
          />
          {submitted && errors.minExperience && <p className="mt-1 text-xs text-red-600">{errors.minExperience}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Work Experience (Max Years) *</label>
          <Input
            name="maxExperience"
            value={values.maxExperience}
            onChange={handleChange}
            placeholder="e.g., 15"
            className={submitted && errors.maxExperience ? "border-red-500" : undefined}
          />
          {submitted && errors.maxExperience && <p className="mt-1 text-xs text-red-600">{errors.maxExperience}</p>}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Salary (Minimum) *</label>
          <Input
            name="minSalary"
            value={values.minSalary}
            onChange={handleChange}
            placeholder="e.g., 2500000"
            className={submitted && errors.minSalary ? "border-red-500" : undefined}
          />
          {submitted && errors.minSalary && <p className="mt-1 text-xs text-red-600">{errors.minSalary}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Salary (Maximum) *</label>
          <Input
            name="maxSalary"
            value={values.maxSalary}
            onChange={handleChange}
            placeholder="e.g., 4500000"
            className={submitted && errors.maxSalary ? "border-red-500" : undefined}
          />
          {submitted && errors.maxSalary && <p className="mt-1 text-xs text-red-600">{errors.maxSalary}</p>}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Currency *</label>
          <Input
            name="currency"
            value={values.currency}
            onChange={handleChange}
            placeholder="e.g., INR"
            className={submitted && errors.currency ? "border-red-500" : undefined}
          />
          {submitted && errors.currency && <p className="mt-1 text-xs text-red-600">{errors.currency}</p>}
        </div>
        <div className="hidden sm:block" />
      </div>
      {/* Skills */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">Required Skills *</label>
        <Input
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              if (skillInput.trim()) {
                addSkill(skillInput);
                setSkillInput("");
              }
            }
          }}
          enterKeyHint="Enter"
          inputMode="text"
          placeholder="Press Enter to add skills"
          className={submitted && errors.skills ? "border-red-500" : undefined}
        />
        {submitted && errors.skills && <p className="mt-1 text-xs text-red-600">{errors.skills}</p>}
        {values.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {values.skills.map((skill) => (
              <span key={skill} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm text-primary border-primary/30 bg-primary/5">
                {skill}
                <button type="button" className="ml-1 text-primary/70 hover:text-primary" onClick={() => removeSkill(skill)} aria-label={`Remove ${skill}`}>
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Additional Requirements */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">Additional Requirements (Optional)</label>
        <Textarea
          name="additionalRequirements"
          value={values.additionalRequirements}
          onChange={handleChange}
          placeholder="Add any extra details or preferences"
          rows={4}
        />
      </div>

      <hr className={`${localStorage.getItem(JD_FORM_STORAGE_KEY) ? 'hidden' : 'block'} my-2`} />
      <div className={localStorage.getItem(JD_FORM_STORAGE_KEY) ? "hidden" : ""}>
        <div className="text-sm text-foreground font-medium mb-2">Please share following details to generate the Job Description:</div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Full Name</label>
            <Input 
              name="contactName" 
              value={values.contactName} 
              onChange={handleChange} 
              placeholder="John Doe" 
              className={submitted && errors.contactName ? "border-red-500" : undefined} 
            />
            {submitted && errors.contactName && <p className="mt-1 text-xs text-red-600">{errors.contactName}</p>}
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Email</label>
            <Input 
              name="contactEmail" 
              type="email" 
              value={values.contactEmail} 
              onChange={handleChange} 
              placeholder="john@example.com" 
              className={submitted && errors.contactEmail ? "border-red-500" : undefined} 
            />
            {submitted && errors.contactEmail && <p className="mt-1 text-xs text-red-600">{errors.contactEmail}</p>}
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Company Name</label>
            <Input 
              name="companyName" 
              value={values.companyName} 
              onChange={handleChange} 
              placeholder="Acme Inc." 
              className={submitted && errors.companyName ? "border-red-500" : undefined} 
            />
            {submitted && errors.companyName && <p className="mt-1 text-xs text-red-600">{errors.companyName}</p>}
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Designation</label>
            <Input 
              name="designation" 
              value={values.designation} 
              onChange={handleChange} 
              placeholder="HR Manager" 
              className={submitted && errors.designation ? "border-red-500" : undefined} 
            />
            {submitted && errors.designation && <p className="mt-1 text-xs text-red-600">{errors.designation}</p>}
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Phone Number</label>
            <Input 
              name="contactNumber" 
              type="tel" 
              value={values.contactNumber} 
              onChange={handleChange} 
              placeholder="+1 (555) 123-4567" 
              className={submitted && errors.contactNumber ? "border-red-500" : undefined} 
            />
            {submitted && errors.contactNumber && <p className="mt-1 text-xs text-red-600">{errors.contactNumber}</p>}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 pt-2 pb-2">
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <Button
          disabled={isSubmitting}
          onClick={() => {
            if (isSubmitting) return;
            setSubmitted(true);
            const nextErrors = validate(values);
            setErrors(nextErrors);
            if (Object.keys(nextErrors).length > 0) {
              toast({ title: "Please fill the highlighted fields", variant: "destructive" });
              return;
            }
            void submitToApi();
          }}
          className="bg-primary text-white hover:bg-primary/90 flex items-center gap-2"
        >
          {!isSubmitting && <img src={autoAwesome} alt="sparkle" className="h-4 w-4" />}
          {isSubmitting ? "Generating..." : (onResult ? "Regenerate Description" : "Generate Description")}
        </Button>
      </div>

    </div>
  );
};

export type { JDFormValues };
export default JDForm;


