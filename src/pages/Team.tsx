import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AiChatButton from '../components/AiChatButton';
import { User } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: "Sarah Chen",
      role: "Smart Contracts Lead",
      bio: "Expert in blockchain law and smart contract development with 10+ years experience"
    },
    {
      name: "Michael Rodriguez",
      role: "IP Specialist",
      bio: "Specialized in blockchain intellectual property and patent law"
    },
    {
      name: "David Kim",
      role: "Compliance Director",
      bio: "Former regulator with expertise in cryptocurrency compliance"
    },
    {
      name: "Emily Thompson",
      role: "DeFi Legal Advisor",
      bio: "Specialized in decentralized finance and regulatory frameworks"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-law-navy text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Legal Experts
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Meet our team of specialized blockchain and cryptocurrency lawyers
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member.name} className="p-6 bg-law-gray rounded-lg text-center">
                  <div className="w-24 h-24 bg-law-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-law-blue font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-law-gray">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-law-navy">Work With Our Experts</h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              Get specialized legal guidance from our team of blockchain experts
            </p>
            <AiChatButton />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Team;