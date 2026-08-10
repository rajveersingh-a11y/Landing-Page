
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { DashboardPreview } from './components/sections/DashboardPreview';
import { HowItWorksSection } from './components/sections/HowItWorksSection';
import { BenefitsSection } from './components/sections/BenefitsSection';
import { CTASection } from './components/sections/CTASection';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DashboardPreview />
        <HowItWorksSection />
        <BenefitsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
