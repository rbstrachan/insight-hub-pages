
import { Button } from "@/components/ui/button";
import {
  Twitter,
  Linkedin,
  Youtube,
  Facebook,
  Send,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-wide px-6">
        <div className="pt-20 pb-12 border-b border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="space-y-6">
              <h2 className="text-3xl font-semibold tracking-tight">
                Ready to transform your qualitative research?
              </h2>
              <p className="text-gray-300 max-w-lg">
                Join thousands of researchers who are saving time and uncovering deeper insights with InsightIQ.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Free Trial
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-gray-700 hover:bg-gray-800">
                  Schedule Demo
                </Button>
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-medium mb-4">
                Subscribe to our newsletter
              </h3>
              <p className="text-gray-300 mb-6">
                Get the latest updates, tips, and insights for qualitative researchers.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="sm" className="shrink-0">
                  <Send className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </AnimatedSection>
          </div>
        </div>
        
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="text-xl font-semibold">InsightIQ</div>
            <p className="text-gray-400">
              Advanced qualitative data analysis software for researchers and businesses.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#integrations" className="text-gray-400 hover:text-white transition-colors">Integrations</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Changelog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Roadmap</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Tutorials</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-800 text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} InsightIQ. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
