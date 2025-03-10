
import AnimatedSection from "./AnimatedSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const useCases = [
  {
    id: "academic",
    title: "Academic Research",
    description:
      "Perfect for researchers conducting qualitative studies in fields like sociology, psychology, education, and healthcare.",
    benefits: [
      "Analyze research interviews efficiently",
      "Identify emerging themes across data sets",
      "Collaborate with research teams globally",
      "Generate publication-ready visualizations",
    ],
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
  },
  {
    id: "business",
    title: "Market Research",
    description:
      "Help businesses understand customer feedback, analyze focus groups, and extract insights from open-ended survey responses.",
    benefits: [
      "Process customer feedback at scale",
      "Identify sentiment patterns in reviews",
      "Track emerging market trends",
      "Generate actionable business insights",
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "healthcare",
    title: "Healthcare Analysis",
    description:
      "Analyze patient feedback, medical interviews, and healthcare documentation to improve care quality and patient experiences.",
    benefits: [
      "Process clinical interview data",
      "Identify patterns in patient experiences",
      "Support evidence-based practice improvements",
      "Comply with healthcare data regulations",
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
  },
  {
    id: "government",
    title: "Government & Policy",
    description:
      "Support policy analysis by processing public comments, hearings, and qualitative policy research to inform decision-making.",
    benefits: [
      "Analyze public consultation data",
      "Extract themes from policy documents",
      "Support evidence-based policymaking",
      "Process legislative and regulatory texts",
    ],
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-20 bg-gray-50">
      <div className="container-wide px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 text-xs font-medium tracking-wider text-primary bg-primary/10 rounded-full mb-4">
            USE CASES
          </span>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl mb-4">
            Who benefits from InsightIQ?
          </h2>
          <p className="text-lg text-gray-600">
            Our platform is designed for anyone working with qualitative data,
            from academic researchers to business analysts.
          </p>
        </AnimatedSection>

        <Tabs defaultValue="academic" className="w-full">
          <TabsList className="w-full justify-start overflow-x-auto mb-6 pb-2 space-x-4">
            {useCases.map((useCase) => (
              <TabsTrigger
                key={useCase.id}
                value={useCase.id}
                className="px-6 py-3"
              >
                {useCase.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {useCases.map((useCase) => (
            <TabsContent key={useCase.id} value={useCase.id}>
              <AnimatedSection
                animation="fade-in"
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className="space-y-6 order-2 lg:order-1">
                  <h3 className="text-2xl font-semibold">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                  <ul className="space-y-3">
                    {useCase.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary/10 text-primary mr-2 mt-0.5">
                          ✓
                        </span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-1 lg:order-2 relative">
                  <img
                    src={useCase.image}
                    alt={useCase.title}
                    className="rounded-xl shadow-xl w-full h-auto object-cover aspect-video"
                  />
                  <div className="absolute inset-0 rounded-xl border border-primary/10 -m-2 -z-10"></div>
                </div>
              </AnimatedSection>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default UseCases;
