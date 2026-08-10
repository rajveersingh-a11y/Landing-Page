import React from 'react';
import { Layers, Zap, Shield, BarChart3, Globe, Code } from 'lucide-react';
import { Card } from '../ui/Card';

const features = [
  {
    icon: <Zap className="h-6 w-6 text-indigo-500" />,
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance, ensuring your users never have to wait.'
  },
  {
    icon: <Shield className="h-6 w-6 text-indigo-500" />,
    title: 'Enterprise Security',
    description: 'Bank-grade security protocols built-in to protect your most sensitive data.'
  },
  {
    icon: <Layers className="h-6 w-6 text-indigo-500" />,
    title: 'Modular Architecture',
    description: 'Easily extend and customize with our highly decoupled component system.'
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-indigo-500" />,
    title: 'Advanced Analytics',
    description: 'Gain deep insights into user behavior with our comprehensive dashboard.'
  },
  {
    icon: <Globe className="h-6 w-6 text-indigo-500" />,
    title: 'Global CDN',
    description: 'Deliver content seamlessly across the globe with our edge network.'
  },
  {
    icon: <Code className="h-6 w-6 text-indigo-500" />,
    title: 'Developer Friendly',
    description: 'Extensive API documentation and SDKs for all major languages.'
  }
];

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything you need to scale</h2>
          <p className="text-lg text-slate-600">
            NexusUI provides a comprehensive suite of tools designed to help you build, launch, and grow your product without the technical debt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-md transition-shadow group border-slate-100 hover:border-indigo-100">
              <div className="h-12 w-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
