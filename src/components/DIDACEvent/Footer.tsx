const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-muted-foreground space-y-2">
          <p>© Edjobster — AI for Education Hiring</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
