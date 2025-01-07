import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import AiChatButton from '../../components/AiChatButton';
import { FileCheck, Shield, Code } from 'lucide-react';

const SmartContracts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-law-navy text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Smart Contract Legal Services
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Expert legal guidance for smart contract development, auditing, and implementation
            </p>
            <AiChatButton />
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-law-gray rounded-lg">
                <Code className="w-12 h-12 text-law-blue mb-4" />
                <h3 className="text-xl font-semibold mb-3">Contract Development</h3>
                <p className="text-gray-600">
                  Legal framework development for smart contracts ensuring compliance and security
                </p>
              </div>
              
              <div className="p-6 bg-law-gray rounded-lg">
                <FileCheck className="w-12 h-12 text-law-blue mb-4" />
                <h3 className="text-xl font-semibold mb-3">Contract Auditing</h3>
                <p className="text-gray-600">
                  Comprehensive legal audits of smart contracts to identify and mitigate risks
                </p>
              </div>
              
              <div className="p-6 bg-law-gray rounded-lg">
                <Shield className="w-12 h-12 text-law-blue mb-4" />
                <h3 className="text-xl font-semibold mb-3">Legal Protection</h3>
                <p className="text-gray-600">
                  Ensuring your smart contracts are legally sound and protected
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-law-gray">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-law-navy">Ready to Secure Your Smart Contracts?</h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              Get expert legal guidance for your blockchain projects
            </p>
            <AiChatButton />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SmartContracts;