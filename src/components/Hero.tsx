
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl opacity-30 animate-float-slow"></div>
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-3xl opacity-20 animate-float"></div>
      </div>

      <div className="container-wide relative z-10 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl space-y-8 text-center lg:text-left">
            <div className="space-y-2">
              <span className="inline-block py-1 px-3 text-xs font-medium tracking-wider text-primary bg-primary/10 rounded-full">
                QUALITATIVE DATA ANALYSIS SOFTWARE
              </span>
              <h1 className="font-semibold tracking-tight">
                Transform Qualitative Data into
                <span className="block text-gradient"> Actionable Insights</span>
              </h1>
            </div>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
              InsightIQ helps researchers, academics, and businesses analyze complex qualitative data with AI-powered tools, saving time and uncovering deeper meaning.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="w-full sm:w-auto">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Schedule Demo
              </Button>
            </div>
            
            <p className="text-sm text-gray-500">
              No credit card required. 14-day free trial.
            </p>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="InsightIQ Dashboard"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>
            </div>
            
            <div className="absolute -top-4 -left-4 -right-4 -bottom-4 rounded-xl border border-blue-200/50 -z-10"></div>
            <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-xl border border-blue-100/50 -z-10"></div>
          </div>
        </div>
      </div>

      <div className="container-wide relative z-10 mt-20 px-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <div className="flex items-center space-x-2 opacity-70 hover:opacity-100 transition-opacity">
            <img src="https://via.placeholder.com/120x30?text=Company+1" alt="Trusted by" className="h-8" />
          </div>
          <div className="flex items-center space-x-2 opacity-70 hover:opacity-100 transition-opacity">
            <img src="https://via.placeholder.com/120x30?text=Company+2" alt="Trusted by" className="h-8" />
          </div>
          <div className="flex items-center space-x-2 opacity-70 hover:opacity-100 transition-opacity">
            <img src="https://via.placeholder.com/120x30?text=Company+3" alt="Trusted by" className="h-8" />
          </div>
          <div className="flex items-center space-x-2 opacity-70 hover:opacity-100 transition-opacity">
            <img src="https://via.placeholder.com/120x30?text=Company+4" alt="Trusted by" className="h-8" />
          </div>
          <div className="flex items-center space-x-2 opacity-70 hover:opacity-100 transition-opacity">
            <img src="https://via.placeholder.com/120x30?text=Company+5" alt="Trusted by" className="h-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
