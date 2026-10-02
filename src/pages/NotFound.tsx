import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";

const NotFound = () => {
  return (
    <>
    <Seo path="/404" title="Page not found | Cloud Community Days" description="This page does not exist. Head back to Cloud Community Days 2026." noindex />
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-5xl font-display mb-4">404</h1>
        <p className="text-lg text-muted-foreground mb-6">Oops! Page not found</p>
        <Button asChild>
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
    </>
  );
};

export default NotFound;
