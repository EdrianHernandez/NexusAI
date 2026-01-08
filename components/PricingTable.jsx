import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for exploring and side projects.',
    features: ['3 Active Projects', 'Up to 5 Users', 'Basic Analytics', '7-day History'],
    buttonText: 'Get Started Free',
  },
  {
    name: 'Professional',
    price: '$49',
    description: 'Best for growing startups and teams.',
    features: ['Unlimited Projects', 'Up to 25 Users', 'Advanced Analytics', 'Custom Workflows', 'SSO & Security', '30-day History'],
    isPopular: true,
    buttonText: 'Start Pro Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Scale securely across your organization.',
    features: ['Unlimited Users', 'Dedicated Support', 'SLA Guarantees', 'Custom Integrations', 'Audit Logs', 'Unlimited History'],
    buttonText: 'Contact Sales',
  },
];

const PricingTable = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
      {plans.map((plan) => (
        <div 
          key={plan.name}
          className={`pricing-card relative flex flex-col p-8 rounded-3xl border ${
            plan.isPopular 
              ? 'bg-white border-indigo-200 shadow-xl ring-2 ring-indigo-500' 
              : 'bg-white border-gray-100 shadow-sm'
          }`}
        >
          {plan.isPopular && (
            <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-indigo-600 text-white text-xs font-bold uppercase tracking-widest rounded-full">
              Most Popular
            </span>
          )}
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
            <p className="text-slate-500 mt-2 text-sm">{plan.description}</p>
          </div>

          <div className="mb-8">
            <span className="text-5xl font-extrabold text-slate-900">{plan.price}</span>
            {plan.price !== 'Custom' && <span className="text-slate-500 ml-1">/mo</span>}
          </div>

          <ul className="flex-grow space-y-4 mb-10">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-slate-700 text-sm">
                <svg className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <button 
            className={`w-full py-4 rounded-xl font-bold transition-all ${
              plan.isPopular 
                ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200' 
                : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
            }`}
          >
            {plan.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;
