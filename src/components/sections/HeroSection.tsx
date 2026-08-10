import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-slate-50">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-indigo-50/50 blur-3xl mix-blend-multiply opacity-70"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] rounded-full bg-purple-50/50 blur-3xl mix-blend-multiply opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
            Introducing NexusUI v2.0
            <ChevronRight className="h-4 w-4 ml-1 text-indigo-400" />
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Build incredible <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">digital experiences</span> faster.
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            The ultimate toolset for modern product teams. Design, build, and deploy stunning user interfaces without compromising on performance or accessibility.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto group">
              Start Building for Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Book a Demo
            </Button>
          </div>
          
          <p className="mt-5 text-sm text-slate-500">
            No credit card required. 14-day free trial.
          </p>
        </div>
      </div>
    </section>
  );
};
