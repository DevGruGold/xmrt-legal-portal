import { Link } from 'react-router-dom';
import { Shield, Scale, Briefcase, Network, Globe, Building } from 'lucide-react';
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

      {/* Location Strategy Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Globe className="w-12 h-12 text-law-blue mr-4" />
              <h2 className="text-3xl font-bold text-law-navy">Strategic Global Presence</h2>
            </div>
            
            <div className="space-y-6 text-gray-600">
              <p className="text-lg">
                XMRT Lawyers has strategically established its primary operations in Costa Rica, leveraging the country's 
                progressive stance on cryptocurrency and blockchain technology. Costa Rica's favorable regulatory environment 
                provides an ideal foundation for serving our global clientele while maintaining compliance with international standards.
              </p>
              
              <div className="flex items-start space-x-4 bg-law-gray/10 p-6 rounded-lg">
                <Building className="w-6 h-6 text-law-blue mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-law-navy mb-2">Adaptive Location Strategy</h3>
                  <p>
                    As the blockchain legal landscape evolves, we maintain the flexibility to establish presence in emerging 
                    crypto-friendly jurisdictions, including El Salvador and other nations at the forefront of cryptocurrency 
                    adoption. This adaptable approach ensures we can provide comprehensive legal support tailored to various 
                    regulatory frameworks across different countries.
                  </p>
                </div>
              </div>

              <p className="text-lg">
                Our international network of legal experts and strategic positioning enables us to navigate complex cross-border 
                regulations, providing our clients with robust legal solutions regardless of their geographical location or 
                regulatory requirements.
              </p>
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
