import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Card } from '../ui/Card';

const benefits = [
  "Reduce development time by up to 40%",
  "Built-in compliance and security features",
  "Automated daily backups",
  "24/7 dedicated support team",
  "Customizable user roles and permissions",
  "Seamless third-party integrations"
];

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why choose NexusUI for your next big project?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We've spent years obsessing over the details so you don't have to. Our platform provides the perfect balance of flexibility and out-of-the-box functionality, allowing you to focus on what truly matters: your core product.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-indigo-600 mt-0.5 shrink-0" />
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <Card className="p-8 bg-indigo-600 border-none text-white shadow-xl shadow-indigo-600/20">
              <div className="text-5xl font-extrabold mb-4">99.99%</div>
              <div className="text-indigo-100 text-lg mb-8 font-medium">Guaranteed Uptime SLA</div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2 text-sm font-medium">
                    <span className="text-indigo-100">Performance Score</span>
                    <span>100/100</span>
                  </div>
                  <div className="w-full bg-indigo-500/50 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2 text-sm font-medium">
                    <span className="text-indigo-100">Customer Satisfaction</span>
                    <span>98%</span>
                  </div>
                  <div className="w-full bg-indigo-500/50 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
