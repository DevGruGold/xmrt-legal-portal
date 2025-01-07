import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    { name: "Smart Contracts", path: "/services/smart-contracts" },
    { name: "Intellectual Property", path: "/services/ip" },
    { name: "Regulatory Compliance", path: "/services/compliance" },
    { name: "Risk Management", path: "/services/risk" },
    { name: "DeFi Resolution", path: "/services/defi" },
    { name: "NFT & Blockchain", path: "/services/nft" },
  ];

  return (
    <nav className="bg-law-navy text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">XMRT Lawyers</Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-law-blue transition-colors">Home</Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center hover:text-law-blue transition-colors">
                Services <ChevronDown className="ml-1" size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                {services.map((service) => (
                  <DropdownMenuItem key={service.path}>
                    <Link 
                      to={service.path}
                      className="w-full text-law-navy hover:text-law-blue transition-colors"
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/team" className="hover:text-law-blue transition-colors">Our Team</Link>
            <Link to="/contact" className="hover:text-law-blue transition-colors">Contact</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="hover:text-law-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="hover:text-law-blue transition-colors pl-4"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
              <Link 
                to="/team" 
                className="hover:text-law-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Our Team
              </Link>
              <Link 
                to="/contact" 
                className="hover:text-law-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;