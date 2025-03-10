
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Sociology Professor, Stanford University",
    content:
      "InsightIQ has revolutionized how I analyze interview data. What used to take weeks now takes days, and the insights are more profound than ever before.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5,
  },
  {
    name: "Mark Thompson",
    role: "Market Research Director, ConsumerPulse Inc.",
    content:
      "We've tried numerous qualitative analysis tools, but InsightIQ stands out for its intuitive interface and powerful AI capabilities. Our team's productivity has increased by 40%.",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    rating: 5,
  },
  {
    name: "Dr. Emily Chen",
    role: "Healthcare Research Lead, Memorial Hospital",
    content:
      "The collaborative features in InsightIQ allow our distributed research team to work together seamlessly. The platform's security features give us confidence when handling sensitive patient data.",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 4,
  },
  {
    name: "James Wilson",
    role: "Policy Analyst, Government Research Office",
    content:
      "InsightIQ has become essential to our policy development process. The ability to process large volumes of public comments and extract meaningful insights has transformed our approach.",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const visibleCount = 3;

  const nextTestimonial = () => {
    setDirection("right");
    setActiveIndex((prev) => 
      prev === testimonials.length - visibleCount ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setDirection("left");
    setActiveIndex((prev) => 
      prev === 0 ? testimonials.length - visibleCount : prev - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container-wide px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 text-xs font-medium tracking-wider text-primary bg-primary/10 rounded-full mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl mb-4">
            What our users say
          </h2>
          <p className="text-lg text-gray-600">
            Researchers and analysts from various fields rely on InsightIQ to transform their qualitative data.
          </p>
        </AnimatedSection>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ 
                transform: `translateX(-${activeIndex * (100 / testimonials.length)}%)` 
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full min-w-full md:min-w-[33.33%] px-4"
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col">
                    <div className="flex items-center space-x-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < testimonial.rating 
                              ? "text-yellow-400 fill-yellow-400" 
                              : "text-gray-300"
                          }`} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 flex-grow italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center mt-auto">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="h-12 w-12 rounded-full object-cover mr-4" 
                      />
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: testimonials.length - visibleCount + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                activeIndex === index ? "bg-primary" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
