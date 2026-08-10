import React from 'react';

export const DashboardPreview: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Powerful insights at your fingertips</h2>
          <p className="text-lg text-slate-600">
            Monitor your business metrics in real-time with our beautifully designed analytics dashboard.
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          {/* Decorative background blur */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20"></div>
          
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/50 shadow-2xl bg-white">
            <div className="flex items-center px-4 py-3 bg-slate-100/50 border-b border-slate-200/50">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
            </div>
            <img 
              src="/dashboard.png" 
              alt="SaaS Dashboard Preview" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
