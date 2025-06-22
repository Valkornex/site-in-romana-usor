
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo și descriere */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/41c2a8a2-886f-48da-8229-f282178575b4.png" 
                alt="Advice Link Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Oferim soluții profesionale de consultanță pentru a-ți transforma ideile în realitate. 
              Echipa noastră de experți te va ghida către succesul dorit.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigare rapidă */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigare Rapidă</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Acasă
                </Link>
              </li>
              <li>
                <Link to="/despre-noi" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link to="/expertiza" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Expertiză
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicii */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicii</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Strategii de Creștere</li>
              <li>Consultanță Investiții</li>
              <li>Marketing & Brand</li>
              <li>Analiză Financiară</li>
              <li>Sustenabilitate</li>
            </ul>
          </div>

        

        {/* Separator */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Advice Link. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/politica-de-confidentialitate" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Politica de Confidențialitate
              </Link>
              <Link to="/termeni-si-conditii" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Termeni și Condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
