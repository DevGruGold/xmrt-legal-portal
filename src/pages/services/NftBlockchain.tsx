import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import AiChatButton from '../../components/AiChatButton';
import { Image, FileText, Shield } from 'lucide-react';

const NftBlockchain = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-law-navy text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              NFT & Blockchain Services
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Comprehensive legal solutions for NFTs and blockchain technology
            </p>
            <AiChatButton />
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-law-gray rounded-lg">
                <Image className="w-12 h-12 text-law-blue mb-4" />
                <h3 className="text-xl font-semibold mb-3">NFT Rights</h3>
                <p className="text-gray-600">
                  Legal protection for NFT creators and collectors
                </p>
              </div>
              
              <div className="p-6 bg-law-gray rounded-lg">
                <FileText className="w-12 h-12 text-law-blue mb-4" />
                <h3 className="text-xl font-semibold mb-3">Smart Contracts</h3>
                <p className="text-gray-600">
                  Legal framework for NFT smart contracts
                </p>
              </div>
              
              <div className="p-6 bg-law-gray rounded-lg">
                <Shield className="w-12 h-12 text-law-blue mb-4" />
                <h3 className="text-xl font-semibold mb-3">Asset Protection</h3>
                <p className="text-gray-600">
                  Secure your digital assets and NFT investments
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-law-gray">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-law-navy">Protect Your Digital Assets</h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              Get expert legal guidance for your NFT and blockchain ventures
            </p>
            <AiChatButton />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NftBlockchain;