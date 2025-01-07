import { Link } from 'react-router-dom';
import { Shield, Scale, Briefcase, Network } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AiChatButton from '../components/AiChatButton';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <div 
        className="bg-law-navy text-white py-16 md:py-24"
        style={{
          backgroundImage: "linear-gradient(rgba(26, 54, 93, 0.9), rgba(26, 54, 93, 0.9)), url('https://images.unsplash.com/photo-1496307653780-42ee777d4833')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Legal Excellence in the Digital Age
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Specialized legal services for blockchain technology, smart contracts, and digital assets.
          </p>
          <AiChatButton />
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-law-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-law-navy">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Shield className="w-12 h-12 mx-auto mb-4 text-law-blue" />
              <h3 className="text-xl font-semibold mb-2">Smart Contracts</h3>
              <p className="text-gray-600">Legal framework and auditing for smart contract development</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Scale className="w-12 h-12 mx-auto mb-4 text-law-blue" />
              <h3 className="text-xl font-semibold mb-2">Regulatory Compliance</h3>
              <p className="text-gray-600">Navigate complex regulatory requirements in the blockchain space</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Briefcase className="w-12 h-12 mx-auto mb-4 text-law-blue" />
              <h3 className="text-xl font-semibold mb-2">DeFi Solutions</h3>
              <p className="text-gray-600">Legal support for decentralized finance projects</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Network className="w-12 h-12 mx-auto mb-4 text-law-blue" />
              <h3 className="text-xl font-semibold mb-2">NFT & Blockchain</h3>
              <p className="text-gray-600">Legal framework for NFT projects and blockchain solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-law-navy">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Let our team of experts help you navigate the legal complexities of blockchain technology.
          </p>
          <AiChatButton />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;