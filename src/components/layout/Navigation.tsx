import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Settings, Upload, BarChart3 } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="border-b border-border bg-card shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <NavLink to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-lg">Energy Share</span>
            </NavLink>

            <div className="hidden md:flex items-center gap-1">
              <NavLink
                to="/dashboard"
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                activeClassName="text-foreground bg-muted"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </NavLink>
              <NavLink
                to="/simulator"
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                activeClassName="text-foreground bg-muted"
              >
                <Settings className="h-4 w-4" />
                Simulator
              </NavLink>
              <NavLink
                to="/upload"
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                activeClassName="text-foreground bg-muted"
              >
                <Upload className="h-4 w-4" />
                Upload Model
              </NavLink>
            </div>
          </div>

          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </nav>
  );
};
