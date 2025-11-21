import { BarChart3 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16 mt-20 border-t border-secondary-foreground/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo + Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-2xl bg-primary flex items-center justify-center shadow-md">
                <BarChart3 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-xl tracking-tight">Energy Share</span>
            </div>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              Empowering communities with AI&nbsp;driven energy sharing and sustainability insights.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Platform</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><a href="/Features" className="hover:text-secondary-foreground transition-colors">Features</a></li>
              <li><a href="/Pricing" className="hover:text-secondary-foreground transition-colors">Pricing</a></li>
              <li><a href="/Documentation" className="hover:text-secondary-foreground transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Resources</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><a href="/AboutRes" className="hover:text-secondary-foreground transition-colors">About Research</a></li>
              <li><a href="/UploadModel" className="hover:text-secondary-foreground transition-colors">ML Model Upload</a></li>
              <li><a href="/APIDocumentation" className="hover:text-secondary-foreground transition-colors">API Documentation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><a href="/Support" className="hover:text-secondary-foreground transition-colors">Support</a></li>
              <li><a href="/Community" className="hover:text-secondary-foreground transition-colors">Community</a></li>
              <li><a href="mailto:jifnjinj@nomail.com" className="hover:text-secondary-foreground transition-colors">Email Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 mt-12 pt-6 text-center text-sm text-secondary-foreground/60">
          <p>
            &copy; 2024 Energy Share Platform. Built for sustainable communities.
          </p>
        </div>
      </div>
    </footer>
  );
};
