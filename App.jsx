import React from 'react';
import Navbar from './components/Navbar';
import FeatureGrid from './components/FeatureGrid';
import PricingTable from './components/PricingTable';
import TestimonialSlider from './components/TestimonialSlider';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-700">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
              Empower your team with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                Nexus Intelligence
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10">
              The all-in-one platform to automate workflows, analyze complex data, and scale your business without the technical overhead.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
                Start 14-day Free Trial
              </button>
              <button className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg border border-indigo-100 hover:bg-indigo-50 transition-colors">
                Book a Demo
              </button>
            </div>
            <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <img 
                src="https://picsum.photos/id/180/1200/600" 
                alt="NexusAI Dashboard" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section id="features" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">Features</h2>
              <p className="mt-2 text-4xl font-bold text-slate-900">Everything you need to grow</p>
            </div>
            <FeatureGrid />
          </div>
        </section>

        <section id="testimonials" className="py-24 bg-white overflow-hidden">
          <TestimonialSlider />
        </section>

        <section id="pricing" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">Pricing</h2>
              <p className="mt-2 text-4xl font-bold text-slate-900">Simple, transparent plans</p>
            </div>
            <PricingTable />
          </div>
        </section>

        <section className="py-24">
          <CTASection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
