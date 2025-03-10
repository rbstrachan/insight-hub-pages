
import AnimatedSection from "./AnimatedSection";

const integrations = [
  {
    name: "Microsoft Office",
    logo: "https://via.placeholder.com/160x80?text=Microsoft",
    description: "Seamlessly import and export Word, Excel, and PowerPoint files.",
  },
  {
    name: "Zotero",
    logo: "https://via.placeholder.com/160x80?text=Zotero",
    description: "Integrate with your reference management workflow.",
  },
  {
    name: "Atlas.ti",
    logo: "https://via.placeholder.com/160x80?text=Atlas.ti",
    description: "Import projects from Atlas.ti for enhanced analysis.",
  },
  {
    name: "NVivo",
    logo: "https://via.placeholder.com/160x80?text=NVivo",
    description: "Migrate data from NVivo with our conversion tools.",
  },
  {
    name: "REDCap",
    logo: "https://via.placeholder.com/160x80?text=REDCap",
    description: "Connect directly to your REDCap research databases.",
  },
  {
    name: "Google Workspace",
    logo: "https://via.placeholder.com/160x80?text=Google",
    description: "Work with Google Docs, Sheets, and Drive files.",
  },
  {
    name: "Slack",
    logo: "https://via.placeholder.com/160x80?text=Slack",
    description: "Get notifications and updates directly in Slack.",
  },
  {
    name: "Tableau",
    logo: "https://via.placeholder.com/160x80?text=Tableau",
    description: "Export analysis results to Tableau for visualization.",
  },
];

const Integrations = () => {
  return (
    <section id="integrations" className="py-20 bg-white">
      <div className="container-wide px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 text-xs font-medium tracking-wider text-primary bg-primary/10 rounded-full mb-4">
            INTEGRATIONS
          </span>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl mb-4">
            Connect with your favorite tools
          </h2>
          <p className="text-lg text-gray-600">
            InsightIQ works seamlessly with the software and services you already use.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <AnimatedSection
              key={index}
              delay={index * 50}
              animation="scale-in"
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
            >
              <img
                src={integration.logo}
                alt={integration.name}
                className="h-12 object-contain mx-auto mb-4"
              />
              <h3 className="font-medium mb-2">{integration.name}</h3>
              <p className="text-sm text-gray-600">{integration.description}</p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need an integration not listed here?
          </p>
          <a
            href="#"
            className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
          >
            Request an integration
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Integrations;
