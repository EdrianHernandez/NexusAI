
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="cta-container relative overflow-hidden rounded-[3rem] px-8 py-20 md:px-16 md:py-24 text-center">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-64 h-64 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 rounded-full bg-white blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Ready to scale your intelligence?
          </h2>
          <p className="max-w-2xl mx-auto text-indigo-100 text-lg md:text-xl mb-12">
            Join 10,000+ teams who use NexusAI to automate their success. 
            Start your 14-day free trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="px-10 py-5 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-indigo-50 transition-all text-lg shadow-xl hover:shadow-2xl">
              Start Free Trial Now
            </button>
            <p className="text-indigo-200 font-medium italic">
              "The best decision we made this year."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
