import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import AiChatButton from '../../components/AiChatButton';
import { AlertTriangle, Shield, LineChart } from 'lucide-react';

const RiskManagement = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-law-navy text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blockchain Risk Management
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Identify and mitigate risks in your blockchain operations
            </p>
            <AiChatButton />
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-law-gray rounded-lg">
                <AlertTriangle className="w-12 h-12 text-law-blue mb-4" />
                <h3 className="text-xl font-semibold mb-3">Risk Assessment</h3>
                <p className="text-gray-600">
                  Comprehensive analysis of blockchain operational risks
                </p>
              </div>
              
              <div className="p-6 bg-law-gray rounded-lg">
                <Shield className="w-12 h-12 text-law-blue mb-4" />
                <h3 className="text-xl font-semibold mb-3">Risk Mitigation</h3>
                <p className="text-gray-600">
                  Develop strategies to protect your blockchain assets
                </p>
              </div>
              
              <div className="p-6 bg-law-gray rounded-lg">
                <LineChart className="w-12 h-12 text-law-blue mb-4" />
                <h3 className="text-xl font-semibold mb-3">Monitoring</h3>
                <p className="text-gray-600">
                  Ongoing risk monitoring and management solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-law-gray">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-law-navy">Protect Your Blockchain Assets</h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              Get expert risk management guidance for your blockchain operations
            </p>
            <AiChatButton />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RiskManagement;