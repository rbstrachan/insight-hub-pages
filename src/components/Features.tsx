
import AnimatedSection from "./AnimatedSection";
import { Search, MessageSquare, FileText, Brain } from "lucide-react";

const features = [
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: "Advanced Text Analysis",
    description:
      "Quickly identify patterns, themes, and sentiments across thousands of text documents with our AI-powered analysis engine.",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-primary" />,
    title: "Interview Transcription",
    description:
      "Automatically transcribe and analyze interviews with our speech-to-text technology. Save hours of manual work.",
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Collaborative Coding",
    description:
      "Work together with your team in real-time. Add, edit, and merge codes seamlessly across projects.",
  },
  {
    icon: <Brain className="h-10 w-10 text-primary" />,
    title: "AI-Assisted Insights",
    description:
      "Let our machine learning algorithms help you discover connections and insights you might have missed.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white relative">
      <div className="container-wide px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 text-xs font-medium tracking-wider text-primary bg-primary/10 rounded-full mb-4">
            POWERFUL FEATURES
          </span>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl mb-4">
            Everything you need for qualitative research
          </h2>
          <p className="text-lg text-gray-600">
            Our comprehensive suite of tools helps you organize, analyze, and
            extract meaningful insights from your qualitative data.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              delay={index * 100}
              animation="slide-up"
              className="p-6 rounded-xl hover-lift glass-card"
            >
              <div className="p-2 mb-4 inline-block rounded-lg bg-primary/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 p-8 rounded-2xl glass-card overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <span className="inline-block py-1 px-3 text-xs font-medium tracking-wider text-primary bg-primary/10 rounded-full">
                SPOTLIGHT FEATURE
              </span>
              <h3 className="text-2xl font-semibold tracking-tight">
                Interactive Visualization Dashboard
              </h3>
              <p className="text-gray-600">
                Transform your qualitative data into stunning visualizations.
                Create networks, word clouds, sentiment analysis charts, and more
                with just a few clicks.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-600 mr-2">
                    ✓
                  </span>
                  <span className="text-gray-700">
                    Export in multiple formats (PNG, SVG, PDF)
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-600 mr-2">
                    ✓
                  </span>
                  <span className="text-gray-700">
                    Interactive filters and customization
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-100 text-green-600 mr-2">
                    ✓
                  </span>
                  <span className="text-gray-700">
                    Present-ready visualizations
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Interactive Dashboard"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm text-xs font-medium text-gray-700">
                Interactive Dashboard
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Features;
