import { Button } from "@/components/ui/button";

const AtsCta = () => {
  return (
    <section className="py-20" style={{ backgroundColor: "#0f2e82" }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Ready to Streamline Your Hiring?
        </h2>
        <p className="mt-4 text-white/90 text-lg">
          See how Edjobster ATS can transform your recruitment process.
        </p>
        <div className="mt-8">
          <Button
            onClick={() => (window.location.href = "/contact?platform=Ats")}
            className="rounded-full bg-white text-[#0f2e82] hover:bg-white/90 px-6"
          >
            Request a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AtsCta;