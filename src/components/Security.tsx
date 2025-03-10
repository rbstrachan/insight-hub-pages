
import AnimatedSection from "./AnimatedSection";
import { Shield, Lock, FileText, UserCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "End-to-End Encryption",
    description:
      "Your data is encrypted both in transit and at rest using industry-standard AES-256 encryption.",
  },
  {
    icon: <Lock className="h-10 w-10 text-primary" />,
    title: "Secure Authentication",
    description:
      "Multi-factor authentication and single sign-on options keep your account secure.",
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Compliance Ready",
    description:
      "We maintain compliance with GDPR, HIPAA, and other relevant data protection regulations.",
  },
  {
    icon: <UserCheck className="h-10 w-10 text-primary" />,
    title: "Granular Permissions",
    description:
      "Control exactly who can access, view, and edit your research data with role-based permissions.",
  },
];

const Security = () => {
  return (
    <section id="security" className="py-20 bg-gray-50">
      <div className="container-wide px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 text-xs font-medium tracking-wider text-primary bg-primary/10 rounded-full mb-4">
            SECURITY & PRIVACY
          </span>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl mb-4">
            Your data is safe with us
          </h2>
          <p className="text-lg text-gray-600">
            We understand the sensitivity of research data. That's why security and privacy are built into everything we do.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {securityFeatures.map((feature, index) => (
            <AnimatedSection
              key={index}
              delay={index * 100}
              className="bg-white rounded-xl p-6 shadow-sm flex"
            >
              <div className="p-2 rounded-lg bg-primary/10 mr-4 h-fit">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 space-y-6">
              <h3 className="text-2xl font-semibold">Our Security Commitment</h3>
              <p className="text-gray-700">
                InsightIQ is committed to maintaining the highest standards of data security and privacy protection. We regularly conduct security audits and penetration testing to ensure your data remains protected.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">SOC 2 Type II Certified</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">GDPR Compliant</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">HIPAA Compliant</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Regular Security Audits</span>
                </div>
              </div>
              <a
                href="#"
                className="inline-block text-primary font-medium hover:underline"
              >
                Read our security whitepaper →
              </a>
            </div>
            <div className="bg-gray-100 p-8 flex items-center justify-center">
              <div className="max-w-md space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-medium mb-2">Data Ownership</h4>
                  <p className="text-gray-700 text-sm">
                    You always maintain full ownership of your data. We never access your content unless explicitly requested for support purposes.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-medium mb-2">Global Infrastructure</h4>
                  <p className="text-gray-700 text-sm">
                    Choose where your data is stored with our global data center options, ensuring compliance with local data sovereignty requirements.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-medium mb-2">Data Portability</h4>
                  <p className="text-gray-700 text-sm">
                    Export your data at any time in standard formats for portability and to prevent vendor lock-in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Security;
