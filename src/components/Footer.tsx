import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-law-navy text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">XMRT Lawyers</h3>
            <p className="text-sm">Leading the way in blockchain and cryptocurrency legal solutions.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/smart-contracts" className="hover:text-law-blue transition-colors">Smart Contracts</Link></li>
              <li><Link to="/services/ip" className="hover:text-law-blue transition-colors">Intellectual Property</Link></li>
              <li><Link to="/services/compliance" className="hover:text-law-blue transition-colors">Regulatory Compliance</Link></li>
              <li><Link to="/services/risk" className="hover:text-law-blue transition-colors">Risk Management</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/team" className="hover:text-law-blue transition-colors">Our Team</Link></li>
              <li><Link to="/contact" className="hover:text-law-blue transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-law-blue transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-law-blue transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>123 Blockchain Avenue</li>
              <li>New York, NY 10001</li>
              <li>
                <a 
                  href="mailto:xmrtsolutions@gmail.com"
                  className="hover:text-law-blue transition-colors"
                >
                  xmrtsolutions@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/50661500559"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-law-blue transition-colors"
                >
                  WhatsApp: +506 6150-0559
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} XMRT Lawyers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;