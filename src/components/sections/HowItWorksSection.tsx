import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Create an Account',
    description: 'Sign up in seconds and get instant access to your personalized dashboard.'
  },
  {
    number: '02',
    title: 'Connect Your Data',
    description: 'Seamlessly integrate with your existing tools using our one-click plugins.'
  },
  {
    number: '03',
    title: 'Start Scaling',
    description: 'Watch your metrics grow as our platform automatically optimizes your workflow.'
  }
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How it works</h2>
          <p className="text-lg text-slate-600">
            Get up and running in minutes, not days. Our intuitive onboarding process makes it simple.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-100 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-indigo-50 flex items-center justify-center text-3xl font-extrabold text-indigo-600 mb-6 shadow-sm z-10">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
