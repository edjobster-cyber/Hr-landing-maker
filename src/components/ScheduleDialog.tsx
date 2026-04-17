import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Calendar as CalendarIcon, Clock, Phone, User, Mail, Building2 } from "lucide-react";

type ScheduleDialogProps = {
  trigger?: React.ReactNode;
};

const ScheduleDialog = ({ trigger }: ScheduleDialogProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    date: "",
    time: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const iframeUrl = "https://crm.zoho.in/bookings/IntroductoryDemoMeeting?rid=e3c1335734151d00da088f55f34a4e1c1104ed686638b562b24d6547b94c42a382e4220808fbdfc07cc7b8f6bfdc8024gid1e33b3fc60b1d6fc0529de33bf4cfd48222fbc3aaeb966b0f34de5a465ed34c8&option=embed";

  // Compute today's date and current time (HH:MM) in local timezone for input constraints
  const now = new Date();
  const todayStr = now.toISOString().slice(0, 10); // YYYY-MM-DD
  const currentTimeStr = now.toTimeString().slice(0, 5); // HH:MM

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.mobile || !form.company || !form.date || !form.time) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }

    // Basic email format validation
    const emailOk = /.+@.+\..+/.test(form.email);
    if (!emailOk) {
      toast({ title: "Invalid email", description: "Please enter a valid email address.", variant: "destructive" });
      return;
    }

    // Validate that selected date/time is not in the past
    try {
      const selected = new Date(`${form.date}T${form.time}`);
      if (isNaN(selected.getTime())) {
        toast({ title: "Invalid date/time", description: "Please select a valid date and time.", variant: "destructive" });
        return;
      }
      if (selected.getTime() < now.getTime()) {
        toast({ title: "Choose a future slot", description: "Date and time cannot be in the past.", variant: "destructive" });
        return;
      }
    } catch (_) {
      toast({ title: "Invalid date/time", description: "Please select a valid date and time.", variant: "destructive" });
      return;
    }

    try {
      setSubmitting(true);
      const baseUrl = (import.meta.env.VITE_API_BASE_URL || "").replace(/\/?$/, "/");
      const endpoint = `${baseUrl}hr_services/schedule-call/`;
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          mobile_number: form.mobile,
          date: form.date,
          time: form.time,
          platform: "Hero",
        }),
      });

      if (!res.ok) {
        let errorMessage = "Failed to schedule the call.";
        try {
          const err = await res.json();
          errorMessage = typeof err === "string" ? err : (err.detail || JSON.stringify(err));
        } catch (_) { }
        throw new Error(errorMessage);
      }

      let data: any = null;
      try { data = await res.json(); } catch (_) { }
      const serverMessage =
        (data && typeof data === "object" && (data.message || data.msg)) ||
        "Thanks! Your call has been scheduled.";

      toast({ title: "Scheduled", description: String(serverMessage) });
      setOpen(false);
      setForm({ name: "", email: "", mobile: "", company: "", date: "", time: "" });
    } catch (e) {
      toast({ title: "Error", description: e instanceof Error ? e.message : "Something went wrong.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger ? (
        <DialogTrigger asChild>
          {/* Custom trigger passed by parent */}
          {trigger}
        </DialogTrigger>
      ) : (
        <DialogTrigger asChild>
          <Button variant="glass" size="xl" className="group">
            <CalendarIcon className="w-5 h-5 mr-2" />
            Schedule a Call
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className="w-[95%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] h-[90%] sm:h-[85%] md:h-[80%] max-w-none max-h-[90vh] rounded-lg m-0 p-0 overflow-hidden bg-card flex flex-col">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <DialogTitle className="text-2xl font-semibold">Schedule a Call</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">Share your contact and preferred slot. We'll confirm shortly.</DialogDescription>
        </DialogHeader>
        {/* <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  className="pl-9"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={handleChange}
                  className="pl-9"
                  required
                />
              </div>
            </div>
          
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-foreground mb-2">
              Contact Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="mobile"
                name="mobile"
                type="tel"
                inputMode="tel"
                placeholder="e.g., +91 9319976569"
                value={form.mobile}
                onChange={handleChange}
                className="pl-9"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
              Company
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Your company name"
                value={form.company}
                onChange={handleChange}
                className="pl-9"
                required
              />
            </div>
          </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                Preferred Date
              </label>
              <Input id="date" name="date" type="date" min={todayStr} value={form.date} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-foreground mb-2">
                Preferred Time
              </label>
              <Input id="time" name="time" type="time" min={form.date === todayStr ? currentTimeStr : undefined} value={form.time} onChange={handleChange} required />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={submitting} variant="cta">
              {submitting ? "Submitting..." : "Submit"}
            </Button>
          </DialogFooter>
        </form> */}
        <div className="flex-1 flex flex-col overflow-hidden px-2 sm:px-4 pb-2 sm:pb-4">
          <div className="flex-1 rounded-md overflow-hidden border">
            <iframe
              src={iframeUrl}
              title="Book a Call"
              allowFullScreen
              className="w-full h-full"
              loading="lazy"
            />
            {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dl2AdwgLq0w?si=3-QrBKwc2fJUR_iG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleDialog;
