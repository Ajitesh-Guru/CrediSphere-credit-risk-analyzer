
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-theme-background">
      <div className="text-center p-8 bg-theme-dark rounded-lg border border-theme-tertiary/30 shadow-lg">
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-theme-secondary/30 text-theme-primary mb-6">
          <AlertCircle className="h-10 w-10" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-white">404</h1>
        <p className="text-xl text-gray-400 mb-6">Oops! Page not found</p>
        <Button asChild className="bg-theme-primary hover:bg-theme-primary/90 text-theme-dark">
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
