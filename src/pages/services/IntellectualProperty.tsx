import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import AiChatButton from '../../components/AiChatButton';
import { Lightbulb, FileText, Scale } from 'lucide-react';

const IntellectualProperty = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-law-navy text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blockchain IP Protection
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Protecting your intellectual property in the digital age
            </p>
            <AiChatButton />
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-law-gray rounded-lg">
                <Lightbulb className="w-12 h-12 text-law-blue mb-4" />
                <h3 className="text-xl font-semibold mb-3">IP Strategy</h3>
                <p className="text-gray-600">
                  Developing comprehensive IP strategies for blockchain projects
                </p>
              </div>
              
              <div className="p-6 bg-law-gray rounded-lg">
                <FileText className="w-12 h-12 text-law-blue mb-4" />
                <h3 className="text-xl font-semibold mb-3">Patent Protection</h3>
                <p className="text-gray-600">
                  Securing patents for blockchain innovations and technologies
                </p>
              </div>
              
              <div className="p-6 bg-law-gray rounded-lg">
                <Scale className="w-12 h-12 text-law-blue mb-4" />
                <h3 className="text-xl font-semibold mb-3">IP Enforcement</h3>
                <p className="text-gray-600">
                  Protecting your IP rights in the blockchain space
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-law-gray">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-law-navy">Protect Your Digital Innovation</h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              Secure your blockchain intellectual property with expert legal guidance
            </p>
            <AiChatButton />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IntellectualProperty;