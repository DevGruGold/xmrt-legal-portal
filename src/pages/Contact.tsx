import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AiChatButton from '../components/AiChatButton';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-law-navy text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get in touch with our blockchain legal experts
            </p>
          </div>
        </div>

        {/* Contact Options */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <a 
                href="mailto:xmrtsolutions@gmail.com"
                className="p-6 bg-law-gray rounded-lg text-center hover:bg-law-blue hover:text-white transition-colors group"
              >
                <Mail className="w-12 h-12 mx-auto mb-4 group-hover:text-white text-law-blue" />
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p>xmrtsolutions@gmail.com</p>
              </a>
              
              <a 
                href="https://wa.me/50661500559"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-law-gray rounded-lg text-center hover:bg-law-blue hover:text-white transition-colors group"
              >
                <Phone className="w-12 h-12 mx-auto mb-4 group-hover:text-white text-law-blue" />
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p>+506 6150-0559</p>
              </a>
              
              <div className="p-6 bg-law-gray rounded-lg text-center">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 text-law-blue" />
                <h3 className="text-xl font-semibold mb-2">Chat with AI</h3>
                <p className="mb-4">Get immediate assistance</p>
                <AiChatButton />
              </div>
            </div>

            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4 text-law-navy">Office Location</h2>
              <p className="text-gray-600">
                123 Blockchain Avenue<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;