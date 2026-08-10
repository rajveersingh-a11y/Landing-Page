import React from 'react';
import { Button } from '../ui/Button';

export const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-indigo-600">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0, transparent 100%)', backgroundSize: '100% 100%' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to transform your workflow?
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Join thousands of teams who are already building better products, faster. Start your free 14-day trial today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-slate-50 w-full sm:w-auto">
              Get Started for Free
            </Button>
            <Button variant="outline" size="lg" className="border-indigo-400 text-white hover:bg-indigo-500 w-full sm:w-auto">
              Talk to Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
