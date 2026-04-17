import edjobsterLogo from "@/assets/edjobster-logo.png";
import didacLogo from "@/assets/didac-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <img src={edjobsterLogo} alt="Edjobster" className="h-11 w-auto" />
          </div>
          <div className="block">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-2 text-xs font-medium text-primary">
              <img src={didacLogo} alt="DIDAC India" className="h-8 w-auto" />
              <span className="text-center leading-tight">
                As Seen at<br />DIDAC India 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
