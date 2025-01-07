import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import AiChatButton from '../../components/AiChatButton';
import { Shield, FileCheck, Scale } from 'lucide-react';

const Compliance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-law-navy text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blockchain Compliance Services
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Navigate regulatory requirements with confidence
            </p>
            <AiChatButton />
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-law-gray rounded-lg">
                <Shield className="w-12 h-12 text-law-blue mb-4" />
                <h3 className="text-xl font-semibold mb-3">Regulatory Compliance</h3>
                <p className="text-gray-600">
                  Ensure your blockchain operations meet all regulatory requirements
                </p>
              </div>
              
              <div className="p-6 bg-law-gray rounded-lg">
                <FileCheck className="w-12 h-12 text-law-blue mb-4" />
                <h3 className="text-xl font-semibold mb-3">Compliance Audits</h3>
                <p className="text-gray-600">
                  Comprehensive audits of your blockchain compliance procedures
                </p>
              </div>
              
              <div className="p-6 bg-law-gray rounded-lg">
                <Scale className="w-12 h-12 text-law-blue mb-4" />
                <h3 className="text-xl font-semibold mb-3">Policy Development</h3>
                <p className="text-gray-600">
                  Create robust compliance policies for your blockchain operations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-law-gray">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-law-navy">Stay Compliant in the Blockchain Space</h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              Get expert guidance on blockchain compliance requirements
            </p>
            <AiChatButton />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Compliance;