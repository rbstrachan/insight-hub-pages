
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    description: "Perfect for individuals and small projects",
    price: 29,
    features: [
      "Up to 50 documents",
      "Basic text analysis tools",
      "5GB storage",
      "Email support",
      "1 user account"
    ],
    popular: false,
    buttonText: "Start Free Trial",
    buttonVariant: "outline" as const,
  },
  {
    name: "Professional",
    description: "Ideal for researchers and teams",
    price: 89,
    features: [
      "Unlimited documents",
      "Advanced analysis tools",
      "50GB storage",
      "Priority support",
      "5 user accounts",
      "Collaboration features",
      "Data export capabilities",
    ],
    popular: true,
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
  },
  {
    name: "Enterprise",
    description: "For organizations with advanced needs",
    price: 249,
    features: [
      "Unlimited everything",
      "Custom integrations",
      "Dedicated account manager",
      "Training sessions",
      "SLA guarantees",
      "Custom security features",
      "API access",
    ],
    popular: false,
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      </div>
      
      <div className="container-wide px-6 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 text-xs font-medium tracking-wider text-primary bg-primary/10 rounded-full mb-4">
            PRICING
          </span>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl mb-4">
            Choose the right plan for your needs
          </h2>
          <p className="text-lg text-gray-600">
            All plans include a 14-day free trial. No credit card required to get started.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <AnimatedSection
              key={index}
              delay={index * 100}
              animation="slide-up"
              className={`rounded-xl overflow-hidden ${
                plan.popular
                  ? "border-2 border-primary/30 shadow-xl shadow-primary/5 relative z-10 lg:scale-105"
                  : "border border-gray-200 shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-primary-foreground text-center text-sm font-medium py-1">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                
                <Button 
                  variant={plan.buttonVariant} 
                  className="w-full mb-8"
                >
                  {plan.buttonText}
                </Button>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection className="mt-16 p-8 rounded-xl border border-gray-200 bg-gray-50/50">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-medium mb-2">Need a custom plan?</h3>
            <p className="text-gray-600 mb-4">
              Contact our sales team for a tailored solution designed specifically for your organization's needs.
            </p>
            <Button variant="outline">Contact Sales</Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Pricing;
