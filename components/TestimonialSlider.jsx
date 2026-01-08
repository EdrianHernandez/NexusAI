import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    content: "NexusAI has completely transformed how we handle our backend operations. We've seen a 40% increase in productivity across our dev team.",
    author: "Sarah Johnson",
    role: "CTO at TechFlow",
    avatar: "https://picsum.photos/id/64/100/100",
  },
  {
    id: 2,
    content: "The workflow automation is second to none. It's so intuitive that our non-technical staff can build complex logic without writing a single line of code.",
    author: "Marcus Chen",
    role: "Product Manager at CloudScale",
    avatar: "https://picsum.photos/id/65/100/100",
  },
  {
    id: 3,
    content: "Security was our biggest concern when moving to a SaaS solution. NexusAI's SOC2 compliance and enterprise features made the decision easy.",
    author: "Elena Rodriguez",
    role: "VP of Engineering at SecureNet",
    avatar: "https://picsum.photos/id/66/100/100",
  }
];

const TestimonialSlider = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 text-center">
      <div className="relative min-h-[300px] flex items-center justify-center">
        {testimonials.map((testimonial, idx) => (
          <div 
            key={testimonial.id}
            className={`absolute transition-all duration-700 ease-in-out transform ${
              idx === active 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-12 pointer-events-none'
            }`}
          >
            <div className="mb-8">
              <svg className="h-12 w-12 text-indigo-200 mx-auto mb-6" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-snug">
                "{testimonial.content}"
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.author} 
                className="w-16 h-16 rounded-full border-2 border-indigo-100 mb-3 object-cover"
              />
              <h4 className="text-lg font-bold text-slate-900">{testimonial.author}</h4>
              <p className="text-slate-500 font-medium">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center gap-2 mt-12">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === active ? 'bg-indigo-600 w-8' : 'bg-indigo-200'
            }`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
